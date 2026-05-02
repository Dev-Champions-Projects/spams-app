import AppLayout from "../../layouts/AppLayout";
import { HelpCircle, Search, BookOpen, Users, BarChart3, Settings } from "lucide-react";
import { useState } from "react";

export default function Help() {
  const [query, setQuery] = useState("");

  const faqs = [
    {
      question: "How do I add a student?",
      answer: "Go to Students page → Click 'Add Student' → Fill in details and submit."
    },
    {
      question: "How does prediction work?",
      answer: "SPAMS uses attendance, quizzes, and assessments to predict student risk levels using machine learning."
    },
    {
      question: "Who can access reports?",
      answer: "Admins and teachers can access reports based on role permissions."
    }
  ];

  return (
    <AppLayout title="Help & Support">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#014691] to-[#017EA8] p-8 rounded-2xl text-white mb-8">
        <h2 className="text-2xl font-bold mb-2">How can we help you?</h2>
        <p className="text-sm opacity-90 mb-4">
          Search guides, FAQs, and documentation for SPAMS
        </p>

        {/* Search */}
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-3 text-gray-300" />
          <input
            type="text"
            placeholder="Search help topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl text-black placeholder-white border border-white focus:border-[#017EA8] focus:ring-2 focus:ring-[#017EA8] bg-transparent"
          />
        </div>
      </div>

      {/* Help Categories */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        
        <HelpCard 
          icon={<Users />} 
          title="Student Management"
          desc="Learn how to add, edit, and manage students"
        />

        <HelpCard 
          icon={<BarChart3 />} 
          title="Analytics & Prediction"
          desc="Understand how predictions and reports work"
        />

        <HelpCard 
          icon={<Settings />} 
          title="System Settings"
          desc="Configure system preferences and thresholds"
        />

      </div>

      {/* Quick Guides */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border mb-8">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <BookOpen size={18}/> Quick Start Guide
        </h3>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>1. Login with your credentials</li>
          <li>2. Navigate to Students to register students</li>
          <li>3. Input attendance and assessment data</li>
          <li>4. Run predictions from the dashboard</li>
          <li>5. View reports and analytics</li>
        </ul>
      </div>

      {/* FAQs */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border mb-8">
        <h3 className="font-bold text-lg mb-4">Frequently Asked Questions</h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl p-4">
              <h4 className="font-semibold">{faq.question}</h4>
              <p className="text-sm text-gray-500 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <h3 className="font-bold text-lg mb-4">Contact Support</h3>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div>
            <p className="text-sm text-gray-600 mb-2">Email Support</p>
            <p className="font-semibold text-[#014691]">support@spams.com</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Phone</p>
            <p className="font-semibold text-[#014691]">+234 800 000 0000</p>
          </div>

        </div>

        <button className="mt-6 bg-[#014691] text-white px-6 py-3 rounded-xl">
          Send Message
        </button>
      </div>

    </AppLayout>
  );
}


// --- Reusable Help Card ---
const HelpCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
    <div className="w-10 h-10 bg-[#014691]/10 rounded-lg flex items-center justify-center text-[#014691] mb-4">
      {icon}
    </div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);