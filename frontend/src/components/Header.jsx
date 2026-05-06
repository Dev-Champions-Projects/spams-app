import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, auth, logout } = useAuth();
    const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };
  return (
    <header className="top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50 ">
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-2"> */}
      <div className="flex  mx-4 h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <Link
            className="flex items-center gap-2 text-[#014691]  font-bold text-lg"
            to="/"
          >
            {/* Simple shield/data icon */}
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l8 4v6c0 5.25-3.5 10-8 10s-8-4.75-8-10V6l8-4z" />
            </svg>
            <span>SPAMS</span>
          </Link>
        </div>

        {/* Navigation */}

        <div className="md:flex md:items-center md:gap-12">
          {!isAuthenticated && (
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm font-medium">
                <li>
                  <Link
                    className="text-gray-600 hover:text-[#014691]"
                    to="/reports"
                  >
                    Reports
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-[#014691]" to="/">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-[#014691]"
                    to="/help"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          )}

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {!isAuthenticated ? (
                <>
                  {" "}
                  <Link
                    className="rounded-md bg-[#014691]  px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                    to="/auth/login"
                  >
                    Login
                  </Link>
                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#014691]  hover:bg-gray-200"
                      to="/auth/register"
                    >
                      Register
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    className="rounded-md bg-gray-100  px-5 py-2.5 text-sm font-medium text-[#014691]  shadow-sm hover:text-blue-400"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                  <div className="hidden sm:flex">
                    <button
          onClick={handleLogout}
          className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-500 hover:text-red-800 cursor-pointer"
        >
          Logout
        </button>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu */}
            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 hover:text-[#014691] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
