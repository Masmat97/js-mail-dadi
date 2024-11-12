document.getElementById('lanciaDadi').addEventListener('click', function () {
    // Genera un numero casuale tra 1 e 6 per il giocatore
    const punteggioGiocatore = Math.floor(Math.random() * 6) + 1;

    // Genera un numero casuale tra 1 e 6 per il computer
    const punteggioComputer = Math.floor(Math.random() * 6) + 1;

    // Determina il vincitore
    let risultato;
    if (punteggioGiocatore > punteggioComputer) {
        risultato = `Hai vinto! Hai ottenuto ${punteggioGiocatore}, il computer ha ottenuto ${punteggioComputer}.`;
    } else if (punteggioGiocatore < punteggioComputer) {
        risultato = `Hai perso! Hai ottenuto ${punteggioGiocatore}, il computer ha ottenuto ${punteggioComputer}.`;
    } else {
        risultato = `È un pareggio! Entrambi avete ottenuto ${punteggioGiocatore}.`;
    }

    // Mostra il risultato
    document.getElementById('risultato').innerText = risultato;
});