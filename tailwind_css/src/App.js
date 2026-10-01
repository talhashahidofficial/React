import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">

      {/* Login Card */}
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        {/* Logo */}
        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/30">
            N
          </div>

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Login to your account
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Email
            </label>

            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

          </div>

          {/* Password */}
          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 pr-16 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex cursor-pointer items-center gap-2 text-slate-400">

              <input
                type="checkbox"
                className="h-4 w-4 accent-blue-600"
              />

              Remember me

            </label>

            <button
              type="button"
              className="text-blue-400 transition hover:text-blue-300"
            >
              Forgot password?
            </button>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >

            {loading ? "Signing in..." : "Sign In"}

          </button>

        </form>

        {/* Success Message */}
        {success && (
          <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400">
            ✓ Login successful!
          </div>
        )}

        {/* Register */}
        <p className="mt-8 text-center text-sm text-slate-500">

          Don't have an account?{" "}

          <button
            type="button"
            className="font-medium text-blue-400 transition hover:text-blue-300"
          >
            Create one
          </button>

        </p>

      </div>

    </div>
  );
}

export default App;
