export default function QuestionForm({ question, setQuestion, handleSubmit, loading }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Ask a Question</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
              What would you like to know?
            </label>
            <textarea
              id="question"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="e.g., What documents do I need to travel from Kenya to Ireland?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className={`px-4 py-2 rounded-md text-white ${
                loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } transition`}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Submit Question'}
            </button>
          </div>
        </form>
      </div>
    );
  }