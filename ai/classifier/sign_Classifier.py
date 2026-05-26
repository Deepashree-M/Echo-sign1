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
    num_hands=2
)

HAND_CONNECTIONS = [
    (0,1),(1,2),(2,3),(3,4),
    (0,5),(5,6),(6,7),(7,8),
    (0,9),(9,10),(10,11),(11,12),
    (0,13),(13,14),(14,15),(15,16),
    (0,17),(17,18),(18,19),(19,20),
    (5,9),(9,13),(13,17)
]

def draw_mesh(frame, hand_landmarks):
    h, w, _ = frame.shape
    points = []
    for lm in hand_landmarks:
        cx, cy = int(lm.x * w), int(lm.y * h)
        points.append((cx, cy))
        cv2.circle(frame, (cx, cy), 5, (0, 255, 0), -1)
    for start, end in HAND_CONNECTIONS:
        cv2.line(frame, points[start], points[end], (255, 255, 255), 2)

cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("Camera not found!")
    exit()

print("Camera opened. Press Q to quit")

with HandLandmarker.create_from_options(options) as landmarker:
    while True:
        ret, frame = cap.read()
        if not ret:
            continue

        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
        result = landmarker.detect(mp_image)

        label = "No hand detected"

        if result.hand_landmarks:
            hand1 = result.hand_landmarks[0]
            features = []
            for lm in hand1:
                features.extend([lm.x, lm.y, lm.z])

            if len(result.hand_landmarks) == 2:
                hand2 = result.hand_landmarks[1]
                for lm in hand2:
                    features.extend([lm.x, lm.y, lm.z])
            else:
                features.extend([0.0] * 63)

            prediction = model.predict([features])[0]
            confidence = model.predict_proba([features]).max() * 100
            label = f"{prediction} ({confidence:.0f}%)"

            for hand in result.hand_landmarks:
                draw_mesh(frame, hand)

        cv2.putText(frame, label, (10, 50),
                    cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0, 255, 0), 3)
        cv2.imshow("Echo Sign — Live Recognition", frame)

        if cv2.waitKey(30) & 0xFF == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()
print("Done")