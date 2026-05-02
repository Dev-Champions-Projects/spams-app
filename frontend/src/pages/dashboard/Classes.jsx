import AppLayout from "../../layouts/AppLayout";
import { GraduationCap } from "lucide-react";

export default function Classes() {
  return (
    <AppLayout title="Classes">
      
      <div className="grid md:grid-cols-2 gap-6">
        {["CSC 301", "MTH 202"].map((cls) => (
          <div key={cls} className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-[#017EA8]" />
              <h3 className="font-bold">{cls}</h3>
            </div>
            <p className="text-sm text-gray-500 mt-2">45 Students</p>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}