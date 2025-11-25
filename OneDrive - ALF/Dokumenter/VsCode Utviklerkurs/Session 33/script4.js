// printOut skriver ett person-card til siden
function printOut(person) {
  var out = document.getElementById('outputPersons');
  var card = '';
  card += '<div class="person-card">';
  card += '<h1>' + person.name + '</h1>';
  card += '<h2>' + person.occupation + '</h2>';
  card += '<p>Alder: ' + person.age + '</p>';
  card += '<p>E-post: ' + person.contact.email + '</p>';
  card += '<p>By: ' + person.address.city + ', ' + person.address.country + '</p>';
  card += '</div>';
  out.innerHTML += card;
  return;
}

// 1a (cards): bruk map og printOut
function oppgave1a_cards() {
  document.getElementById('outputPersons').innerHTML = '';
  people.map(function(p) { printOut(p); return null; });
}

// 1c: filter for Teacher og vis som kort
function oppgave1c() {
  document.getElementById('outputPersons').innerHTML = '';
  var teachers = people.filter(function(p) { return p.occupation === 'Teacher'; });
  teachers.map(function(t) { printOut(t); return null; });
}

// --- Oppgave 2: biler ---
function printCar(car) {
  var out = document.getElementById('outputCars');
  var card = '';
  card += '<div class="car-card">';
  card += '<h1>' + car.make + ' ' + car.model + ' (' + car.year + ')</h1>';
  card += '<h2>Owner: ' + car.owner.name + '</h2>';
  card += '<p>Motor: ' + car.specs.engine + '</p>';
  card += '<p>Farge: ' + car.specs.color + '</p>';
  card += '</div>';
  out.innerHTML += card;
  return;
}

// 2a: map for å skrive ut alle biler
function oppgave2a() {
  document.getElementById('outputCars').innerHTML = '';
  cars.map(function(c) { printCar(c); return null; });
}

// 2b: some/every/find eksempler
function oppgave2b() {
  var anyElectric = cars.some(function(c) { return c.specs.engine === 'Electric'; });
  var allAuto = cars.every(function(c) { return c.specs.transmission === 'Automatic'; });
  var findByOwnerBob = cars.find(function(c) { return c.owner.name === 'Bob'; });

  var out = document.getElementById('outputCarsExtras');
  out.innerHTML = '';
  out.innerHTML += 'Finnes elbil? ' + anyElectric + '<br>';
  out.innerHTML += 'Alle automatgir? ' + allAuto + '<br>';
  if (findByOwnerBob) {
    out.innerHTML += 'Bob eier: ' + findByOwnerBob.make + ' ' + findByOwnerBob.model + '<br>';
  } else {
    out.innerHTML += 'Bob eier ingen bil i listen.<br>';
  }
}

// Kjør tekstlig oppgave A ved lasting for kompatibilitet med sidens eksisterende oppgaveA
oppgave1a_tekst();

