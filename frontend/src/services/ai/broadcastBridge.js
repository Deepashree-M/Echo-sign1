export function sendPredictionToSocket(socket, roomCode, label, confidence) {
    if (!socket || !roomCode) return;

    socket.emit("sign_detected", {
        label,
        confidence,
        room: roomCode,
        timestamp: Date.now()
    });
}