import os
from dotenv import load_dotenv
import openai
from utils import format_prompt

# Load environment variables
load_dotenv()

# Configure OpenAI API
openai.api_key = os.getenv("OPENAI_API_KEY")

async def get_llm_response(question: str) -> str:
    """
    Get a response from OpenAI API
    """
    # Create a formatted prompt for better results
    prompt = format_prompt(question)
    
    try:
        response = await openai.ChatCompletion.acreate(
            model=os.getenv("OPENAI_MODEL", "gpt-3.5-turbo"),
            messages=[
                {"role": "system", "content": "You are a helpful assistant providing accurate, well-structured information in response to user queries."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=1000,
        )
        
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"Error calling OpenAI API: {str(e)}")
        raise Exception(f"Failed to get response from LLM: {str(e)}")