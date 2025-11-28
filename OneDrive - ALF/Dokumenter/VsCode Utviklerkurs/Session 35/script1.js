// Session 34 - Oppgave 4: fetch data.json and display entries



async function loadJson() {
	const resp = await fetch('land.json');
	const list = await resp.json();
	let out = '';
	for (let i = 0; i < list.length; i++) {
		const p = list[i];
	out += '<div class="card">';
	out += '<h3>' + p.land + ', ' + p.hovedstad + '</h3>';
	out += '<p>Befolkning: ' + p.befolkning + ' million</p>';
	out += '<img src="' + p.flagg + '" alt="Flagg of ' + p.land + '" width="100">';
	out += '</div>';
	}
    
	const el = document.getElementById('jsonOut');
    if (el) el.innerHTML = out;
}


