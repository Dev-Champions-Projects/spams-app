# 🎓 Student Academic Performance Monitoring System (SPAMS)

## 📌 Overview

The **Student Academic Performance Monitoring System (SPAMS)** is a full-stack, data-driven web application designed to monitor, evaluate, and predict student academic performance in real-time.

The system integrates:

* 📊 Academic data tracking (assessments, attendance, performance)
* 🔐 Secure authentication with role-based access
* 🤖 Machine Learning for predictive analytics
* 🌐 RESTful APIs for seamless frontend/backend communication

SPAMS is built to assist **educators, administrators, students, and parents** in making informed academic decisions.

---

## 🚀 Key Features

### 🔐 Authentication & User Management

* JWT-based authentication (Login, Register, Logout)
* Role-based access control:

  * Admin
  * Teacher
  * Student
  * Parent
* Profile management
* Secure password handling

---

### 👥 Students Management

* Create, update, and manage student records
* Department and level tracking
* Pagination, search, and filtering support

---

### 📝 Assessments Module

* Record scores for:

  * Assignments
  * Quizzes
  * Exams
* Subject-based performance tracking
* Historical academic data storage

---

### 📅 Attendance Module

* Daily attendance tracking (Present/Absent)
* Attendance percentage computation
* Supports performance evaluation

---

### 📊 Performance Module

* GPA tracking per term and year
* Performance remarks and analysis
* Aggregated academic insights

---

### 🤖 Prediction Module (AI-Powered)

* Hybrid prediction system:

  * Rule-based logic
  * Machine Learning model (Scikit-learn)
* Predicts:

  * Risk level (Safe, At Risk, High Risk)
  * Confidence score
* Generates automated academic recommendations

---

## 🧠 Machine Learning Integration

The system uses a trained model to predict student performance based on:

* Attendance
* Assignment scores
* Quiz scores
* Mid-semester exam scores

### ML Stack:

* `scikit-learn`
* `pandas`
* `numpy`
* `joblib` (model persistence)

---

## 🏗️ System Architecture

```
Frontend (React)
        ↓
Django REST API (Backend)
        ↓
PostgreSQL Database (Neon Cloud)
        ↓
Machine Learning Model
```

---

## 🛠️ Tech Stack

| Layer       | Technology                    |
| ----------- | ----------------------------- |
| Frontend    | React.js                      |
| Backend     | Django REST Framework         |
| Database    | PostgreSQL (Neon)             |
| Auth        | JWT (SimpleJWT)               |
| ML          | Scikit-learn, Pandas, NumPy   |
| API Testing | Postman / Swagger             |
| Deployment  | (Optional: Docker, VPS, etc.) |

---

## 📁 Project Structure

```
SPAMS/
│
├── api/                # Main API routing
├── users/              # Authentication & user management
├── students/           # Student records
├── assessments/        # Academic scores
├── attendance/         # Attendance tracking
├── performance/        # GPA and performance
├── prediction/         # ML predictions
│
├── resources/          # ML model & scaler
│   ├── model.pkl
│   └── scaler.pkl
│
├── manage.py
└── requirements.txt
```

---

## ⚙️ Installation & Setup Guide

### 🔹 1. Clone Repository

```bash
git clone https://github.com/your-username/spams.git
cd spams
```

---

### 🔹 2. Create Virtual Environment

```bash
python -m venv venv
```

Activate:

**Windows**

```bash
venv\Scripts\activate
```

**Mac/Linux**

```bash
source venv/bin/activate
```

---

### 🔹 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 🔹 4. Configure Environment Variables

Create a `.env` file:

```
DEBUG=True
SECRET_KEY=your_secret_key
DATABASE_URL=your_postgres_connection_string
```

---

### 🔹 5. Database Setup

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

### 🔹 6. Create Superuser

```bash
python manage.py createsuperuser
```

---

### 🔹 7. Run Server

```bash
python manage.py runserver
```

---

### 🔹 8. Access API

```
http://127.0.0.1:8000/api/v1/
```

---

## 🔐 Authentication Flow

### Register

```
POST /auth/register/
```

### Login

```
POST /auth/token/
```

### Refresh Token

```
POST /auth/token/refresh/
```

### Logout

```
POST /auth/logout/
```

---

## 📡 API Endpoints (CRUD)

### 👤 Users (Admin)

```
GET    /users/
GET    /users/{id}/
PATCH  /users/{id}/
DELETE /users/{id}/
```

---

### 🎓 Students

```
POST   /students/
GET    /students/
GET    /students/{id}/
PUT    /students/{id}/
PATCH  /students/{id}/
DELETE /students/{id}/
```

---

### 📝 Assessments

```
POST   /assessments/
GET    /assessments/
GET    /assessments/{id}/
PUT    /assessments/{id}/
PATCH  /assessments/{id}/
DELETE /assessments/{id}/
```

---

### 📅 Attendance

```
POST   /attendance/
GET    /attendance/
GET    /attendance/{id}/
PUT    /attendance/{id}/
PATCH  /attendance/{id}/
DELETE /attendance/{id}/
```

---

### 📊 Performance

```
POST   /performance/
GET    /performance/
GET    /performance/{id}/
PUT    /performance/{id}/
PATCH  /performance/{id}/
DELETE /performance/{id}/
```

---

### 🤖 Predictions

```
POST   /predictions/predict/
GET    /predictions/
GET    /predictions/{id}/
DELETE /predictions/{id}/
```

---

## 🔎 Pagination, Search & Filtering

### Pagination

```
GET /students/?page=2
```

### Search

```
GET /students/?search=CSC
```

### Filtering

```
GET /students/?level=300
```

---

## 🧪 API Testing

Use:

* Postman
* Swagger UI (if enabled)

Ensure you:

* Add Bearer Token
* Use correct HTTP methods

---

## 📊 Example Prediction Request

```json
{
  "student_id": 1,
  "attendance": 80,
  "assignment": 70,
  "quiz": 65,
  "mid_sem": 60
}
```

---

## 📈 Example Response

```json
{
  "ca_score": 28.5,
  "ca_percentage": 71.25,
  "rule_based_risk": "Safe",
  "ml_risk": "Safe",
  "confidence": 92.4,
  "recommendation": "Performance is stable. Maintain consistency."
}
```

---

## 🔒 Security Features

* JWT Authentication
* Role-based permissions
* Password hashing
* Token expiration & refresh
* Secure API endpoints

---

## 📸 Suggested Screenshots (For Documentation)

* Postman API responses
* Swagger UI
* Database tables (PostgreSQL/Neon)
* ML training notebook
* Frontend dashboard
* Prediction outputs

---

## 🚀 Future Improvements

* Real-time dashboards
* Email/SMS alerts
* Advanced analytics & charts
* Integration with LMS
* Mobile app support

---

## 🤝 Contribution

Contributions are welcome!

1. Fork the repo
2. Create a branch
3. Commit changes
4. Submit PR

---

## 📄 License

This project is for academic and educational purposes.

---

## 👨‍💻 Author

**Your Name**
Software Developer | AI Enthusiast

---

## ⭐ Acknowledgements

* Django REST Framework
* Scikit-learn
* PostgreSQL (Neon)
* Open-source community
