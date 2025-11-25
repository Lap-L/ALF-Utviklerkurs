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

let familieInfo = duck.map((person) => {
    return person.fornavn + " " + person.etternavn + "<br>" +
           person.adresse.gate + "<br>" +
           person.adresse.postnr + " " + person.adresse.poststed + "<br><br>"
})

document.getElementById("oppgaveA").innerHTML = familieInfo.join("")


// b) Bruk filter() til å bare skrive ut etternavnet til de som heter Duck

let duckEtternavn = duck.filter((person) => {
    return person.etternavn == "Duck"
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

let selection = document.getElementById("oppgaveF").value;
let dd = duck.filter((person) => {
    return person.etternavn == selection
})
let ops = document.getElementById("ops").value;

    for (let i = 0; i < Brann.length; i = i + 1) {
      console.log(Brann[i].fornavn);

      
      svar = svar + "<br>" + Brann[i].fornavn + " " + Brann[i].etternavn + " har draktnummer " + Brann[i].draktnummer + ", og er " + Brann[i].posisjon + ". <br>";

      
      if (Brann[i].posisjon === "Angrepspiller") {
        svar2 = svar2 + "<br>" + "angrepsspiller : " + Brann[i].fornavn + " " + Brann[i].etternavn + ". <br>";
      }

      
      if (Brann[i].posisjon === ops) {
        
        var imgSrc = "images/player" + Brann[i].draktnummer + ".png";
        kortUt = kortUt + '<div class="card">'
          + '<img src="' + imgSrc + '" alt="Bilde av ' + Brann[i].fornavn + '" onerror="this.style.display=\'none\'">'
          + '<h3>' + Brann[i].fornavn + ' ' + Brann[i].etternavn + '</h3>'
          + '<p>Nr: ' + Brann[i].draktnummer + '</p>'
          + '<p>Posisjon: ' + Brann[i].posisjon + '</p>'
          + '</div>';
      }
    }

    
    document.getElementById("output1").innerHTML = svar;
    document.getElementById("output2").innerHTML = svar2;
    if (kortUt === "") {
      document.getElementById("output3").innerHTML = "Ingen spillere funnet for: " + ops;
    } else {
      
      document.getElementById("output3").innerHTML = '<div class="card-grid">' + kortUt + '</div>';
    }