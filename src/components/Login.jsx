import { Eye, EyeOff, Lock, Mail, X } from "lucide-react";
import { useState } from "react";

export default function Login({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    // Overlay with background blur over Home page
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        {/* Close / Skip button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h1 className="text-2xl font-semibold text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Login to continue shopping
        </p>

        <form
          onSubmit={() => {
            alert(
              "Login feature is coming soon. For now, you can skip this step and continue browsing.",
            );
          }}
          className="space-y-4"
        >
          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="relative mt-1">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="relative mt-1">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot */}
          <div className="flex justify-end">
            <button
              onClick={() => {
                      alert(
                        "We’re working on this section. It will be available soon!",
                      );
                    }}
              type="button"
              className="text-sm text-pink-500 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Signup */}
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => {
              alert(
                "Sign up feature is coming soon. For now, you can skip this step and continue browsing.",
              );
            }}
            className="text-pink-500 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

        {/* Optional Skip text */}
        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-gray-500 hover:underline"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
