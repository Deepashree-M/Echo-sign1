const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log(`🔌 New device linked to gateway! ID: ${socket.id}`);

    // --- ROOM MANAGEMENT ---
    socket.on('create-room', () => {
      const roomCode = Math.floor(1000 + Math.random() * 9000).toString();
      socket.join(roomCode);
      socket.emit('room-created', roomCode);
      console.log(`✨ Room [${roomCode}] created automatically by User: ${socket.id}`);
    });

    socket.on('join-room', ({ roomCode, role }) => {
      // 🕵️‍♂️ GATEKEEPER CHECK: See if this room actually exists in the server memory
      const roomExists = io.sockets.adapter.rooms.has(roomCode);

      if (roomExists) {
        socket.join(roomCode);
        socket.role = role; 
        socket.roomCode = roomCode; // Remembers their current active room code
        console.log(`🏠 User ${socket.id} joined Room [${roomCode}] as a [${role.toUpperCase()}]`);
        socket.emit('join-success', `Successfully entered room ${roomCode}`);
      } else {
        console.log(`⚠️ Security Alert! User tried to join non-existent Room: [${roomCode}]`);
        socket.emit('join-error', `Error: Room ${roomCode} does not exist!`);
      }
    });

    // --- MESSAGE ROUTING WITH VALIDATION ---
    socket.on('send-sign-text', (translatedText) => {
      const userRoom = socket.roomCode;
      
      // Make sure the user actually has a valid, approved room code saved
      if (userRoom) {
        socket.to(userRoom).emit('receive-sign-text', translatedText);
        console.log(`📡 [Room ${userRoom}] Sign Translated: "${translatedText}" -> Broadcasting to Listeners`);
      } else {
        socket.emit('routing-error', "You are not connected to a valid room!");
      }
    });

    socket.on('send-spoken-text', (voiceText) => {
      const userRoom = socket.roomCode;
      
      if (userRoom) {
        socket.to(userRoom).emit('receive-spoken-text', voiceText);
        console.log(`🗣️ [Room ${userRoom}] Voice Captured: "${voiceText}" -> Broadcasting to Signer`);
      } else {
        socket.emit('routing-error', "You are not connected to a valid room!");
      }
    });

    socket.on('disconnect', () => {
      console.log(`👋 Device disconnected: ${socket.id}`);
    });
  });
};

module.exports = socketHandler;