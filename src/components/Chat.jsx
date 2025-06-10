import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Chat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: user.email,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Chat Room</h2>
      <div className="border rounded-lg p-4 h-96 overflow-y-auto mb-4">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-2 p-2 rounded-lg ${msg.sender === user.email ? 'bg-blue-100 ml-auto w-3/4' : 'bg-gray-100 mr-auto w-3/4'}`}
            >
              <div className="font-semibold text-sm">
                {msg.sender === user.email ? 'You' : msg.sender}
              </div>
              <div>{msg.text}</div>
              <div className="text-xs text-gray-500 mt-1">{msg.timestamp}</div>
            </div>
          ))
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-l"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white py-2 px-4 rounded-r hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}