"use client";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import patientsData from "@/lib/patientsData";
import Link from "next/link";

export default function PatientsPage() {
  const handleAddPatient = () => {
    console.log("Add Patient button clicked");
  };

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <NavBar />
      <div className="p-4">
        <Header
          title="Patients"
          buttonLabel="+ Add Patient"
          onButtonClick={handleAddPatient}
        />
        <div className="mt-4 px-10 ">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="mr-2 text-[14px] leading-[20px] font-gilroy font-normal text-gray-custom">
                Sort by:
              </span>
              <select className="p-1 text-[16px] leading-[20px] font-gilroy  text-[#262626]">
                <option>Hospital ID</option>
              </select>
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="Search by patient name, id"
                className="w-[224px] h-[32px] border border-[#E5E5E5] rounded-[4px] pl-7 pr-2 py-1.5 text-[12px] placeholder-[#262626]/30 focus:outline-none focus:ring-1 focus:ring-[#E5E5E5]"
              />
              <svg
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-[#262626]/30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 17.5L14.1667 14.1667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <table className="min-w-full border-collapse border">
              <thead>
                <tr className="border-b">
                  <th
                    className="p-4 text-sm"
                    style={{
                      color: "rgba(42, 42, 42, 0.7)",
                    }}
                  >
                    Hospital ID
                  </th>
                  <th
                    className="p-4 text-sm"
                    style={{
                      color: "rgba(42, 42, 42, 0.7)",
                    }}
                  >
                    Patient Name
                  </th>
                  <th
                    className="p-4 text-sm"
                    style={{
                      color: "rgba(42, 42, 42, 0.7)",
                    }}
                  >
                    Phone Number
                  </th>
                  <th
                    className="p-4 text-sm"
                    style={{
                      color: "rgba(42, 42, 42, 0.7)",
                    }}
                  >
                    Next Delivery Date
                  </th>
                  <th
                    className="p-4 text-sm"
                    style={{
                      color: "rgba(42, 42, 42, 0.7)",
                    }}
                  >
                    Location
                  </th>
                  <th
                    className="p-4 text-sm"
                    style={{
                      color: "rgba(42, 42, 42, 0.7)",
                    }}
                  >
                    Status
                  </th>
                  <th
                    className="p-4 text-sm"
                    style={{
                      color: "rgba(42, 42, 42, 0.7)",
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {patientsData.map((patient) => (
                  <tr key={patient.hospitalId} className="border-b">
                    <td
                      className="p-4 text-sm text-[#2A2A2A]"
                      style={{
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    >
                      {patient.hospitalId}
                    </td>
                    <td
                      className="p-4 text-sm text-[#2A2A2A]"
                      style={{
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    >
                      {patient.name}
                    </td>
                    <td
                      className="p-4 text-sm text-[#2A2A2A]"
                      style={{
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    >
                      {patient.phone}
                    </td>
                    <td
                      className="p-4 text-sm text-[#2A2A2A]"
                      style={{
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    >
                      {patient.deliveryDate}
                    </td>
                    <td
                      className="p-4 text-sm text-[#2A2A2A]"
                      style={{
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    >
                      {patient.location}
                    </td>
                    <td className="p-4 text-sm">
                      <span
                        className={`bg-custom-green-opacity opacity-70 text-custom-green   rounded-md px-4 py-3 text-xs font-gilroy font-bold leading-[14px]  decoration-skip-ink w-[75px] h-[36px]`}
                      >
                        {patient.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      <Link href={`/patientsInformations`}>
                        <button className="text-blue-500 border border-blue-300 hover:border-blue-500 rounded-md px-2 py-1">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-between items-center text-sm text-gray-custom">
            <span>
              You are viewing 5 out of {patientsData.length} deliveries
            </span>
            <div className="flex items-center">
              <button className="px-3 py-2 border rounded-full text-gray-600 mr-2 w-[100px]">
                Prev
              </button>
              <span>1</span>
              <button className="px-3 py-2 border rounded-full text-gray-600 ml-2 w-[100px]">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
