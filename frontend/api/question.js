// Next.js API route for proxying requests to our backend
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    try {
      const { question } = req.body;
      
      if (!question || question.trim() === '') {
        return res.status(400).json({ message: 'Question is required' });
      }
  
      // Make request to our FastAPI backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to get response from API');
      }
  
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      console.error('API error:', error);
      return res.status(500).json({ message: error.message || 'Internal server error' });
    }
  }