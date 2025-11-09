export default function RegisterPage() {
  return (
    <div className="space-y-4 flex flex-col h-full justify-center">
      <h1 className="text-5xl font-bold">Register</h1>
      <form className="space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="p-2.5 border border-gray-300 rounded-md"
            placeholder="Enter your username"
            required
          />
        </div>
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
        <div className="flex flex-col space-y-1">
          <label htmlFor="password_confirm" className="font-medium">
            Password Confirmation
          </label>
          <input
            type="password"
            id="password_confirm"
            className="p-2.5 border border-gray-300 rounded-md"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full p-2.5 bg-[#57cdc3] rounded-md text-black font-semibold"
        >
          Register
        </button>
      </form>
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
