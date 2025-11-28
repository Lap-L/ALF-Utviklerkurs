// Session 35 - Oppgave 4 - User posts with dropdown

async function fetchUserPosts() {
    const userSelect = document.getElementById('userSelect');
    const user = userSelect.value;
    

    const url = "https://jsonplaceholder.typicode.com/posts/" + user + "/comments";
    //Template Literal: let url = `https://jsonplaceholder.typicode.com/posts/${user}/comments`

    
    const resp = await fetch(url);
    const comments = await resp.json();
    
    let out = '<h3>Kommentarer for Bruker ' + user + '</h3>';
    for (let i = 0; i < comments.length; i++) {
        const c = comments[i];
        out += '<div class="card">';
        out += '<h3>' + c.name + '</h3>';
        out += '<p><strong>Email:</strong> ' + c.email + '</p>';
        out += '<p>' + c.body + '</p>';
        out += '</div>';
    }
    
    const el = document.getElementById('output');
    if (el) el.innerHTML = out;
}

window.onload = function() {
    const btn = document.getElementById('fetchBtn');
    if (btn) btn.onclick = fetchUserPosts;
};
