from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any

class QuestionRequest(BaseModel):
    """
    Schema for incoming question requests
    """
    question: str = Field(..., description="The user's question")
    context: Optional[dict] = Field(None, description="Optional context for the question")

class QuestionResponse(BaseModel):
    """
    Schema for question responses
    """
    answer: str = Field(..., description="The LLM's answer to the question")
    query_id: int = Field(..., description="Unique identifier for this query")