from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class AskRequest(BaseModel):
    query: str

@router.post("/ask")
def ask_copilot(request: AskRequest):
    # Mock implementation of LLM response
    response_text = f"Based on our current models, {request.query} could lead to a 15% increase in local flooding. I recommend reviewing our mitigation strategies for urban drainage."
    return {
        "query": request.query,
        "answer": response_text,
        "confidence": 0.88,
        "data_sources": ["Sentinel-2", "NOAA", "Knowledge Graph"]
    }
