// Oppgave a) - Array med 15 tilfeldige heltall

let heltall = []

for(let i = 0; i < 15; i++) {
    let tilfeldigTall = Math.floor(Math.random() * 100)
    heltall.push(tilfeldigTall)
}

function skrivUtHeltall(tall) {
    console.log(tall)
    document.getElementById("output1").innerHTML += tall + "<br>"
}

heltall.forEach(skrivUtHeltall)


// Oppgave b) - Array med 10 tilfeldige desimaltall

let desimaltall = []

for(let i = 0; i < 10; i++) {
    let tilfeldigDesimal = Math.random() * 100
    desimaltall.push(tilfeldigDesimal)
}

let anoFunk = function(tall) {
    console.log(tall)
    document.getElementById("output2").innerHTML += tall + "<br>"
}

desimaltall.forEach(anoFunk)


// Oppgave c) - Array med 10 kattenavn

let kattenavn = ["Mjau", "Pus", "Mikke", "Luna", "Felix", "Simba", "Nala", "Tiger", "Socks", "Whiskers"]

kattenavn.forEach(function(navn) {
    console.log(navn)
    document.getElementById("output3").innerHTML += navn + "<br>"
})


// Oppgave d) - Samme array med map() og lambda pil

let resultat = kattenavn.map((navn) => {
    console.log(navn)
    document.getElementById("output4").innerHTML += navn + "<br>"
    return navn
})
