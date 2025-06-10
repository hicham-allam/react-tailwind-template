import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">Welcome to ChatApp</h1>
      <p className="text-gray-700 mb-6">
        Connect with friends and colleagues in real-time.
      </p>
      {user ? (
        <Link
          to="/chat"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Go to Chat
        </Link>
      ) : (
        <Link
          to="/login"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Login to Start Chatting
        </Link>
      )}
    </div>
  );
}
