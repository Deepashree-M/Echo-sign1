export function speak(text) {
    if (!window.speechSynthesis) {
        console.warn("TTS not supported in this browser");
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.rate = 0.9;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
}