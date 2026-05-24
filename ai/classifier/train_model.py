import pandas as pd
import numpy as np
import pickle
import os
import glob
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

DATASET_PATH = "../dataset/"
MODEL_PATH = "../models/"

os.makedirs(MODEL_PATH, exist_ok=True)

# Load all CSV files
all_files = glob.glob(os.path.join(DATASET_PATH, "*.csv"))
print(f"Found {len(all_files)} sign files")

all_data = []
for f in all_files:
    df = pd.read_csv(f, header=None)
    all_data.append(df)

dataset = pd.concat(all_data, ignore_index=True)

X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values

print(f"Total samples: {len(X)}")
print(f"Signs: {list(set(y))}")

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"\nModel accuracy: {accuracy * 100:.2f}%")
print("\nDetailed report:")
print(classification_report(y_test, predictions))

with open(os.path.join(MODEL_PATH, "sign_model.pkl"), "wb") as f:
    pickle.dump(model, f)

labels = list(model.classes_)
with open(os.path.join(MODEL_PATH, "labels.txt"), "w") as f:
    f.write("\n".join(labels))

print(f"\nModel saved to {MODEL_PATH}")
print(f"Signs trained: {labels}")