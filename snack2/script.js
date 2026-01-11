
const oggetti = [

    { nome:"juventus", puntiFatti:0, falliSubiti:0,},   
    { nome:"milan", puntiFatti:0, falliSubiti:0,},            
    { nome:"inter", puntiFatti:0, falliSubiti:0,},
    { nome:"napoli", puntiFatti:0, falliSubiti:0,},
    { nome:"roma", puntiFatti:0, falliSubiti:0,},
]

//Ciclo for che prende ogni squadra e assegna numero random (grazie a Math.floor(Math.random()) punti e falli

for (let i = 0; i < oggetti.length; i++) { 
    oggetti[i].puntiFatti = Math.floor(Math.random() * 102); 
    oggetti[i].falliSubiti = Math.floor(Math.random() * 50); 
}

let risultato = []; 
for (let i = 0; i < oggetti.length; i++) { 
    //risultato.push({oggetti[i].falliSubiti,oggetti[i].nome}); 
    // errore presente Missing initializer in const declaration
    const nome = oggetti[i].nome;
    const falliSubiti = oggetti[i].falliSubiti;
    risultato.push({nome, falliSubiti});
}

console.log(risultato);
