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