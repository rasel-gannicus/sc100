'use client';
import { useEffect, useState } from 'react';

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null); // for modal

  const fetchImages = async (page = 1) => {
    setLoading(true);
    const res = await fetch(`http://localhost:8000/api/images?page=${page}`);
    const data = await res.json();
    setImages(data.data);
    setMeta(data.meta);
    setLoading(false);
  };

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/api/images/${deleteId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setImages((prev) => prev.filter((img) => img.id !== deleteId));
      setDeleteId(null);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📸 Uploaded Images</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4">
            {images.map((img) => (
              <div key={img.id} className="border rounded p-2 relative group">
                <img
                  src={`http://localhost:8000/uploads/${img.image}`}
                  alt=""
                  className="w-full h-40 object-cover rounded"
                />
                <button
                  onClick={() => setDeleteId(img.id)}
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm rounded hidden group-hover:block"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {meta &&
              Array.from({ length: meta.last_page }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => fetchImages(page)}
                    className={`px-3 py-1 rounded ${
                      meta.current_page === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
          </div>
        </>
      )}

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-xl w-80 text-center">
            <p className="text-lg mb-4">Are you sure you want to delete this image?</p>
            <div className="flex justify-between">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
