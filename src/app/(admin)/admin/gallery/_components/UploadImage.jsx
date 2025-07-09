'use client';
import { useState } from 'react';

export default function UploadImage() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);

    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      setMessage('❗ Please select at least one image.');
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images[]', file); // Laravel expects 'images[]'
    });

    try {
      const res = await fetch('http://localhost:8000/api/gallery/upload-images', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Images uploaded successfully!');
        setFiles([]);
        setPreviews([]);
      } else {
        setMessage(`❌ Upload failed: ${data.message}`);
      }
    } catch (error) {
      setMessage('❌ Server error occurred');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg mb-30">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Upload Multiple Images</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full h-40 border-4 border-dashed border-blue-400 rounded-lg cursor-pointer hover:border-blue-600 transition-colors duration-300"
        >
          <svg
            className="w-12 h-12 mb-3 text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4m0 0V8m0 4h10m-5-4v12" />
          </svg>
          <span className="text-blue-600 font-semibold">Click here to upload</span>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {previews.map((src, idx) => (
            <div
              key={idx}
              className="relative group rounded overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`preview-${idx}`}
                className="h-32 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-lg">
                Preview
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
        >
          Upload
        </button>
      </form>

      {message && (
        <p
          className={`mt-6 text-center font-medium ${
            message.startsWith('✅') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
