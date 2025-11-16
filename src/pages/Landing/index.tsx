import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  const handleGoToRegister = () => {
    navigate('/register');
  };
  return (
    <div className="space-y-4 flex flex-col h-full justify-center">
      <h1 className="text-5xl font-bold">Productive Mind</h1>
      <p>
        With only the features you need, Organic Mind is customized for
        individuals seeking a stress-free way to stay focused on their goals,
        projects, and tasks.{' '}
      </p>
      <button
        onClick={handleGoToRegister}
        className="cursor-pointer w-full p-2.5 bg-[#57cdc3] rounded-md text-black font-semibold"
      >
        Get Started
      </button>
      <p className="mx-auto">
        Already have an account?
        <a href="/login" className="font-medium">
          {' '}
          Login
        </a>
      </p>
    </div>
  );
}
