
let personaggio = {};
const listaMostri = [
    {nome: "Cicciolo", vita: {min: 10, max: 20}, attacco: {min: 5, max: 20}, difesa: {min: 3, max: 10}},
    {nome: "Freddy", vita: {min: 15, max: 35}, attacco: {min: 15, max: 20}, difesa: {min: 15, max: 30}},
    {nome: "NoSenSe", vita: {min: 20, max: 20}, attacco: {min: 10, max: 20}, difesa: {min: 40, max: 60}},
    {nome: "Moscow Mule", vita: {min: 50, max: 70}, attacco: {min: 30, max: 40}, difesa: {min: 20, max: 40}},
    {nome: "SasageyoSasageyo", vita: {min: 100, max: 150}, attacco: {min: 42, max: 52}, difesa: {min: 40, max: 50}},
    {nome: "Manuel Er Furioso", vita: {min: 200, max: 300}, attacco: {min: 50, max: 90}, difesa: {min: 45, max: 60}},
];

// Creazione del personaggio

function creazionePersonaggio(){
    const max = 100;
    const min = 5;

    const nome = prompt("Come si chiama il tuo personaggio?");
    let vita = 100;
    let attacco = Math.floor(Math.random() * (max - min + 1) + min);
    let difesa = Math.floor(Math.random() * (max - min + 1) + min);

    personaggio = {nome, vita, attacco, difesa};

    console.log(personaggio)
}


// Generazione mostro



// Gestione turni



// Gestione fine gioco




// Avvio

creazionePersonaggio()