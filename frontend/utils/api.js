// API utility functions

export async function askQuestion(question) {
    try {
      const response = await fetch('/api/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to get response');
      }
  
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  }
  
  export async function getHistory() {
    try {
      const response = await fetch('/api/history');
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to get history');
      }
  
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  }