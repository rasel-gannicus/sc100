'use client';
import { useEffect, useState } from 'react';

export default function ViewGallery() {
  const [images, setImages] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null); // For single delete
  const [selectedIds, setSelectedIds] = useState([]); // For multiple delete
  const [showMultiDeleteModal, setShowMultiDeleteModal] = useState(false);

  const fetchImages = async (page = 1) => {
    setLoading(true);
    const res = await fetch(`http://localhost:8000/api/gallery/images?page=${page}`);
    const data = await res.json();
    setImages(data.data);
    setMeta(data.meta);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const toggleCheckbox = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSingleDelete = async () => {
    const res = await fetch(`http://localhost:8000/api/images/${deleteId}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      setImages((prev) => prev.filter((img) => img.id !== deleteId));
      setDeleteId(null);
    }
  };

  const handleMultiDelete = async () => {
    console.log('Sending IDs:', selectedIds);
    const res = await fetch('http://localhost:8000/api/gallery/delete-multiple', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: selectedIds }),
    });
  
    if (res.ok) {
      setImages((prev) => prev.filter((img) => !selectedIds.includes(img.id)));
      setSelectedIds([]);
      setShowMultiDeleteModal(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📸 Uploaded Images</h2>
        {selectedIds.length > 0 && (
          <button
            onClick={() => setShowMultiDeleteModal(true)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete Selected ({selectedIds.length})
          </button>
        )}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img.id} className="relative border rounded p-2 group">
                <input
                  type="checkbox"
                  className="absolute top-2 left-2 w-4 h-4"
                  checked={selectedIds.includes(img.id)}
                  onChange={() => toggleCheckbox(img.id)}
                />
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

      {/* Single Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-xl w-80 text-center">
            <p className="text-lg mb-4">Are you sure you want to delete this image?</p>
            <div className="flex justify-between">
              <button
                onClick={handleSingleDelete}
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

      {/* Multi Delete Modal */}
      {showMultiDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-xl w-80 text-center">
            <p className="text-lg mb-4">
              Are you sure you want to delete{' '}
              <strong>{selectedIds.length}</strong> image(s)?
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleMultiDelete}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Yes, Delete All
              </button>
              <button
                onClick={() => setShowMultiDeleteModal(false)}
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
