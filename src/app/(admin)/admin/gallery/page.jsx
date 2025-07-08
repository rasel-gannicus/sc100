'use client';
import { useState } from 'react';

export default function ImageUploadPage() {
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
      const res = await fetch('http://localhost:8000/api/upload-images', {
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
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Multiple Images</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />

        <div className="grid grid-cols-3 gap-4 mt-4">
          {previews.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`preview-${idx}`}
              className="h-32 w-full object-cover rounded border"
            />
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded mt-4"
        >
          Upload
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
