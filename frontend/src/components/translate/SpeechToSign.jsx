import { useState } from "react";
import signMap from "../../services/ai/signMap";

export default function SpeechToSign() {
    const [gifSrc, setGifSrc] = useState(null);
    const [word, setWord] = useState("");
    const [listening, setListening] = useState(false);
    const [notFound, setNotFound] = useState(false);

    function handleListen() {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Speech recognition not supported in this browser");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = false;
        recognition.interimResults = false;

        setListening(true);
        setWord("");
        setGifSrc(null);
        setNotFound(false);

        recognition.onresult = (event) => {
            const spokenWord = event.results[0][0].transcript.toLowerCase().trim();
            console.log("Heard:", spokenWord);
            setWord(spokenWord);
            setListening(false);

            const gif = signMap[spokenWord];
            if (gif) {
                setGifSrc(gif);
                setNotFound(false);
            } else {
                setGifSrc(null);
                setNotFound(true);
            }
        };

        recognition.onerror = (event) => {
            console.error("Speech error:", event.error);
            setListening(false);
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognition.start();
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button 
                onClick={handleListen} 
                disabled={listening}
                style={{ padding: "10px 20px", fontSize: "16px" }}
            >
                {listening ? "🎤 Listening..." : "🎤 Speak a word"}
            </button>

            {word && <p>You said: <strong>{word}</strong></p>}

            {gifSrc && (
                <img
                    src={gifSrc}
                    alt={word}
                    style={{ width: "300px", marginTop: "10px" }}
                />
            )}

            {notFound && (
                <p style={{ color: "red" }}>
                    No sign found for "{word}"
                </p>
            )}
        </div>
    );
}