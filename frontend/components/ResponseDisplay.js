import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ResponseDisplay({ response }) {
  const [formattedAnswer, setFormattedAnswer] = useState('');

  useEffect(() => {
    if (response && response.answer) {
      setFormattedAnswer(response.answer);
    }
  }, [response]);

  if (!response) return null;

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Response</h2>
      
      <div className="prose max-w-none">
        <ReactMarkdown>
          {formattedAnswer}
        </ReactMarkdown>
      </div>
    </div>
  );
}