"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const router = useRouter(); // Initialize useRouter

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Navigate to /patient
    router.push("/patient");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Login Form */}
      <div className="w-1/2 flex flex-col items-center justify-between p-10">
        {/* Top Logo */}
        <div className="w-full max-w-md text-center pt-20">
          <Image
            src="/images/logo (1).svg"
            alt="CcHub"
            width={80}
            height={20}
            className="inline-block"
          />
        </div>

        {/* Centered Form Section */}
        <div className="w-full max-w-md flex-1 flex flex-col justify-center -mt-20">
          <h1 className="text-xl font-medium mb-8">Sign in to continue</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-6"
            >
              Login
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="w-full max-w-md text-center">
          <p className="text-sm text-gray-500">
            Powered by{" "}
            <Image
              src="/images/cchub-logo.svg"
              alt="CcHub"
              width={80}
              height={20}
              className="inline-block"
            />
          </p>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center p-12">
        <div className="relative w-full h-96">
          <Image
            src="/images/delivery-illustration.svg"
            alt="Delivery Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="text-center text-white mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Serving Patients During a Pandemic
          </h2>
          <p className="text-blue-100 max-w-md">
            Delivering essential medication to NIMR patients with adherence to
            quality of service, care and confidentiality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
