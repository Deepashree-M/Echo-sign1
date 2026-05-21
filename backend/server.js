const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const socketHandler = require('./socket/socketHandler'); // Links your new handler file

// Initialize Express and the HTTP Server Runner
const app = express();
const server = http.createServer(app);

// Initialize your Socket.io Engine
const io = new Server(server, {
  cors: {
    origin: "*", // Allows any browser tab to connect safely
  }
});

// Pass our network connection engine into your custom room handler
socketHandler(io);

// Open up Port 3000 for your server machine to listen on
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 MVP 2 Broadcast Engine running perfectly on http://localhost:3000`);
});