// Session 34 - Oppgave 4: fetch data.json and display entries



async function loadJson() {
	const resp = await fetch('data.json');
	const list = await resp.json();
	let out = '';
	for (let i = 0; i < list.length; i++) {
		const p = list[i];
	out += '<div class="card">';
	out += '<h3>' + p.fornavn + ' ' + p.etternavn + '</h3>';
	out += '<p>Alder: ' + p.alder + '</p>';
	out += '</div>';
	}
    
	const el = document.getElementById('jsonOut');
    if (el) el.innerHTML = out;
}


//Interesting alternative:
//window.onload = function() { var btn = document.getElementById('loadJson'); if (btn) btn.onclick = loadJson; };
