


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
	
	if (fargeSelect) fargeSelect.onchange = velgFarge;
}


window.onload = oppstart();
