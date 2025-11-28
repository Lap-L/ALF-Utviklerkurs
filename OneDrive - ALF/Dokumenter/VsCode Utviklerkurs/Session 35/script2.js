// Session 35 - Oppgave 2

async function fetchComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    const resp = await fetch(url);
    const comments = await resp.json();
    
    let out = '';
    for (let i = 0; i < comments.length; i++) {
        const c = comments[i];
        out += '<div class="card">';
        out += '<h3>' + c.name + '</h3>';
        out += '<p class="email">Email: ' + c.email + '</p>';
        out += '<p>' + c.body + '</p>';
        out += '</div>';
    }
    const el = document.getElementById('commentsOutput');
    if (el) el.innerHTML = out;
}


async function fetchAlbums() {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    const resp = await fetch(url);
    const albums = await resp.json();
    
    let out = '';
    for (let i = 0; i < albums.length; i++) {
        const a = albums[i];
        out += '<div class="card">';
        out += '<h3>Album ' + a.id + ': ' + a.title + '</h3>';
        out += '<p>User ID: ' + a.userId + '</p>';
        out += '</div>';
    }
    const el = document.getElementById('albumsOutput');
    if (el) el.innerHTML = out;
}

