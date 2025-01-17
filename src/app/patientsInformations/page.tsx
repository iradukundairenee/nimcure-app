"use client";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import PatientSidebar from "@/components/PatientSidebar";
import Link from "next/link";

export default function PatientPage() {
  const handleAddPatient = () => {
    console.log("Add Patient button clicked");
  };

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
        <div className="w-[40%]">
          <PatientSidebar />
        </div>

        <div className="w-[60%] ">
          <div className="flex items-center justify-between px-6 border-b">
            <div className="flex items-center gap-3">
              <span className="text-[#2A2A2A] text-sm">Payment Status</span>
              <span className="bg-custom-green-opacity opacity-70 text-custom-green   rounded-md px-4 py-3 text-xs font-gilroy font-bold leading-[14px]  decoration-skip-ink w-[75px] h-[36px]">
                Paid
              </span>
            </div>
            <div className="flex gap-8 items-center">
              <Link href={`/patientsInformations`}>
                <button className="text-blue-600 py-4  border-b-2 border-blue-600">
                  Patient Information
                </button>
              </Link>

              <Link href={`/deliveryInformation`}>
                <button className="text-gray-400 py-4">
                  Delivery Information
                </button>
              </Link>
            </div>
          </div>
          {/* Main Content */}
          <div className="bg-white flex flex-row rounded-lg p-6 shadow-sm items-start px-6 w-[98%]">
            <div className="flex flex-col justify-between items-start w-[50%]  p-4">
              <div>
                <h2 className="text-xl font-medium mb-1">
                  Patient Information
                </h2>
                <p className="text-gray-500 text-sm">
                  Personal information about Patient
                </p>
                <div>
                  <button className="flex items-center gap-2 text-blue-500 border border-blue-500 px-4 py-2 rounded">
                    <EditOutlined />
                    Edit Patient Information
                  </button>
                </div>
              </div>
            </div>

            {/* Right Div */}
            <div className="grid grid-cols-2 gap-6 w-[50%]  p-4">
              {/* Full-width input */}
              <div className="col-span-2">
                <label className="block text-sm text-gray-600 mb-1">
                  Hospital ID
                </label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-50 border border-gray-200 rounded text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value="Oluwaseun"
                  className="w-full p-2 bg-gray-50 border border-gray-200 rounded text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value="Aregbesola"
                  className="w-full p-2 bg-gray-50 border border-gray-200 rounded text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Gender
                </label>
                <Select
                  disabled
                  value="Male"
                  className="w-full"
                  suffixIcon={<span className="text-gray-400">▼</span>}
                >
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                </Select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value="+2348123456789"
                  className="w-full p-2 bg-gray-50 border border-gray-200 rounded text-gray-700"
                />
              </div>

              {/* Full-width input */}
              <div className="col-span-2">
                <label className="block text-sm text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value="seunregbesola@gmail.com"
                  className="w-full p-2 bg-gray-50 border border-gray-200 rounded text-gray-700"
                />
              </div>

              {/* Save Changes button */}
              <div className="col-span-2 flex justify-end mt-4">
                <button className="bg-[#4285F4] text-white px-6 py-2 rounded hover:bg-blue-600">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
