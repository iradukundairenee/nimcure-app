"use client";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import PatientsInformations from "@/components/patientsInformations";
import { useState } from "react";

export default function PatientPage() {
  const handleAddPatient = () => {
    console.log("Add Patient button clicked");
  };
  const [activeTab, setActiveTab] = useState("all");

  const riders = [
    { name: "Emmanuel Adebayo", area: "Yaba", deliveries: 20 },
    { name: "Emmanuel Adebayo", area: "Yaba", deliveries: 20 },
    { name: "Emmanuel Adebayo", area: "Yaba", deliveries: 20 },
    { name: "Emmanuel Adebayo", area: "Yaba", deliveries: 20 },
  ];

  const tabs = [
    { id: "all", label: "All (33)" },
    { id: "yaba", label: "Yaba Riders (5)" },
    { id: "unassigned", label: "Unassigned Riders (10)" },
    { id: "assigned", label: "Assigned Riders (23)" },
  ];

  return (
    <div className="bg-[#F9F9F9] min-h-screen capitalize">
      <NavBar />
      <Header
        title=""
        buttonLabel="Assign Package to Patient"
        onButtonClick={handleAddPatient}
        breadcrumb="View Patient"
        nextDeliveryDate="14th November 2020"
        daysRemaining={2}
      />
      <div className="flex flex-row  w-[100%]">
        <div className="w-[40%] px-4">
          <PatientsInformations />
        </div>

        <div className="w-[60%] ">
          
          <div className="bg-white  rounded-lg p-6 shadow-sm items-center px-6 w-[98%]  ">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                    <span className="text-sm text-green-500">
                      Set Drug Cycle/Length
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked
                      readOnly
                      className="w-6 h-6 border-2 border-blue-500 text-blue-500"
                    />
                    <span className="text-sm text-blue-500">
                      Assign Dispatch Rider
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      disabled
                      className="w-6 h-6 border-2 border-gray-200 text-gray-200"
                    />
                    <span className="text-sm text-gray-500">Scan Package</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mb-6 border-b">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`pb-2 px-2 ${
                      activeTab === tab.id
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="bg-white rounded-lg shadow">
                {riders.map((rider, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border-b last:border-b-0 hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      name="rider"
                      className="w-4 h-4 mr-4 border-gray-300"
                    />
                    <div className="flex-1 grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-xs text-gray-500">
                          Dispatch Rider Name
                        </div>
                        <div className="text-sm font-medium">{rider.name}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">
                          Delivery Area
                        </div>
                        <div className="text-sm font-medium">{rider.area}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">
                          Number of Deliveries
                        </div>
                        <div className="text-sm font-medium">
                          {rider.deliveries} Deliveries
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <div className="flex justify-end mt-4">
                <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Next
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
