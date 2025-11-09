// server.js - Ejemplo mínimo WebSocket para coordinación de jugadores (esqueleto).
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('../web-version'));

wss.on('connection', function connection(ws) {
  console.log('cliente conectado');
  ws.on('message', function incoming(message) {
    // aquí podrías parsear mensajes y retransmitir a otros clientes
    // por ejemplo: movimiento, disparos, etc.
    try{
      const msg = JSON.parse(message);
      // Broadcast to others
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(msg));
        }
      });
    }catch(e){
      console.error('msg parse error', e);
    }
  });

  ws.send(JSON.stringify({type:'welcome', now:Date.now()}));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => { console.log(`Server listening ${PORT}`); });
