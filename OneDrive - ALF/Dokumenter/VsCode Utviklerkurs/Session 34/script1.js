

let utskrift = document.getElementById("output1");

function saveNameToLocalStorage() {
let fnavn = document.getElementById("fornavn").value; 
let enavn = document.getElementById("etternavn").value;

let person = {"fornavn":fnavn, "etternavn":enavn}; 
localStorage.setItem("person", JSON.stringify(person));
}

function getNameFromLocalStorage() {
let person = JSON.parse(localStorage.getItem("person"));
if (person == null) {
person = "ikke registrert";
}
utskrift.innerHTML = `${person.fornavn} ${person.etternavn}`;
}


window.onload = oppstart(); 
function oppstart() {
    let velkomst = document.getElementById("velkomst");
    let person = JSON.parse(localStorage.getItem("person"));
    if (person) {
        velkomst.innerHTML = "Velkommen tilbake til oss, " + person.fornavn + " " + person.etternavn + "!";
    } else {
        velkomst.innerHTML = "Hyggelig å se nye brukere her! Velkommen til oss!";
    }
}