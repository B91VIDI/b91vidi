B91 BY VIDI — SITO DEFINITIVO
================================

Struttura
---------
/                       Homepage English
/it/                    Homepage Italiano
/platforms/             Airbnb · Booking.com · Vrbo (EN)
/it/platforms/          Airbnb · Booking.com · Vrbo (IT)

Contatti diretti configurati
-----------------------------
WhatsApp: +39 349 550 5558
Email:    b91byvidi@gmail.com

Prenotazione diretta
--------------------
Il form NON salva dati sul sito.
Dopo date/ospiti apre:
- WhatsApp con messaggio già compilato, oppure
- il client email dell'ospite con richiesta già compilata.

Le date vengono validate nel browser e non possono essere nel passato.
La partenza deve essere successiva all'arrivo.

Recensioni mostrate al 07/09/2026
--------------------------------
Airbnb:      5,0/5 · 50 recensioni
Booking.com: 10/10 · 5 recensioni
Vrbo:        10/10 · 39 recensioni esterne

Questi valori sono statici: non esiste in questa versione un collegamento API
che li aggiorni automaticamente. Quando cambiano, vanno modificati nei file HTML.

Foto
----
Le 2 immagini reali usate dalla homepage sono caricate direttamente dalla
pagina Airbnb di B91 tramite il CDN Airbnb. Questo evita che spariscano quando
sostituisci l'attuale deploy Netlify. In futuro è preferibile scaricare le
foto originali e ospitarle direttamente nel sito.

Pubblicazione Netlify
---------------------
1. Apri il progetto B91 su Netlify.
2. Crea un nuovo deploy manuale trascinando il CONTENUTO di questa cartella
   (oppure il file ZIP se l'interfaccia lo accetta come sorgente da estrarre).
3. Verifica:
   - /
   - /it/
   - /platforms/
   - /it/platforms/
4. Da iPhone prova:
   - cambio lingua
   - WhatsApp
   - email
   - Airbnb / Booking.com / Vrbo
5. Dopo il controllo, usa:
   Instagram link 1: https://b91byvidi.netlify.app/
   Instagram link 2: https://b91byvidi.netlify.app/platforms/

Nota dominio
------------
Se in futuro passerai a un dominio proprietario, aggiorna DOMAIN nei metadata,
robots.txt e sitemap.xml. La grafica e la struttura non devono cambiare.
