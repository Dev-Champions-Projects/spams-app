
import React from 'react'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-blue-900 sm:text-3xl dark:text-white">
            Stay updated with SPAMS!
          </strong>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
            Get the latest updates and features for the Student Performance Analysis & Management System.
          </p>
          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email"> Email </label>
              <input className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white" id="email" type="email" placeholder="your@email.com"/>
              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-[#014691]  px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg dark:text-gray-400">
              SPAMS (Student Performance Analysis & Management System) helps schools, teachers, and students track academic progress, attendance, and assessments efficiently. Built for Promise Duke.
            </p>
            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="https://github.com/PromiseDuke" target="_blank" rel="noreferrer">
                <span className="sr-only">GitHub</span>
                {/* GitHub SVG */}
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="mailto:promiseduke@email.com" target="_blank" rel="noreferrer">
                <span className="sr-only">Email</span>
                {/* Email SVG */}
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 4.75A2.25 2.25 0 013.75 2.5h16.5A2.25 2.25 0 0122.5 4.75v14.5a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 19.25V4.75zm2.25-.75a.75.75 0 00-.75.75v.637l9 6.75 9-6.75V4.75a.75.75 0 00-.75-.75H3.75zm17.25 2.383l-7.72 5.79a2.25 2.25 0 01-2.56 0l-7.72-5.79V19.25c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V6.383z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-blue-900 dark:text-white"> SPAMS </strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="/">Home</a>
                </li>
                <li>
                  <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="/about">About</a>
                </li>
                <li>
                  <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="/features">Features</a>
                </li>
                <li>
                  <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <strong className="font-medium text-blue-900 dark:text-white"> Resources </strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="/docs">Documentation</a>
                </li>
                <li>
                  <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="/blog">Blog</a>
                </li>
                <li>
                  <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="/faq">FAQs</a>
                </li>
              </ul>
            </div>
            <div>
              <strong className="font-medium text-blue-900 dark:text-white"> Legal </strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-blue-700 transition hover:text-blue-900/75 dark:text-white dark:hover:text-white/75" href="/terms">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
          <p className="text-center text-xs/relaxed text-gray-500 dark:text-gray-400">
            © {currentYear} SPAMS. All rights reserved.<br/>
            Created for Promise Duke.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer