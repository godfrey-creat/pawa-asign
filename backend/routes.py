from fastapi import APIRouter, HTTPException, Depends
from schemas import QuestionRequest, QuestionResponse
from services import get_llm_response
from typing import List, Optional
import time

router = APIRouter()

# In-memory storage for query history
# In a production app, this would be a database
query_history = []

@router.post("/ask", response_model=QuestionResponse)
async def ask_question(request: QuestionRequest):
    """
    Process a user question and return LLM response
    """
    if not request.question.strip():
        raise HTTPException(status_code=400, detail="Question cannot be empty")
    
    try:
        # Get response from LLM
        response = await get_llm_response(request.question)
        
        # Add to history
        query_item = {
            "id": len(query_history) + 1,
            "question": request.question,
            "answer": response,
            "timestamp": time.time()
        }
        query_history.append(query_item)
        
        return QuestionResponse(
            answer=response,
            query_id=query_item["id"]
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing request: {str(e)}")

@router.get("/history", response_model=List[dict])
async def get_history():
    """
    Retrieve query history
    """
    return query_history