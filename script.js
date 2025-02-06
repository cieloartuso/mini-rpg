
let personaggio = {}

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