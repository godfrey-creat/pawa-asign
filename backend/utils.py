def format_prompt(question: str) -> str:
    """
    Format the user query to get better responses from the LLM
    """
    enhanced_prompt = f"""
    Please provide a comprehensive and well-structured answer to the following question:
    
    {question}
    
    Format your response with:
    1. A direct answer to the question
    2. Any necessary details or explanation
    3. If applicable, include relevant categories of information (like requirements, steps, or considerations)
    4. Conclude with any important notes or advisories
    
    Keep your response factual, clear, and well-organized.
    """
    
    return enhanced_prompt