export function startListening(onResult) {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        console.warn("Speech recognition not supported");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const word = event.results[0][0].transcript.toLowerCase().trim();
        onResult(word);
    };

    recognition.onerror = (event) => {
        console.error("Speech error:", event.error);
    };

    recognition.start();
}