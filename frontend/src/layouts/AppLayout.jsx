// import Sidebar from "../components/Sidebar";
// import { Outlet } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar />

//       <main className="flex-1 overflow-y-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AppLayout;

import Sidebar from "../components/Sidebar";

export default function AppLayout({ children, title }) {
  return (
    <div className="flex h-screen bg-gray-50 font-['Inter'] text-slate-700">
      
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="h-20 bg-[#014691] px-8 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </header>

        {/* Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}