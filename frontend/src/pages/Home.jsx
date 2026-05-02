export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 mt-32">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Data Driven SPAMS
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Secure, scalable, and intelligent spam detection powered by data.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/auth/register"
              className="rounded-md bg-[#014691]  px-6 py-3 text-white hover:bg-blue-700"
            >
              Get Started
            </a>
            <a
              href="/auth/login"
              className="rounded-md border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Log In
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">Real-time Detection</h3>
            <p className="mt-2 text-gray-600">
              Identify spam instantly with our data-driven algorithms.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">Scalable Architecture</h3>
            <p className="mt-2 text-gray-600">
              Built to handle millions of requests without compromise.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
            <p className="mt-2 text-gray-600">
              Gain insights into spam trends with rich visualizations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
