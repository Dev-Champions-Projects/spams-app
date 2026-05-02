import AppLayout from '../../layouts/AppLayout'
export default function Settings() {
  return (
    <AppLayout title="System Settings">
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-6">
        
        <div>
          <h3 className="font-bold mb-2">General Settings</h3>
          <input className="w-full p-3 border rounded-xl" placeholder="School Name" />
        </div>

        <div>
          <h3 className="font-bold mb-2">Prediction Threshold</h3>
          <input type="number" className="w-full p-3 border rounded-xl" placeholder="Risk Threshold %" />
        </div>

        <button className="bg-[#014691] text-white px-6 py-3 rounded-xl">
          Save Changes
        </button>

      </div>

    </AppLayout>
  );
}