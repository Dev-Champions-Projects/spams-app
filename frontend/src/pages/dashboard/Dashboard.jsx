import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  Users,
  UserRound,
  GraduationCap,
  FileText,
  Settings,
  HelpCircle,
  Search,
  Bell,
  User,
  TrendingUp,
  BarChart3,
  PieChart as PieIcon,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  UploadCloud,
  X,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "../../components/Sidebar";

// --- Sample Data & Constants ---
const PRIMARY_BLUE = "#014691";
const SECONDARY_TEAL = "#017EA8";

const PERFORMANCE_DATA = [
  { name: "Jan", score: 40 },
  { name: "Feb", score: 55 },
  { name: "Mar", score: 48 },
  { name: "Apr", score: 70 },
  { name: "May", score: 65 },
  { name: "Jun", score: 82 },
];

const GRADE_DATA = [
  { name: "A", value: 20 },
  { name: "B", value: 35 },
  { name: "C", value: 25 },
  { name: "D", value: 15 },
  { name: "F", value: 5 },
];

const ATTENDANCE_DATA = [
  { name: "Present", value: 85, color: SECONDARY_TEAL },
  { name: "Absent", value: 15, color: "#E5E7EB" },
];

const Dashboard = () => {
  const { auth } = useAuth();
  const [viewState, setViewState] = useState("initial"); // 'initial', 'loading', 'result'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentData, setStudentData] = useState(null);

  const roleMap = {
  admin: "Administrator User",
  teacher: "Teacher User",
  student: "Student User",
  parent: "Parent User",
};

const roleLabel = auth.user?.role
  ? roleMap[auth.user.role] || "User"
  : "Loading...";

  // Simulate Backend Trigger
  const handleRunPrediction = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setViewState("loading");

    // Simulate API delay
    setTimeout(() => {
      setViewState("result");
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-gray-50 font-['Inter',sans-serif] text-slate-700 mb-32">
      {/* --- Sidebar --- */}
      {/*  {/* Responsive Sidebar */}

      <Sidebar />
     
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="h-20 bg-[#014691] border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-xl font-semibold text-white">
            SPAMS Analytics Overview
          </h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-[#017EA8] w-64 transition-all"
              />
            </div>
            <button className="relative text-gray-100 hover:text-[#014691]">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l pl-6">
              <div className="text-right">
                <p className="text-sm text-white font-semibold">
  {roleLabel}
</p>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <User size={24} className="text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="p-8 space-y-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KpiCard
              title="Total Students"
              value="1,284"
              icon={<Users className="text-[#014691]" />}
              color="bg-blue-50"
            />
            <KpiCard
              title="Avg. Performance"
              value="72.4%"
              icon={<TrendingUp className="text-[#017EA8]" />}
              color="bg-teal-50"
            />
            <KpiCard
              title="Attendance Rate"
              value="94.2%"
              icon={<CheckCircle2 className="text-green-600" />}
              color="bg-green-50"
            />
            <KpiCard
              title="At-Risk Students"
              value="12"
              icon={<AlertTriangle className="text-white" />}
              color="bg-red-400"
              textColor="text-white"
            />
          </div>

          {/* Main Visuals Area */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column: Charts */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Performance Trend</h3>
                  <select className="text-sm border-none bg-gray-50 rounded-lg">
                    <option>Last 6 Months</option>
                  </select>
                </div>
                <div className="h-[300px] w-full">
                  {viewState === "result" ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={PERFORMANCE_DATA}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="#f0f0f0"
                        />
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12 }}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12 }}
                        />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="score"
                          stroke={PRIMARY_BLUE}
                          strokeWidth={3}
                          dot={{ r: 4, fill: PRIMARY_BLUE }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  ) : (
                    <SkeletonLoader type="chart" />
                  )}
                </div>
              </div>

              {/* Student Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                  <h3 className="font-bold text-lg">
                    Recent Student Assessments
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#017EA8] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#014691] transition-colors flex items-center gap-2"
                  >
                    <UploadCloud size={18} /> Import Data
                  </button>
                </div>
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-400 font-semibold">
                    <tr>
                      <th className="px-6 py-4">Student Name</th>
                      <th className="px-6 py-4">Quiz</th>
                      <th className="px-6 py-4">Mid-Sem</th>
                      <th className="px-6 py-4">Total CA</th>
                      <th className="px-6 py-4">Prediction</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <TableRow
                      name="Jarah Walleh"
                      quiz="18/20"
                      mid="24/30"
                      ca="74"
                      status={viewState === "result" ? "At Risk" : "Pending"}
                      onPredict={() => setIsModalOpen(true)}
                    />
                    <TableRow
                      name="Anita Grant"
                      quiz="12/20"
                      mid="15/30"
                      ca="45"
                      status="Pending"
                      onPredict={() => setIsModalOpen(true)}
                    />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Analytics Panels */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-6">Predictive Analytics</h3>
                {viewState === "result" ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-red-50 border border-red-100 rounded-xl">
                      <div>
                        <p className="text-xs text-red-600 font-bold uppercase">
                          Risk Level
                        </p>
                        <p className="text-xl font-bold text-red-700">
                          At Risk
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Confidence</p>
                        <p className="text-lg font-bold">92%</p>
                      </div>
                    </div>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={ATTENDANCE_DATA}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {ATTENDANCE_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-3">
                      <RiskIndicator
                        label="Safe"
                        percent={15}
                        color="bg-green-500"
                      />
                      <RiskIndicator
                        label="At Risk"
                        percent={60}
                        color="bg-yellow-500"
                      />
                      <RiskIndicator
                        label="High Risk"
                        percent={25}
                        color="bg-red-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <BarChart3 className="text-gray-300" size={32} />
                    </div>
                    <p className="text-gray-400 text-sm">
                      Run a prediction to view <br /> detailed analytics
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- Modal Window --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative z-10"
            >
              <div className="bg-[#014691] p-6 text-white flex justify-between items-center">
                <h3 className="text-xl font-bold">Manual Score Entry</h3>
                <button onClick={() => setIsModalOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleRunPrediction} className="p-8 space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Student Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-gray-200 rounded-xl focus:ring-[#017EA8] focus:border-[#017EA8]"
                    placeholder="Enter Name of Student"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Attendance Score{" "}
                      <span className="text-gray-400 font-normal">/100</span>
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      className="w-full border-gray-200 rounded-xl"
                      placeholder="e.g. 85"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Assignment Score{" "}
                      <span className="text-gray-400 font-normal">/100</span>
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      className="w-full border-gray-200 rounded-xl"
                      placeholder="e.g. 70"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Quiz Score{" "}
                      <span className="text-gray-400 font-normal">/100</span>
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      className="w-full border-gray-200 rounded-xl"
                      placeholder="e.g. 60"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Mid-Semester Score{" "}
                      <span className="text-gray-400 font-normal">/100</span>
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      className="w-full border-gray-200 rounded-xl"
                      placeholder="e.g. 65"
                    />
                  </div>
                </div>

                <p className="text-xs text-gray-400 text-center">
                  All scores are entered out of 100. Weighted CA and total will
                  be calculated automatically.
                </p>

                <button
                  type="submit"
                  className="w-full bg-[#014691] text-white py-4 rounded-xl font-bold hover:bg-[#017EA8] transition-all shadow-lg shadow-blue-900/20"
                >
                  Generate SPAMS Prediction
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Global Loading Overlay --- */}
      {viewState === "loading" && (
        <div className="fixed inset-0 z-[60] bg-white/80 backdrop-blur-md flex flex-col items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="mb-4 text-[#014691]"
          >
            <Loader2 size={48} />
          </motion.div>
          <h3 className="text-xl font-bold text-[#014691]">
            Processing Metrics
          </h3>
          <p className="text-gray-500">
            Calculating CA weightage and risk probability...
          </p>
        </div>
      )}
    </div>
  );
};

// --- Sidebar NavItem using NavLink ---
const SidebarNavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all font-medium ` +
      (isActive
        ? "bg-[#014691] text-white shadow-lg shadow-blue-900/20"
        : "text-gray-500 hover:bg-gray-100 hover:text-[#014691]")
    }
    end
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

const KpiCard = ({
  title,
  value,
  icon,
  color,
  textColor = "text-slate-800",
}) => (
  <div
    className={`p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between ${color}`}
  >
    <div>
      <p
        className={`text-sm font-medium ${textColor === "text-white" ? "opacity-80" : "text-gray-500"}`}
      >
        {title}
      </p>
      <h4 className={`text-2xl font-bold mt-1 ${textColor}`}>{value}</h4>
    </div>
    <div
      className={`w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-sm`}
    >
      {icon}
    </div>
  </div>
);

const TableRow = ({ name, quiz, mid, ca, status, onPredict }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="px-6 py-4 font-semibold text-slate-800">{name}</td>
    <td className="px-6 py-4 text-sm">{quiz}</td>
    <td className="px-6 py-4 text-sm">{mid}</td>
    <td className="px-6 py-4 font-bold text-[#014691]">{ca}</td>
    <td className="px-6 py-4">
      <span
        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          status === "At Risk"
            ? "bg-red-100 text-red-600"
            : "bg-gray-100 text-gray-400"
        }`}
      >
        {status}
      </span>
    </td>
    <td className="px-6 py-4 text-right">
      <button
        onClick={onPredict}
        className="text-sm font-bold text-[#017EA8] hover:underline"
      >
        See Prediction
      </button>
    </td>
  </tr>
);

const RiskIndicator = ({ label, percent, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-xs font-semibold">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

const SkeletonLoader = ({ type }) => (
  <div className="animate-pulse space-y-4">
    {type === "chart" && (
      <div className="h-[250px] bg-gray-100 rounded-xl w-full" />
    )}
  </div>
);

export default Dashboard;
