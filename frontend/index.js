import { useState } from 'react';
import Head from 'next/head';
import QuestionForm from '../components/QuestionForm';
import ResponseDisplay from '../components/ResponseDisplay';
import LoadingIndicator from '../components/LoadingIndicator';
import Header from '../components/Header';
import { askQuestion } from '../utils/api';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await askQuestion(question);
      setResponse(data);
    } catch (err) {
      console.error('Error submitting question:', err);
      setError('Failed to get a response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pawa Q&A Application</title>
        <meta name="description" content="Interactive Q&A system using LLM integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <QuestionForm 
            question={question}
            setQuestion={setQuestion}
            handleSubmit={handleSubmit}
            loading={loading}
          />

          {loading && <LoadingIndicator />}
          
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {response && !loading && (
            <ResponseDisplay response={response} />
          )}
        </div>
      </main>

      <footer className="container mx-auto p-4 text-center text-gray-500 text-sm">
        <p>Pawa Q&A Application - Powered by AI</p>
      </footer>
    </div>
  );
}