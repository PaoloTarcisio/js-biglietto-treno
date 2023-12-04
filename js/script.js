const chilometri = prompt ("Qunati chilometri devi percorrere? ");
const kmInNumber = parseInt (chilometri);

// verifica che i km siano scritti in numero
if (isNaN(chilometri)) {
    alert ('Inserisci i chilometri in numero');
}

else {

    const età = prompt ("Quanti anni hai? ");
    const etàInNumber = parseInt (etàInNumber);


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
            // uguale a fare (prezzo *= 0.8)
        }

        if (età > 65) {
                prezzo = (prezzo - ((prezzo / 100) * 40));
                // uguale a fare (prezzo *= 0.6)

        };  

        document.getElementById('prezzo-biglietto').innerHTML = "Il prezzo del tuo biglietto è: " + prezzo.toFixed(2) + "€.";
        console.log(prezzo)
    }
};



