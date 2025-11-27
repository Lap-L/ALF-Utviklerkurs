// Oppgave 3

let people = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    occupation: "Engineer",
    contact: {
      email: "alice@example.com",
      phone: "123-456-7890"
    },
    address: {
      city: "New York",
      country: "USA"
    }
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    occupation: "Designer",
    contact: {
      email: "bob@example.com",
      phone: "987-654-3210"
    },
    address: {
      city: "Los Angeles",
      country: "USA"
    }
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    occupation: "Teacher",
    contact: {
      email: "charlie@example.com",
      phone: "555-555-5555"
    },
    address: {
      city: "Chicago",
      country: "USA"
    }
  },
  {
    id: 4,
    name: "Diana",
    age: 28,
    occupation: "Doctor",
    contact: {
      email: "diana@example.com",
      phone: "222-333-4444"
    },
    address: {
      city: "Houston",
      country: "USA"
    }
  }
];


let cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    owner: {
      name: "Alice",
      id: 1
    },
    specs: {
      color: "Blue",
      engine: "1.8L",
      transmission: "Automatic"
    }
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2018,
    owner: {
      name: "Bob",
      id: 2
    },
    specs: {
      color: "Red",
      engine: "2.0L",
      transmission: "Manual"
    }
  },
  {
    id: 3,
    make: "Ford",
    model: "Focus",
    year: 2021,
    owner: {
      name: "Charlie",
      id: 3
    },
    specs: {
      color: "White",
      engine: "1.5L",
      transmission: "Automatic"
    }
  },
  {
    id: 4,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    owner: {
      name: "Diana",
      id: 4
    },
    specs: {
      color: "Black",
      engine: "Electric",
      transmission: "Automatic"
    }
  }
];


// a) Bruk map() til å skrive ut info for hele familien

let peopleInfo = people.map((people) => {
    return "id: " + people.id +"<br>" + " " + people.name + ", age " + people.age + "<br>" +
           people.occupation + "<br>" + people.contact.email + "<br>" + 
           people.address.city + ", " + people.address.country + "<br><br>"
})


document.getElementById("output1").innerHTML = peopleInfo.join("")


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

