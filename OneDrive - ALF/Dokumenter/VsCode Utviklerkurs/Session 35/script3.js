// Session 35 - Oppgave 3 - Try-Catch

async function loadJSON() {
    const el = document.getElementById('output');
    try {
        
        const url = 'minJSON.json'; //<-- change this
        const resp = await fetch(url);
        const data = await resp.json();
        
        let out = '';
        for (let i = 0; i < data.length; i++) {
            const p = data[i];
            out += '<div class="card">';
            out += '<h3>' + p.navn + '</h3>';
            out += '<p>Alder: ' + p.alder + '</p>';
            out += '<p>By: ' + p.by + '</p>';
            out += '</div>';
        }
        if (el) el.innerHTML = out;
        
    } catch (error) {
        console.log('Feil ved åpning av fil:', error);
        if (el) el.innerHTML = '<p class="error">Fikk ikke åpnet filen</p>';
    }
}

window.onload = loadJSON;
