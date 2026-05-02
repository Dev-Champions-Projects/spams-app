import AppLayout from '../../layouts/AppLayout';
import { UserRound } from "lucide-react";

export default function Teachers() {
  return (
    <AppLayout title="Teachers">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {[1,2,3].map((t) => (
          <div key={t} className="bg-white p-6 rounded-2xl shadow-sm border">
            <UserRound className="text-[#014691] mb-3" />
            <h3 className="font-bold">Dr. John Doe</h3>
            <p className="text-sm text-gray-500">Computer Science</p>
          </div>
        ))}

      </div>
    </AppLayout>
  );
}