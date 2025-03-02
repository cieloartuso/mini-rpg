
// Lista dei mostri
const listaMostri = [
    {nome: "Cicciolo", vita: {min: 10, max: 20}, attacco: {min: 5, max: 20}, difesa: {min: 3, max: 10}, perc_fuga: 95},
    {nome: "Freddy", vita: {min: 15, max: 35}, attacco: {min: 15, max: 20}, difesa: {min: 15, max: 30}, perc_fuga: 80},
    {nome: "NoSenSe", vita: {min: 20, max: 20}, attacco: {min: 10, max: 20}, difesa: {min: 33, max: 35}, perc_fuga: 50},
    {nome: "Moscow Mule", vita: {min: 50, max: 70}, attacco: {min: 30, max: 40}, difesa: {min: 30, max: 25}, perc_fuga: 60},
    {nome: "SasageyoSasageyo", vita: {min: 80, max: 100}, attacco: {min: 42, max: 52}, difesa: {min: 28, max: 35}, perc_fuga: 35},
    {nome: "Manuel Er Furioso", vita: {min: 100, max: 180}, attacco: {min: 60, max: 90}, difesa: {min: 30, max: 39}, perc_fuga: 5},
];

let personaggio = {}; // dati personaggio
let mostro = {}; // dati mostro



// Creazione del personaggio

function creazionePersonaggio(){
    const max = 100;
    const min = 5;

    const nome = prompt("Come si chiama il tuo personaggio?");

    // se il nome è null ferma il programma
    if(nome!=null){
        let vita = 100;
        let attacco = Math.floor(Math.random() * (max - min + 1) + min);
        let difesa = Math.floor(Math.random() * (max - min + 1) + min);
        let n_cure = 3;
    
        personaggio = {nome, vita, attacco, difesa, n_cure};
    
        console.log(`Il tuo personaggio si chiama: ${personaggio.nome}`)
        console.log(`%cVita: ${personaggio.vita}`, "font-style: italic;")
        console.log(`%cAttacco: ${personaggio.attacco}`, "font-style: italic;")
        console.log(`%cDifesa: ${personaggio.difesa}`, "font-style: italic;")
        return true;
    }else{
        return false;
    }
}


// Generazione mostro

function generazioneMostro(){
    // indice posizione mostro nella lista
    let index = Math.floor(Math.random() * listaMostri.length);

    // dati mostro
    let nome = listaMostri[index].nome
    let vita = Math.floor(Math.random() * (listaMostri[index].vita.max - listaMostri[index].vita.min + 1) + listaMostri[index].vita.min);
    let attacco = Math.floor(Math.random() * (listaMostri[index].attacco.max - listaMostri[index].attacco.min + 1) + listaMostri[index].attacco.min);
    let difesa = Math.floor(Math.random() * (listaMostri[index].difesa.max - listaMostri[index].difesa.min + 1) + listaMostri[index].difesa.min);
    let perc_fuga = listaMostri[index].perc_fuga;

    mostro = {nome, vita, attacco, difesa, perc_fuga}
    
    console.warn(`ATTENTO! Hai incontrato un ${mostro.nome}!`)
    console.log(`%cVita: ${mostro.vita}`, "font-style: italic;")
    console.log(`%cAttacco: ${mostro.attacco}`, "font-style: italic;")
    console.log(`%cDifesa: ${mostro.difesa}`, "font-style: italic;")
}



// Gestione turni

function gioco(){
    while(true){
        if (attaccoPersonaggio()) break;
        if (attaccoNemico()) break;
    }
}


// Funzione attacco del personaggio

function attaccoPersonaggio(){
    // scelta utente
    let mossa = Number(prompt("Cosa vuoi fare?\n 1. attacco\n 2. cura\n 3. fuggi"))
    
    if(isNaN(mossa)){   // Controlla se è un numero
        console.error("Valore inserito non valido")
        return true;
    }else{
        if(mossa===1){  // Attacco
            let punti = 0;
            if(personaggio.attacco<mostro.difesa){  // toglie quantità di punti molto bassa generata casualmente se la sua difesa è più alta del mio attacco
                punti = Math.ceil(Math.random() * 10);
            }else{
                punti = personaggio.attacco-mostro.difesa;
            }
            mostro.vita -= punti;
            if (fineGioco()) return true;;
            console.log(`%cHai ATTACCATO! La vita del nemico si è abbassata a ${mostro.vita}.`, "color: green;");
        }else if(mossa===2){    // Cura
            if(personaggio.n_cure===0){ // controlla se ho ancora pozioni
                console.log(`%cNon hai più pozioni da utilizzare`, "color: yellow");
            }else{
                personaggio.vita += Math.floor(Math.random() * (Number(personaggio.vita) - 1) + 1);
                personaggio.n_cure--;
                console.log(`Hai usato una POZIONE! La tua vita si è alzata a ${personaggio.vita}.`)
            }
        }else if(mossa===3){    // Fuga
            let num = Math.floor(Math.random() * 100);
            if(num<=mostro.perc_fuga){  // controllo percentuale di fuga del mostro
                console.log("Sei fuggito! Scampato pericolo...");
                return true;
            }else{
                console.log("Non puoi scappare!");
            }
        }else{
            return true;
        }
    }
}

// Funzione attacco del mostro

function attaccoNemico(){
    let punti;
    if(mostro.attacco<personaggio.difesa){  // toglie quantità di punti molto bassa generata casualmente se la mia difesa è più alta dell'attacco del mostro
        punti = Math.ceil(Math.random() * 10);
    }else{
        punti = mostro.attacco-personaggio.difesa
    }
    personaggio.vita -= punti
    if(fineGioco()) return true;
    console.log(`%c${mostro.nome} ti ATTACCA! La tua vita si abbassa a ${personaggio.vita}`, "color:red;")
}



// Gestione fine gioco

function fineGioco(){
    if(mostro.vita<=0){ // vittoria
        console.log(`%cHAI SCONFITTO ${mostro.nome}, COMPLIMENTI!`, "font-weight:bold; font-size: 20px");
        return true;
    }else if(personaggio.vita<=0){ // sconfitta
        console.log(`%cSei stato ucciso da ${mostro.nome}. Sfigato.`, "font-size: 20px");
        return true;
    }
}


// Avvio

if(!creazionePersonaggio()){
    console.log("Sei uscito dal gioco")
}else{
    generazioneMostro()
    gioco()
}