import pdfplumber
import docx

def extract_text(file):
    if file.filename.endswith(".pdf"):
        return extract_pdf(file)
    elif file.filename.endswith(".docx"):
        return extract_docx(file)
    else:
        return "Unsupported file format"

def extract_pdf(file):
    text = ""
    with pdfplumber.open(file.file) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    return text

def extract_docx(file):
    doc = docx.Document(file.file)
    return "\n".join([para.text for para in doc.paragraphs])