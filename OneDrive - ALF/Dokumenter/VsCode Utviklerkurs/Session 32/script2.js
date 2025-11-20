// Oppgave 2 - Sortering av arrays

// Lager de samme arrayene fra oppgave 1
let heltall = []
for(let i = 0; i < 15; i++) {
    let tilfeldigTall = Math.floor(Math.random() * 100)
    heltall.push(tilfeldigTall)
}

let desimaltall = []
for(let i = 0; i < 10; i++) {
    let tilfeldigDesimal = Math.random() * 100
    desimaltall.push(tilfeldigDesimal)
}

let kattenavn = ["Mjau", "Pus", "Mikke", "Luna", "Felix", "Simba", "Nala", "Tiger", "Socks", "Whiskers"]


// a) Stigende rekkefølge (minst til størst)

document.getElementById("heltallUsortert").innerHTML = heltall.join(", ")

let heltallStigende = [...heltall].sort((a, b) => a - b)
document.getElementById("heltallStigende").innerHTML = heltallStigende.join(", ")

let heltallStigendeTo = heltall.toSorted((a, b) => a - b)
document.getElementById("heltallStigendeTo").innerHTML = heltallStigendeTo.join(", ")


document.getElementById("desimalUsortert").innerHTML = desimaltall.map(d => d.toFixed(2)).join(", ")

let desimalStigende = [...desimaltall].sort((a, b) => a - b)
document.getElementById("desimalStigende").innerHTML = desimalStigende.map(d => d.toFixed(2)).join(", ")

let desimalStigendeTo = desimaltall.toSorted((a, b) => a - b)
document.getElementById("desimalStigendeTo").innerHTML = desimalStigendeTo.map(d => d.toFixed(2)).join(", ")


document.getElementById("navnUsortert").innerHTML = kattenavn.join(", ")

let navnStigende = [...kattenavn].sort()
document.getElementById("navnStigende").innerHTML = navnStigende.join(", ")

let navnStigendeTo = kattenavn.toSorted()
document.getElementById("navnStigendeTo").innerHTML = navnStigendeTo.join(", ")


// b) Synkende rekkefølge (størst til minst)

let heltallSynkende = [...heltall].sort((a, b) => b - a)
document.getElementById("heltallSynkende").innerHTML = heltallSynkende.join(", ")

let heltallSynkendeTo = heltall.toSorted((a, b) => b - a)
document.getElementById("heltallSynkendeTo").innerHTML = heltallSynkendeTo.join(", ")


let desimalSynkende = [...desimaltall].sort((a, b) => b - a)
document.getElementById("desimalSynkende").innerHTML = desimalSynkende.map(d => d.toFixed(2)).join(", ")

let desimalSynkendeTo = desimaltall.toSorted((a, b) => b - a)
document.getElementById("desimalSynkendeTo").innerHTML = desimalSynkendeTo.map(d => d.toFixed(2)).join(", ")


let navnSynkende = [...kattenavn].sort().reverse()
document.getElementById("navnSynkende").innerHTML = navnSynkende.join(", ")

let navnSynkendeTo = kattenavn.toSorted().toReversed()
document.getElementById("navnSynkendeTo").innerHTML = navnSynkendeTo.join(", ")
