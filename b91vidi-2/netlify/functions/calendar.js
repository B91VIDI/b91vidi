const ICAL_FEEDS = [
  'https://www.airbnb.it/calendar/ical/1618077159648429077.ics?t=e7ef73c7a4f24813a0616de7f26fcdba',
  'https://ical.booking.com/v1/export?t=f3bb4b7f-6229-4d7d-8db4-1ac5bc33e67d',
  'http://www.vrbo.com/icalendar/31a33644c9f2486d9e1738d62ccd5b2e.ics'
];

function parseIcalDate(val) {
  const s = val.replace(/T.*/, '').replace(/-/g, '');
  if (s.length < 8) return null;
  return new Date(
    parseInt(s.slice(0, 4)),
    parseInt(s.slice(4, 6)) - 1,
    parseInt(s.slice(6, 8))
  );
}

function parseIcal(text) {
  const dates = new Set();
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  let inEvent = false, start = null, end = null;

  for (let line of lines) {
    line = line.trim();
    if (line === 'BEGIN:VEVENT') { inEvent = true; start = null; end = null; }
    else if (line === 'END:VEVENT') {
      if (start && end) {
        let d = new Date(start);
        while (d < end) {
          dates.add(d.toISOString().slice(0, 10));
          d.setDate(d.getDate() + 1);
        }
      }
      inEvent = false;
    } else if (inEvent) {
      const key = line.split(':')[0].split(';')[0];
      const val = line.slice(line.indexOf(':') + 1).trim();
      if (key === 'DTSTART') start = parseIcalDate(val);
      if (key === 'DTEND')   end   = parseIcalDate(val);
    }
  }
  return [...dates];
}

exports.handler = async function() {
  const allDates = new Set();

  const results = await Promise.allSettled(
    ICAL_FEEDS.map(url =>
      fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; B91Calendar/1.0)' }
      }).then(r => r.text()).then(parseIcal)
    )
  );

  results.forEach(r => {
    if (r.status === 'fulfilled') {
      r.value.forEach(d => allDates.add(d));
    }
  });

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600' // cache 1 hour
    },
    body: JSON.stringify({ booked: [...allDates] })
  };
};
