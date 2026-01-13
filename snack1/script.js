//Creazione array con oggetto letterale

const oggetti = [
    { nome: "bici", marca: "atala", peso: 10,},   
    { nome: "bici", marca: "bianchi", peso: 9,},            
    { nome: "bici", marca: "pinarello", peso: 8,},
    { nome: "auto", marca: "audi", },
    { nome: "auto", marca: "bmw", },
    { nome: "auto", marca: "mercedes",},
    { nome: "moto", marca: "yamaha", },
    { nome: "moto", marca: "honda", },
];  

//Avvio ciclo for 

for (let i = 0; i < oggetti.length; i++) { 
    const pesominimo = 8;  //definita variabile con peso minimo
    if (oggetti[i].nome === "bici" && oggetti[i].peso === pesominimo) {
        console.log("L'oggetto con il peso minimo è:", oggetti[i]);
    }
}


//Ricerca per pescare bici con peso minimo senza definire variabile peso minimo


//correzione: 
//Preparo una variabile che contiene la bici piu leggera
//CONTROLLO OGNI BICICLETTA dell'array SOVRASCIVENDO CON QUELLA PIU LEGGERA 
//CON UN CICLO FOR PARTO DALL PRIMA E LE CONFRONTO
//return  il risultato

function biciLeggera() {
    let biciLeggera = oggetti[0]; //assumo che la prima bici sia la piu leggera

    for (let i = 1; i < oggetti.length; i++) {
        if (oggetti[i].nome === "bici" && oggetti[i].peso < biciLeggera.peso) {
            biciLeggera = oggetti[i]; //sovrascrivo la bici piu leggera
        }
    }

    return biciLeggera;
}

console.log("La bici più leggera è:", biciLeggera());



