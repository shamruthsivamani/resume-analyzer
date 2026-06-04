from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.analyze import router as analyze_router

app = FastAPI()

# CORS (fix your previous error 🔥)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://resume-analyzer-kxn2-rxkywhnez-shamruth-s-projects.vercel.app"],  # change later to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analyze_router)

@app.get("/")
def root():
    return {"message": "AI Resume Analyzer API running"}