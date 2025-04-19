import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import { getHistory } from '../utils/api';

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getHistory();
        setHistory(data);
      } catch (err) {
        console.error('Error fetching history:', err);
        setError('Failed to load query history');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Query History - Pawa Q&A Application</title>
        <meta name="description" content="Query history for interactive Q&A system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Query History</h1>
            <Link href="/">
              <a className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Back to Q&A
              </a>
            </Link>
          </div>

          {loading && <p className="text-center py-8">Loading history...</p>}
          
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {!loading && history.length === 0 && (
            <p className="text-center py-8 text-gray-500">No query history found.</p>
          )}

          {!loading && history.length > 0 && (
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                  <div className="mb-2 text-sm text-gray-500">
                    {formatDate(item.timestamp)}
                  </div>
                  <div className="mb-3">
                    <h3 className="font-medium text-gray-800">Q: {item.question}</h3>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-500 py-1">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="container mx-auto p-4 text-center text-gray-500 text-sm">
        <p>Pawa Q&A Application - Powered by AI</p>
      </footer>
    </div>
  );
}