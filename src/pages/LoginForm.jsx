import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true); // ✅ Start with loading true (page entry animation)
  const [submitting, setSubmitting] = useState(false); // ✅ For login button spinner

  // ✅ Show buffer animation for 2s when user navigates to login page
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); //1.5sec
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const err = {};
    if (!form.email.trim()) err.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Enter valid email";
    if (!form.password.trim()) err.password = "Password required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Logged in (demo)");
      setForm({ email: "", password: "" });
    }, 2000);
  };

  // ✅ While loading, show buffer screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8ef]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-[#1a2b2b] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-[#1a2b2b] font-medium animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  // ✅ After buffer completes, show login form
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8ef] px-4 transition-opacity duration-700 animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-[#0f2b28] mb-4 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1a2b2b] mb-2">
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-2 border rounded-md outline-none transition ${
                errors.email ? "border-red-500" : "border-[#d6d6d1]"
              } focus:ring-1 focus:ring-[#1a2b2b]`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1a2b2b] mb-2">
              Password
            </label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-md outline-none transition ${
                errors.password ? "border-red-500" : "border-[#d6d6d1]"
              } focus:ring-1 focus:ring-[#1a2b2b]`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* ✅ Button with spinner on submit */}
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 rounded-full font-medium border border-black transition-all duration-200 
              ${submitting
                ? "bg-white text-black cursor-not-allowed"
                : "bg-black text-white hover:bg-white hover:text-black"
              }`}
          >
            {submitting ? (
              <div className="flex justify-center items-center space-x-2">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Logging in...</span>
              </div>
            ) : (
              "Log In"
            )}
          </button>

          <div className="text-center text-sm text-gray-500">
            <span>Don't have an account? </span>
            <a href="#" className="text-[#1a2b2b] underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
