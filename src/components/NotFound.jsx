import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow text-center">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-4">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}