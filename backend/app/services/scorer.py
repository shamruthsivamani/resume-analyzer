def calculate_score(resume_tokens, jd_tokens, similarity):
    resume_set = set(resume_tokens)
    jd_set = set(jd_tokens)

    matched = resume_set.intersection(jd_set)
    missing = jd_set - resume_set

    keyword_score = len(matched) / (len(jd_set) + 1) * 100

    ats_score = (0.6 * similarity) + (0.4 * keyword_score)

    return {
        "ats_score": round(ats_score, 2),
        "similarity_score": round(similarity, 2),
        "matched_keywords": list(matched),
        "missing_keywords": list(missing),
        "suggestions": generate_suggestions(missing)
    }

def generate_suggestions(missing_keywords):
    suggestions = []
    for word in list(missing_keywords)[:10]:
        suggestions.append(f"Consider adding '{word}' to your resume")
    return suggestions