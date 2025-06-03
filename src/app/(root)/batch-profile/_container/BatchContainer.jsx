"use client";
import Image from 'next/image';
import { useState } from 'react';

const BatchContainer = () => {
    const [selectedBatch, setSelectedBatch] = useState('');

    const students = [
        {
            name: "Samrat Hossan",
            email: "samrat@gmail.com",
            phone: "+8801717-274777",
            id: "1133",
            blood: "B+",
            image: "/images/students/student1.jpg"
        },
        {
            name: "Sehab Rahman",
            email: "samrat@gmail.com",
            phone: "+8801717-274777",
            id: "1133",
            blood: "B+",
            image: "/images/students/student2.jpg"
        },
        {
            name: "Anwar Hossain",
            email: "samrat@gmail.com",
            phone: "+8801717-274777",
            id: "1133",
            blood: "B+",
            image: "/images/students/student3.jpg"
        },
        {
            name: "MD SABBIR HOSSAIN",
            email: "samrat@gmail.com",
            phone: "+8801717-274777",
            id: "1133",
            blood: "B+",
            image: "/images/students/student4.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="relative h-[400px] bg-black">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: "url('/images/hero.jpg')" }}
                />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">আমরা পাইলটিয়ানস</h1>
                    <p className="text-xl text-center mb-8">ইতিমধ্যে আমরা যারা রেজিস্ট্রেশন সম্পন্ন করেছি তাদের ব্যাচ ভিত্তিক তালিকা</p>
                    
                    {/* Batch Selection */}
                    <div className="w-full max-w-md">
                        <select 
                            value={selectedBatch}
                            onChange={(e) => setSelectedBatch(e.target.value)}
                            className="w-full p-3 rounded-lg bg-white text-black"
                        >
                            <option value="">Select Batch/Year</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                        </select>
                    </div>

                    {/* Registration Count */}
                    <div className="mt-6 text-center">
                        <p className="text-lg">Registered (with payment): 1371</p>
                        <p>Total: 20</p>
                    </div>
                </div>
            </div>

            {/* Students Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {students.map((student, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex gap-4">
                            <div className="relative w-24 h-24 flex-shrink-0">
                                <Image
                                    src={student.image}
                                    alt={student.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold">{student.name}</h3>
                                    <button className="text-yellow-500 hover:text-yellow-600">Details</button>
                                </div>
                                <div className="space-y-1 text-sm text-gray-600 mt-2">
                                    <p>✉️ {student.email}</p>
                                    <p>📞 {student.phone}</p>
                                    <div className="flex justify-between">
                                        <p>🆔 ID: {student.id}</p>
                                        <p>🩸 Blood: {student.blood}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BatchContainer;