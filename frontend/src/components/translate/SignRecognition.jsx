import { useEffect, useRef, useState } from "react";
import { speak } from "../../services/ai/tts";
import { sendPredictionToSocket } from "../../services/ai/broadcastBridge";

export default function SignRecognition({ onPrediction, socket, roomCode }) {
    const videoRef = useRef(null);
    const [label, setLabel] = useState("Show a sign...");
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let landmarker;
        let animationId;
        let lastSpoken = "";
        let lastSpokenTime = 0;

        async function setupCamera() {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        }

        async function loadModel() {
            const { FilesetResolver, HandLandmarker } = await import(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/vision_bundle.js"
            );

            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
            );

            landmarker = await HandLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath:
                        "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
                },
                runningMode: "VIDEO",
                numHands: 1,
            });

            setIsRunning(true);
            detectLoop();
        }

        async function detectLoop() {
            if (!videoRef.current || !landmarker) return;

            const video = videoRef.current;
            if (video.readyState >= 2) {
                const results = landmarker.detectForVideo(video, Date.now());

                if (results.landmarks && results.landmarks.length > 0) {
                    const hand = results.landmarks[0];
                    const features = hand.flatMap((lm) => [lm.x, lm.y, lm.z]);

                    // Send to backend for prediction
                    try {
                        const response = await fetch("http://localhost:5000/predict", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ features }),
                        });
                        const data = await response.json();
                        const prediction = data.label;
                        const confidence = data.confidence;

                        setLabel(`${prediction} (${Math.round(confidence * 100)}%)`);

                        const now = Date.now();
                        if (prediction !== lastSpoken && now - lastSpokenTime > 2000) {
                            speak(prediction);
                            lastSpoken = prediction;
                            lastSpokenTime = now;
                            if (onPrediction) onPrediction(prediction, confidence);
                            sendPredictionToSocket(socket, roomCode, prediction, confidence);
                        }
                    } catch (err) {
                        console.error("Prediction error:", err);
                    }
                } else {
                    setLabel("No hand detected");
                }
            }

            animationId = requestAnimationFrame(detectLoop);
        }

        setupCamera();
        loadModel();

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
            if (landmarker) landmarker.close();
        };
    }, []);

    return (
        <div>
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ width: "100%", borderRadius: "12px" }}
            />
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "10px" }}>
                {label}
            </p>
            {!isRunning && <p>Loading model...</p>}
        </div>
    );
}