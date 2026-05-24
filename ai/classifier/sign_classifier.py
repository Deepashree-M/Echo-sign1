import cv2
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
import pickle

MODEL_PATH = "../models/sign_model.pkl"
LANDMARKER_PATH = "../mediapipe/hand_landmarker.task"

with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

BaseOptions = mp.tasks.BaseOptions
HandLandmarker = mp.tasks.vision.HandLandmarker
HandLandmarkerOptions = mp.tasks.vision.HandLandmarkerOptions
VisionRunningMode = mp.tasks.vision.RunningMode

options = HandLandmarkerOptions(
    base_options=BaseOptions(model_asset_path=LANDMARKER_PATH),
    running_mode=VisionRunningMode.IMAGE,
    num_hands=1
)

cap = cv2.VideoCapture(0)

if not cap.isOpened():
    print("Camera not found!")
    exit()

print("Camera opened. Press Q to quit")

with HandLandmarker.create_from_options(options) as landmarker:
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Cannot read frame")
            continue

        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
        result = landmarker.detect(mp_image)

        label = "No hand detected"

        if result.hand_landmarks:
            hand = result.hand_landmarks[0]
            features = []
            for lm in hand:
                features.extend([lm.x, lm.y, lm.z])

            prediction = model.predict([features])[0]
            confidence = model.predict_proba([features]).max() * 100
            label = f"{prediction} ({confidence:.0f}%)"

            for lm in hand:
                h, w, _ = frame.shape
                cx, cy = int(lm.x * w), int(lm.y * h)
                cv2.circle(frame, (cx, cy), 5, (0, 255, 0), -1)

        cv2.putText(frame, label, (10, 50),
                    cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0, 255, 0), 3)

        cv2.imshow("Echo Sign — Live Recognition", frame)

        key = cv2.waitKey(30) & 0xFF
        if key == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()
print("Done")