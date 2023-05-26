# Calcolare il bisglietto del treno

Calcolare il prezzo del biglietto del treno, tenendo conto di alcune variabili come:
 - Tariffa chilometrica è di € 0.21/km
 - Sconto del 20% per viaggiatori minorenni
 - Sconto del 40% per viaggiatori over 65

## Procedura

- Dichiaro una variabile dove stabilisco il prezzo fisso del biglietto
- Interrogo quanti chilometri vuole percorrere l'utente
    - Trasformo la stringa comunicata dal utente in un numero
- Interrogo l'età del passeggero
    - Trasformo la stringa comunicata dal utente in un numero
- Dichiaro una variabile dove stabilisco lo sconto
    - Applico le condizioni alla variabile dove indico che in base all'età indicata devo applicare uno sconto
- Calcolo il prezzo del biglietto in base al chilometraggio comunicato dall'utente, registrandolo in una variabile
    - Applico lo sconto in base all'etetà inserita dall'utente
- Prendendo l'elemento dal DOM riporto il risultato sul DOM