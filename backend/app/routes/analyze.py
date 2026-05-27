from fastapi import APIRouter, UploadFile, File, Form
from app.services.parser import extract_text
from app.services.nlp import process_text
from app.services.similarity import calculate_similarity
from app.services.scorer import calculate_score

router = APIRouter(prefix="/analyze", tags=["Analyze"])

@router.post("/")
async def analyze_resume(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):
    # 1. Extract text
    resume_text = extract_text(resume)

    # 2. NLP processing
    resume_tokens = process_text(resume_text)
    jd_tokens = process_text(job_description)

    # 3. Similarity
    similarity = calculate_similarity(resume_text, job_description)

    # 4. Scoring
    result = calculate_score(resume_tokens, jd_tokens, similarity)

    return result