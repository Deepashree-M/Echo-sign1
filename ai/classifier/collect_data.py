import cv2
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
import csv
import os

SIGN_LABEL = "YES"
SAMPLES_TO_COLLECT = 600
SAVE_PATH = "../dataset/"

os.makedirs(SAVE_PATH, exist_ok=True)

model_path = "../mediapipe/hand_landmarker.task"

BaseOptions = mp.tasks.BaseOptions
HandLandmarker = mp.tasks.vision.HandLandmarker
HandLandmarkerOptions = mp.tasks.vision.HandLandmarkerOptions
VisionRunningMode = mp.tasks.vision.RunningMode

options = HandLandmarkerOptions(
    base_options=BaseOptions(model_asset_path=model_path),
    running_mode=VisionRunningMode.IMAGE,
    num_hands=1
)

samples = []
count = 0
recording = False

cap = cv2.VideoCapture(0)
print(f"Recording {SIGN_LABEL} — Press S to start, Q to quit")

with HandLandmarker.create_from_options(options) as landmarker:
    while True:
        ret, frame = cap.read()
        if not ret:
            break

        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
        result = landmarker.detect(mp_image)

        if result.hand_landmarks and recording:
            hand = result.hand_landmarks[0]
            row = []
            for lm in hand:
                row.extend([lm.x, lm.y, lm.z])
            row.append(SIGN_LABEL)
            samples.append(row)
            count += 1
            print(f"Collected {count}/{SAMPLES_TO_COLLECT}", end="\r")

            if count >= SAMPLES_TO_COLLECT:
                break

        cv2.putText(frame, f"{SIGN_LABEL}: {count}/{SAMPLES_TO_COLLECT}",
                    (10, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        cv2.imshow("Collecting Data", frame)

        key = cv2.waitKey(1) & 0xFF
        if key == ord('s'):
            recording = True
            print("Recording started...")
        if key == ord('q'):
            break

filename = os.path.join(SAVE_PATH, f"{SIGN_LABEL}.csv")
with open(filename, "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(samples)

print(f"\nSaved {len(samples)} samples to {filename}")
cap.release()
cv2.destroyAllWindows()