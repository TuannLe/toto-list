export default function LoginPage() {
  return (
    <div className="space-y-4 flex flex-col h-full justify-center">
      <h1 className="text-5xl font-bold">Login</h1>
      <form className="space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="p-2.5 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="p-2.5 border border-gray-300 rounded-md"
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <a href="/login" className="text-sm hover:text-blue-500">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full p-2.5 bg-[#57cdc3] rounded-md text-black font-semibold"
        >
          Login
        </button>
      </form>
      <p className="mx-auto">
        Don't have an account?
        <a href="/register" className="font-medium">
          {' '}
          Register
        </a>
      </p>
    </div>
  );
}
