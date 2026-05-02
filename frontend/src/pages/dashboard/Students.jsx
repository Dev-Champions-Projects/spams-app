import AppLayout from '../../layouts/AppLayout'
import { Users, Plus, Search } from "lucide-react";
import { useState } from "react";

export default function Students() {
  const [students] = useState([
    { id: 1, name: "Jarah Walleh", dept: "Computer Sci", level: "300", status: "At Risk" },
    { id: 2, name: "Anita Grant", dept: "Math", level: "200", status: "Safe" },
  ]);

  return (
    <AppLayout title="Students Management">
      
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Users className="text-[#014691]" />
          <h3 className="text-lg font-bold">All Students</h3>
        </div>

        <button className="bg-[#017EA8] text-white px-4 py-2 rounded-lg flex gap-2">
          <Plus size={18} /> Add Student
        </button>
      </div>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={18}/>
        <input className="pl-10 w-full p-3 rounded-xl border border-gray-200" placeholder="Search students..." />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-sm text-gray-500">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th>Department</th>
              <th>Level</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-semibold">{s.name}</td>
                <td>{s.dept}</td>
                <td>{s.level}</td>
                <td>
                  <span className={`px-2 py-1 rounded text-xs ${
                    s.status === "At Risk"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}