import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserRound,
  GraduationCap,
  FileText,
  Settings,
  HelpCircle,
} from 'lucide-react';

const SidebarNavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
        isActive
          ? 'bg-[#014691] text-white shadow-lg shadow-blue-900/20'
          : 'text-gray-500 hover:bg-gray-100 hover:text-[#014691]'
      }`
    }
    end
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#014691] rounded-lg flex items-center justify-center text-white font-bold">
          P
        </div>
        <h1 className="font-bold text-lg text-[#014691] leading-tight">
          Promise Duke
          <span className="block text-xs font-medium text-gray-400">
            SPAMS Dashboard
          </span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4 font-bold">
        <SidebarNavItem to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
        <SidebarNavItem to="/students" icon={<Users size={20} />} label="Students" />
        <SidebarNavItem to="/teachers" icon={<UserRound size={20} />} label="Teachers" />
        <SidebarNavItem to="/classes" icon={<GraduationCap size={20} />} label="Classes" />
        <SidebarNavItem to="/reports" icon={<FileText size={20} />} label="Reports" />
        <SidebarNavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
        <SidebarNavItem to="/help" icon={<HelpCircle size={20} />} label="Help" />
      </nav>
    </aside>
  );
};

export default Sidebar;