# pawa-asign
# Pawa Q&A Application

An interactive Q&A system with LLM integration. This application is a full-stack solution built with FastAPI on the backend and Next.js on the frontend.

## Features

- Ask questions and receive well-formatted AI responses
- View and browse previous query history
- Modern, responsive UI with Tailwind CSS
- Fast and efficient API endpoints

## Tech Stack

### Backend
- Python with FastAPI
- OpenAI API integration
- Pydantic for data validation

### Frontend
- Next.js
- TailwindCSS
- React components
- React Markdown for response formatting

## Getting Started

### Prerequisites

- Python 3.9+
- Node.js 16+
- OpenAI API key (or other LLM provider)

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Create a `.env` file with the following content:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   OPENAI_MODEL=gpt-3.5-turbo
   PORT=8000
   HOST=0.0.0.0
   ```

5. Start the backend server:
   ```
   uvicorn main:app --reload
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file with the following content:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Documentation

After starting the backend server, you can access the Swagger documentation at [http://localhost:8000/docs](http://localhost:8000/docs).

## LLM Integration

This application uses OpenAI's API by default, but you can modify the `services.py` file to integrate with other LLM providers like DeepSeek, Gemini, or Claude.

## Prompt Engineering

The application uses prompt engineering techniques to improve the quality of LLM responses. You can modify the prompt formatting in the `utils.py` file to customize how questions are presented to the LLM.

## License

This project is available for open use.