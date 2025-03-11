
let amigos = [];
let amigoSecreto;

function agregarAmigo() {
    let nombre = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');

    if (nombre.value === '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombre.value);
        updateAmigos();
        nombre.value = ''; 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos disponibles');
    } else {
        amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Yeii tu amigo secreto es: <h2><b>${amigoSecreto}</b><h2>`;
    }
}

function updateAmigos() {
    let listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
