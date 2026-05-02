import AppLayout from '../../layouts/AppLayout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", score: 50 },
  { name: "Feb", score: 70 },
  { name: "Mar", score: 65 },
];

export default function Reports() {
  return (
    <AppLayout title="Reports & Analytics">
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <h3 className="font-bold mb-4">Performance Report</h3>

        <div className="h-80">
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#014691" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </AppLayout>
  );
}