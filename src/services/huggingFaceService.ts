import axios from 'axios';

// Function to send a message to your assistant via your secure proxy
export const sendMessageToAssistant = async (message: string): Promise<string> => {
  try {
    const response = await axios.post('/api/chat', {
      message
    });

    return response.data.response || "I'm sorry, I couldn't process your request.";
  } catch (error: any) {
    console.error('Error calling chat API:', error);
    // Check for timeout error
    if (error.response?.status === 504) {
      return "The AI assistant is taking too long to respond. Please try asking a shorter or simpler question.";
    }
    return "Sorry, I'm having trouble connecting to the server right now. Please try again later.";
  }
}; 