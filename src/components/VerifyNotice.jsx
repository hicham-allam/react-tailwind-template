// components/VerifyNotice.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function VerifyNotice() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
      <p className="mb-6">
        We've sent a verification link to your email address. Please check your
        inbox and click the link to activate your account.
      </p>
      <div className="bg-blue-100 p-4 rounded-lg">
        <p className="text-blue-800">
          Didn't receive the email? Check your spam folder or{' '}
          <button className="text-blue-600 font-medium hover:underline">
            resend verification email
          </button>
          .
        </p>
      </div>
    </div>
  );
}