// Oppgave 3

let duck = [
    {
        fornavn: "Ole",
        etternavn: "Duck",
        alder: 7,
        adresse: {
            gate: "Andeby terasse 3",
            postnr: 313,
            poststed: "Andeby"
        },
        telefonnummer: {
            privat: 313123,
            jobb: 313223
        }
    },
    {
        fornavn: "Dole",
        etternavn: "Duck",
        alder: 7,
        adresse: {
            gate: "Andeby terasse 3",
            postnr: 313,
            poststed: "Andeby"
        },
        telefonnummer: {
            privat: 313124,
            jobb: 313224
        }
    },
    {
        fornavn: "Doffen",
        etternavn: "Duck",
        alder: 7,
        adresse: {
            gate: "Andeby terasse 3",
            postnr: 313,
            poststed: "Andeby"
        },
        telefonnummer: {
            privat: 313125,
            jobb: 313225
        }
    },
    {
        fornavn: "Donald",
        etternavn: "Duck",
        alder: 66,
        adresse: {
            gate: "Andeby terasse 3",
            postnr: 313,
            poststed: "Andeby"
        },
        telefonnummer: {
            privat: 313126,
            jobb: 313226
        }
    }
]


// a) Bruk map() til å skrive ut info for hele familien

let familieInfo = duck.map((duck) => {
    return duck.fornavn + " " + duck.etternavn + "<br>" +
           duck.adresse.gate + "<br>" +
           duck.adresse.postnr + " " + duck.adresse.poststed + "<br><br>"
})

document.getElementById("oppgaveA").innerHTML = familieInfo.join("")


// b) Bruk filter() til å bare skrive ut etternavnet til de som heter Duck

let duckEtternavn = duck.filter((duck) => {
    return duck.etternavn == "Duck"
})

let resultatB = duckEtternavn.map((person) => {
    return person.etternavn + "<br>"
})

document.getElementById("oppgaveB").innerHTML = resultatB.join("")


// c) Benytt find() for å skrive ut navn og etternavn til en person som heter Ole

let finnOle = duck.find((person) => {
    return person.fornavn == "Ole"
})

document.getElementById("oppgaveC").innerHTML = finnOle.fornavn + " " + finnOle.etternavn


// d) Benytt every() for å sjekke om alle har samme familienavn (Duck)

let alleDuck = duck.every((person) => {
    return person.etternavn == "Duck"
})

document.getElementById("oppgaveD").innerHTML = "Har alle etternavn Duck? " + alleDuck


// e) Benytt some() for å se om noen er over 18 år

let noenOver18 = duck.some((person) => {
    return person.alder > 18
})

document.getElementById("oppgaveE").innerHTML = "Er noen over 18 år? " + noenOver18
