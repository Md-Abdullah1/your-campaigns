"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../../redux/store/hooks";
import { loginUser } from "../../../services/authService";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // Call login service
      loginUser(dispatch, formData);

      // Artificial delay to allow Redux update (or use useEffect in layout later)
      setTimeout(() => {
        setLoading(false);
        const token = localStorage.getItem("token");
        if (token) {
          router.push("/dashboard");
          router.refresh(); // Refresh to apply auth state
        } else {
          setError("Login failed. Invalid credentials.");
        }
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        router.push("/dashboard");
      }
    }
  }, [router]);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>

        {/* Show Error */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded text-sm text-center">
            {error}
          </div>
        )}

        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link href="/auth/register">
            <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
              create a new account
            </span>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <Link href="#">
              <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                Forgot your password?
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
