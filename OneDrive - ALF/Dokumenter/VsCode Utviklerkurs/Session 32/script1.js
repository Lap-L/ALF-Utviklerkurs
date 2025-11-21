// Oppgave a) - Array med 15 tilfeldige heltall
function oppgaveA() {
    let heltall = [];
    for (let i = 0; i < 15; i = i + 1) {
        let tilfeldigTall = Math.floor(Math.random() * 100);
        heltall.push(tilfeldigTall);
    }

    function skrivUtHeltall(tall) {
        console.log(tall);
        document.getElementById("output1").innerHTML += tall + "<br>";
    }

    // Kjør utskrift når funksjonen kalles
    heltall.forEach(skrivUtHeltall);
    return;
}

// Oppgave b) - Array med 10 tilfeldige desimaltall
function oppgaveB() {
    let desimaltall = [];
    for (let i = 0; i < 10; i = i + 1) {
        let tilfeldigDesimal = Math.random() * 100;
        desimaltall.push(tilfeldigDesimal);
    }

    let anoFunk = function(tall) {
        document.getElementById("output2").innerHTML += tall.toFixed(2) + "<br>";
    }

    desimaltall.forEach(anoFunk);
    return;
}

// Oppgave c)
function oppgaveC() {
    let kattenavn = ["Mjau", "Pus", "Mikke", "Luna", "Felix", "Simba", "Nala", "Tiger", "Socks", "Whiskers"];
    kattenavn.forEach(function(navn) {
        console.log(navn);
        document.getElementById("output3").innerHTML += navn + "<br>";
    });
    return;
}

// Oppgave d)
function oppgaveD() {
    let kattenavn = ["Mjau", "Pus", "Mikke", "Luna", "Felix", "Simba", "Nala", "Tiger", "Socks", "Whiskers"];
    let resultat = kattenavn.map((navn) => {
        console.log(navn);
        document.getElementById("output4").innerHTML += navn + "<br>";
        return navn;
    });
    return;
}
