

const listaMostri = [
    {nome: "Cicciolo", vita: {min: 10, max: 20}, attacco: {min: 5, max: 20}, difesa: {min: 3, max: 10}, perc_fuga: 95},
    {nome: "Freddy", vita: {min: 15, max: 35}, attacco: {min: 15, max: 20}, difesa: {min: 15, max: 30}, perc_fuga: 80},
    {nome: "NoSenSe", vita: {min: 20, max: 20}, attacco: {min: 10, max: 20}, difesa: {min: 33, max: 35}, perc_fuga: 50},
    {nome: "Moscow Mule", vita: {min: 50, max: 70}, attacco: {min: 30, max: 40}, difesa: {min: 30, max: 25}, perc_fuga: 60},
    {nome: "SasageyoSasageyo", vita: {min: 80, max: 100}, attacco: {min: 42, max: 52}, difesa: {min: 28, max: 35}, perc_fuga: 35},
    {nome: "Manuel Er Furioso", vita: {min: 100, max: 180}, attacco: {min: 60, max: 90}, difesa: {min: 30, max: 39}, perc_fuga: 5},
];

let personaggio = {};
let mostro = {};

// Creazione del personaggio

function creazionePersonaggio(){
    const max = 100;
    const min = 40;

    const nome = prompt("Come si chiama il tuo personaggio?");
    let vita = 100;
    let attacco = Math.floor(Math.random() * (max - min + 1) + min);
    let difesa = Math.floor(Math.random() * (max - min + 1) + min);
    let n_cure = 3;

    personaggio = {nome, vita, attacco, difesa, n_cure};

    console.log(`Il tuo personaggio si chiama: ${personaggio.nome}`)
    console.log(`Vita: ${personaggio.vita}`)
    console.log(`Attacco: ${personaggio.attacco}`)
    console.log(`Difesa: ${personaggio.difesa}`)
}


// Generazione mostrocielo

function generazioneMostro(){
    let index = Math.floor(Math.random() * listaMostri.length);

    let nome = listaMostri[index].nome
    let vita = Math.floor(Math.random() * (listaMostri[index].vita.max - listaMostri[index].vita.min + 1) + listaMostri[index].vita.min);
    let attacco = Math.floor(Math.random() * (listaMostri[index].attacco.max - listaMostri[index].attacco.min + 1) + listaMostri[index].attacco.min);
    let difesa = Math.floor(Math.random() * (listaMostri[index].difesa.max - listaMostri[index].difesa.min + 1) + listaMostri[index].difesa.min);

    mostro = {nome, vita, attacco, difesa}
    
    console.warn(`ATTENTO! Hai incontrato un ${mostro.nome}!`)
    console.log(`Vita: ${mostro.vita}`)
    console.log(`Attacco: ${mostro.attacco}`)
    console.log(`Difesa: ${mostro.difesa}`)
}



// Gestione turni

function gioco(){
    while(true){
        let mossa = Number(prompt("Cosa vuoi fare?\n 1. attacco\n 2. cura\n 3. fuggi"))
    
        if(isNaN(mossa)){
            console.error("Valore inserito non valido")
            break;
        }else{
            console.log(mossa)
            if(mossa===1){
                mostro.vita = mostro.vita-(personaggio.attacco-mostro.difesa)
                console.log(`Hai ATTACCATO! La vita del nemico si è abbassata a ${mostro.vita}.`)
            }else if(mossa===2){
                personaggio.vita += Math.floor(Math.random() * (Number(personaggio.vita) - 1) + 1);
                console.log(`Hai usato una POZIONE! La tua vita si è alzata a ${personaggio.vita}.`)
            }else if(mossa===3){
                let num = Math.floor(Math.random() * 100);
                if(num<=mostro.perc_fuga){
                    console.log("Sei fuggito! Scampato pericolo...");
                    break;
                }else{
                    console.log("Non puoi scappare!");
                }
            }
        }

        attaccoNemico()
        break;
    }


}


function attaccoNemico(){
    let punti;
    if(mostro.attacco<personaggio.difesa){
        punti = 1;
    }else{
        punti = mostro.attacco-personaggio.difesa
    }
    personaggio.vita -= punti
    console.log(`${mostro.nome} ti ATTACCA! La tua vita si abbassa a ${personaggio.vita}`)
}



// Gestione fine gioco




// Avvio

creazionePersonaggio()
generazioneMostro()
gioco()