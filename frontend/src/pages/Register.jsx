import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-neutral-900 ">
      <div className="w-full max-w-lg mx-auto sm:max-w-4xl">
  
  {/* Back to Home */}
    <div className="mb-4 mt-8">
      <Link to="/" className="text-sm text-[#014691]  hover:underline font-medium">
        ← Back to Home
      </Link>
    </div>
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Create Account
          </h1>
          <p className="text-gray-600 mt-2 dark:text-gray-300">
            Get started with your account
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-sm p-8">
          
          <form className="grid sm:grid-cols-2 gap-6">
            
            {/* First Name */}
            <div>
              <label className="form-label">First Name</label>
              <input type="text" placeholder="John" required className="form-input" />
            </div>

            {/* Last Name */}
            <div>
              <label className="form-label">Last Name</label>
              <input type="text" placeholder="Doe" required className="form-input" />
            </div>

            {/* Username */}
            <div>
              <label className="form-label">Username</label>
              <input type="text" placeholder="john_doe" required className="form-input" />
            </div>

            {/* Email */}
            <div>
              <label className="form-label">Email</label>
              <input type="email" placeholder="john@email.com" required className="form-input" />
            </div>

         

            {/* Password */}
            <div>
              <label className="form-label">Password</label>
              <input type="password" placeholder="••••••••" required className="form-input" />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="form-label">Confirm Password</label>
              <input type="password" placeholder="••••••••" required className="form-input" />
            </div>

   {/* Role Dropdown */}
            <div className="sm:col-span-2">
              <label className="form-label">Role</label>
              <select required className="form-input">
                <option value="">Select role</option>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
            </div>

            {/* Terms */}
            <div className="sm:col-span-2 flex items-center gap-2">
              <input type="checkbox" required className="accent-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                I agree to the{" "}
                <a href="#" className="text-[#014691]  font-medium hover:underline">
                  Terms & Conditions
                </a>
              </span>
            </div>

            {/* Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-md bg-[#014691]  text-white font-semibold hover:bg-blue-700 transition"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <a href="/auth/login" className="text-[#014691]  font-medium hover:underline">
            Login here
          </a>
        </div>
      </div>

      {/* Reusable Tailwind classes */}
      <style jsx>{`
        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 4px;
          color: #374151;
        }
        .dark .form-label {
          color: #e5e7eb;
        }
        .form-input {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #d1d5db;
          font-size: 0.875rem;
          outline: none;
        }
        .form-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
        .dark .form-input {
          background: #404040;
          border-color: #525252;
          color: white;
        }
      `}</style>
    </main>
  );
};

export default Register;