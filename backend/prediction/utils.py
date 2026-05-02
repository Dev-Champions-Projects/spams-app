import joblib
import pandas as pd
import os
from django.conf import settings

# Load model from resources folder
BASE_DIR = settings.BASE_DIR.parent

MODEL_PATH = os.path.join(BASE_DIR, "resources", "model.pkl")
SCALER_PATH = os.path.join(BASE_DIR, "resources", "scaler.pkl")

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

label_map = {
    0: "Safe",
    1: "At Risk",
    2: "High Risk"
}


# -----------------------------
# RULE-BASED LOGIC
# -----------------------------
def calculate_ca(attendance, assignment, quiz, mid_sem):
    return (
        (attendance * 0.05) +
        (assignment * 0.10) +
        (quiz * 0.10) +
        (mid_sem * 0.15)
    )


def get_rule_risk(ca):
    if ca >= 30:
        return "Safe"
    elif ca >= 20:
        return "At Risk"
    else:
        return "High Risk"


def generate_recommendation(risk):
    if risk == "High Risk":
        return "Immediate intervention required. Focus on attendance and mid-semester improvement."
    elif risk == "At Risk":
        return "Monitor closely and provide academic support."
    return "Performance is stable. Maintain consistency."


# -----------------------------
# HYBRID PREDICTION FUNCTION
# -----------------------------
def predict_student(data):
    attendance = float(data["attendance"])
    assignment = float(data["assignment"])
    quiz = float(data["quiz"])
    mid_sem = float(data["mid_sem"])

    # ---- CA Calculation ----
    ca = calculate_ca(attendance, assignment, quiz, mid_sem)

    # ---- Rule-Based ----
    rule_risk = get_rule_risk(ca)

    # ---- ML Prediction ----
    df = pd.DataFrame([{
        "attendance": attendance,
        "assignment": assignment,
        "quiz": quiz,
        "mid_sem": mid_sem,
    }])

    scaled = scaler.transform(df)

    pred = model.predict(scaled)[0]
    prob = model.predict_proba(scaled).max()

    ml_risk = label_map[pred]

    return {
        "ca_score": round(ca, 2),
        "ca_percentage": round((ca / 40) * 100, 2),
        "rule_based_risk": rule_risk,
        "ml_risk": ml_risk,
        "confidence": round(float(prob) * 100, 2),
        "recommendation": generate_recommendation(ml_risk)
    }