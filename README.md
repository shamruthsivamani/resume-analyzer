# 🚀 AI Resume Analyzer

An AI-powered Resume Analyzer that evaluates resumes and provides an ATS (Applicant Tracking System) score with visual insights.

---

## 📌 Features

- 📂 Upload Resume (PDF)
- 🤖 AI-based Resume Analysis
- 📊 ATS Score Calculation
- 📈 Dynamic Charts (Skills, Experience, Projects, Education)
- ⚡ FastAPI Backend
- 🎨 Modern UI with React + Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- Tailwind CSS
- Recharts

### Backend
- FastAPI
- Python
- pdfplumber

---

## 📂 Project Structure

resume-analyzer/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   │   └── analyze.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Upload.jsx
│
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repo
git clone https://github.com/your-username/resume-analyzer.git
cd resume-analyzer

---

### 2️⃣ Backend Setup
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

---

### 3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

---

## 🔗 API

POST /analyze

Response:
{
  "score": 82,
  "breakdown": [],
  "radar": []
}

---

## 🚀 Future Improvements

- AI Suggestions
- Job Matching
- Resume Generator

---

## 👨‍💻 Author

Shamruth Sivamani