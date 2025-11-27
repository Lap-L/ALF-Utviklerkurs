// Simple, beginner-friendly script using .map() and printOut() as requested
// Uses Norwegian names for arrays (folk, biler) and clear function names.

var folk = [
  { id: 1, name: 'Alice', age: 30, occupation: 'Engineer', contact: { email: 'alice@example.com' }, address: { city: 'New York', country: 'USA' } },
  { id: 2, name: 'Bob', age: 25, occupation: 'Designer', contact: { email: 'bob@example.com' }, address: { city: 'Los Angeles', country: 'USA' } },
  { id: 3, name: 'Charlie', age: 35, occupation: 'Teacher', contact: { email: 'charlie@example.com' }, address: { city: 'Chicago', country: 'USA' } },
  { id: 4, name: 'Diana', age: 28, occupation: 'Doctor', contact: { email: 'diana@example.com' }, address: { city: 'Houston', country: 'USA' } }
];

var biler = [
  { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, owner: { name: 'Alice' }, specs: { color: 'Blue', engine: '1.8L', transmission: 'Automatic' } },
  { id: 2, make: 'Honda', model: 'Civic', year: 2018, owner: { name: 'Bob' }, specs: { color: 'Red', engine: '2.0L', transmission: 'Manual' } },
  { id: 3, make: 'Ford', model: 'Focus', year: 2021, owner: { name: 'Charlie' }, specs: { color: 'White', engine: '1.5L', transmission: 'Automatic' } },
  { id: 4, make: 'Tesla', model: 'Model 3', year: 2022, owner: { name: 'Diana' }, specs: { color: 'Black', engine: 'Electric', transmission: 'Automatic' } }
];

// 1a: printOut prints one person as a card. Use this with .map()
function printOut(person) {
  var out = document.getElementById('outputPersons');
  if (!out) return;
  var html = '';
  html += '<div class="card">';
  html += '<h1>' + person.name + '</h1>';
  html += '<h2>' + person.occupation + '</h2>';
  html += '<p>Alder: ' + person.age + '</p>';
  html += '<p>E-post: ' + person.contact.email + '</p>';
  html += '<p>' + person.address.city + ', ' + person.address.country + '</p>';
  html += '</div>';
  out.innerHTML += html;
}

// 1a (map) - create a card for each person
function oppgave1a_cards() {
  var out = document.getElementById('outputPersons');
  if (!out) return;
  out.innerHTML = '';
  // Use map to iterate and call printOut for each element
  folk.map(function(p) { printOut(p); return null; });
}

// 1a tekst: simple text output (keeps existing exercise)
function oppgave1a_tekst() {
  var el = document.getElementById('oppgaveA');
  if (!el) return;
  var lines = folk.map(function(p) {
    return 'id: ' + p.id + ' - ' + p.name + ', age ' + p.age + '<br>' + p.occupation + '<br>' + p.contact.email + '<br>' + p.address.city + ', ' + p.address.country + '<br><br>';
  });
  el.innerHTML = lines.join('');
}

// 1c: filter teachers and show as cards using the same printOut
function oppgave1c() {
  var out = document.getElementById('outputPersons');
  if (!out) return;
  out.innerHTML = '';
  var teachers = folk.filter(function(p) { return p.occupation === 'Teacher'; });
  teachers.map(function(t) { printOut(t); return null; });
}

// Oppgave 2a: cars map -> use printCar
function printCar(car) {
  var out = document.getElementById('outputCars');
  if (!out) return;
  var html = '';
  html += '<div class="card">';
  html += '<h2>' + car.make + ' ' + car.model + ' (' + car.year + ')</h2>';
  html += '<p>Owner: ' + car.owner.name + '</p>';
  html += '<p>Motor: ' + car.specs.engine + '</p>';
  html += '</div>';
  out.innerHTML += html;
}

function oppgave2a() {
  var out = document.getElementById('outputCars');
  if (!out) return;
  out.innerHTML = '';
  biler.map(function(c) { printCar(c); return null; });
}

// 2b: some, every, find examples
function oppgave2b() {
  var el = document.getElementById('outputCarsExtras');
  if (!el) return;
  var anyElectric = biler.some(function(c) { return c.specs.engine === 'Electric'; });
  var allAuto = biler.every(function(c) { return c.specs.transmission === 'Automatic'; });
  var findBob = biler.find(function(c) { return c.owner.name === 'Bob'; });
  el.innerHTML = '';
  el.innerHTML += 'Finnes elbil? ' + anyElectric + '<br>';
  el.innerHTML += 'Alle automatgir? ' + allAuto + '<br>';
  el.innerHTML += findBob ? ('Bob eier: ' + findBob.make + ' ' + findBob.model) : 'Bob eier ingen bil i listen.';
}

// Clear outputs helper (small, optional)
function clearOutputs() {
  var ids = ['oppgaveA','outputPersons','outputCars','outputCarsExtras','oppgaveB','oppgaveC','oppgaveD','oppgaveE'];
  ids.map(function(id) { var e = document.getElementById(id); if (e) e.innerHTML = ''; return null; });
}

// Run basic outputs so Live Server shows initial content
oppgave1a_tekst();
oppgave1a_cards();
oppgave2a();

