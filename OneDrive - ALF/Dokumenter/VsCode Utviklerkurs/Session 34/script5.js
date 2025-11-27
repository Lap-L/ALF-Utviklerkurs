//Get back to script2.js




var fargeSelect = document.getElementById('farge');

function velgFarge() {
	var color = '';
	if (fargeSelect) color = fargeSelect.value;
	if (color) {
		document.body.style.backgroundColor = color;
		localStorage.setItem('bgColor', color);
	} else {
		document.body.style.backgroundColor = '';
		localStorage.removeItem('bgColor');
	}
}

function oppstart() {
	var saved = localStorage.getItem('bgColor');
	if (saved) {
		document.body.style.backgroundColor = saved;
		if (fargeSelect) fargeSelect.value = saved;
	}
	// wire event handler
	if (fargeSelect) fargeSelect.onchange = velgFarge;
}


window.onload = oppstart();


async function lesTekstFil() {
}
// benytter fetch() for å "hente" filinnholdet

const res = await fetch('Tekstfil.txt');

// bruker .text() for å hente ut kun tekstinnholdet

const data = await res.text();

console.log(data);
document.getElementById("output").innerHTML += "<h2><br>Her er innholdet i tekstfilen: <br></h2> " + data;