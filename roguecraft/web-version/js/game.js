// game.js - versión rápida: incrusta la demo single-file en un iframe
const app = document.getElementById('app');
const iframe = document.createElement('iframe');
iframe.style.width = '100%';
iframe.style.height = '80vh';
iframe.style.border = '0';
iframe.src = './index_embedded.html';
app.innerHTML = '';
app.appendChild(iframe);
