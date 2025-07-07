"use client";
import { useState } from "react";

const RegistrationContainer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    profession: "",
    fatherName: "",
    motherName: "",
    mobile: "",
    email: "",
    whatsapp: "",
    batch: "",
    bloodGroup: "",
    registrationFee: "1000",
    bkashId: "",
    amount: "",
    presentAddress: "",
    permanentAddress: "",
    photo: null,
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const batchYears = Array.from({ length: 30 }, (_, i) =>
    (2026 - i).toString()
  );
  const union = [
    "কলকলিয়া ইউনিয়ন", 
    "পাটলি ইউনিয়ন", 
    "মিরপুর ইউনিয়ন", 
    "জগন্নাথপুর পৌরসভা", 
    "চিলাউড়া হলদিপুর ইউনিয়ন", 
    "সৈয়দপুর শাহারপাড়া ইউনিয়ন", 
    "আশারকান্দি ইউনিয়ন", 
    "পাইলগাঁও ইউনিয়ন", 
    "অন্যান্য", 
  ]

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-center py-6 bg-black text-white rounded-t-lg">
            Registration Form
          </h2>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Personal Information */}
              <div className="space-y-2">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Profession</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Father's name</label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Mother's Name</label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Whatsapp Number</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">
                  Union/Pouroshova
                </label>
                <select
                  name="union"
                  value={formData.batch}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select</option>
                  {union.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">
                  Batch/S.S.C. Passing Year
                </label>
                <select
                  name="batch"
                  value={formData.batch}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select</option>
                  {batchYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Registration Fee</label>
                <input
                  type="text"
                  name="registrationFee"
                  value={formData.registrationFee}
                  className="w-full p-2 border rounded bg-gray-100"
                  disabled
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">
                  bKash Transaction id
                </label>
                <input
                  type="text"
                  name="bkashId"
                  value={formData.bkashId}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Amount to Pay</label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            {/* Address Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-700">Present Address</label>
                <textarea
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded h-32"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Permanent Address</label>
                <textarea
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded h-32"
                  required
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div className="space-y-2">
              <label className="block text-gray-700">
                Upload PP Size Photo (JPEG, Max 100kb)
              </label>
              <input
                type="file"
                name="photo"
                onChange={handleInputChange}
                accept="image/jpeg"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-8 py-3 rounded-md hover:bg-yellow-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationContainer;
