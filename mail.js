// Lista di email autorizzate
const emailAutorizzate = [
    "utente1@example.com",
    "utente2@example.com",
    "utente3@example.com"
];

document.getElementById('controllaAccesso').addEventListener('click', function() {
    const emailInserita = document.getElementById('email').value.trim();

    // Controlla se l'email è nella lista di email autorizzate
    if (emailAutorizzate.includes(emailInserita)) {
        document.getElementById('risultato').innerText = "Accesso consentito!";
    } else {
        document.getElementById('risultato').innerText = ""; // Non mostrare nulla se non è autorizzato
    }
});