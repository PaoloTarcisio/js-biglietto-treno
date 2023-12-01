const chilometri = prompt ("Qunati chilometri devi percorrere? ");

// verifica che i km siano scritti in numero
if (isNaN(chilometri)) {
    alert ('Inserisci i chilometri in numero');
}

else {

    const età = prompt ("Quanti anni hai? ");

    // verifica che l'età sia scritta in numero
    if (isNaN(età)){
        alert ('Inserisci la tua età in numero');
    }

    else {
        // calcolo prezzo biglietto
        let prezzo = (chilometri * 0.21);

        // verifico sconti
        if (età < 18) {
            prezzo = (prezzo - ((prezzo / 100) * 20));
        }

        if (età > 65) {
                prezzo = (prezzo - ((prezzo / 100) * 40));
        };  

        document.getElementById('prezzo-biglietto').innerHTML = "Il prezzo del tuo biglietto è: " + prezzo.toFixed(2) + "€.";
        console.log(prezzo)
    }
};



