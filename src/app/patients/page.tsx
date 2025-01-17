import NavBar from '@/components/NavBar';

export default function PatientsPage() {
  return (
    <div>
      <NavBar />
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl">Patients</h1>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            + Add Patient
          </button>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="mr-2">Sort by:</span>
              <select className="border rounded p-1">
                <option>Hospital ID</option>
              </select>
            </div>
            <div>
              <input
                type="search"
                placeholder="Search by patient name..."
                className="border rounded p-2 w-64"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Hospital ID</th>
                  <th className="text-left p-4">Patient Name</th>
                  <th className="text-left p-4">Phone Number</th>
                  <th className="text-left p-4">Next Delivery Date</th>
                  <th className="text-left p-4">Location</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample row - you can map through your data here */}
                <tr className="border-b">
                  <td className="p-4">IAFH-1123</td>
                  <td className="p-4">John Doe</td>
                  <td className="p-4">+234-70864920</td>
                  <td className="p-4">12th September 2023</td>
                  <td className="p-4">VI, Lagos</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded-full text-sm bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-blue-500 hover:text-blue-700">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
