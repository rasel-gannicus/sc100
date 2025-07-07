"use client";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const AlumniHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const images = [
    "/images/gallery/gallery-1.jpeg",
    "/images/gallery/gallery-2.jpeg",
    "/images/gallery/gallery-3.jpeg",
    "/images/gallery/gallery-4.jpeg",
    "/images/gallery/gallery-5.jpeg",
    "/images/gallery/gallery-6.jpeg",
    "/images/gallery/gallery-7.jpeg",
    "/images/gallery/gallery-8.jpeg",
    "/images/gallery/gallery-9.jpeg",
    "/images/gallery/gallery-10.jpeg",
    "/images/gallery/gallery-11.jpeg",
    "/images/gallery/gallery-12.jpeg",
    "/images/gallery/gallery-13.jpeg",
    "/images/gallery/gallery-14.jpeg",
    "/images/gallery/gallery-15.jpeg",
    "/images/gallery/gallery-16.jpeg",
    "/images/gallery/gallery-17.jpeg",
    "/images/gallery/gallery-18.jpeg",
    "/images/gallery/gallery-19.jpeg",
    "/images/gallery/gallery-20.jpeg",
    "/images/gallery/gallery-21.jpeg",
    "/images/gallery/gallery-22.jpeg",
    "/images/gallery/gallery-23.jpeg",
    "/images/gallery/gallery-24.jpeg",
    "/images/gallery/gallery-25.jpeg",
    "/images/gallery/gallery-26.jpeg",
    "/images/gallery/gallery-27.jpeg",
    "/images/gallery/gallery-28.jpeg",
    "/images/gallery/gallery-29.jpeg",
    "/images/gallery/gallery-30.jpeg",
    "/images/gallery/gallery-31.jpeg",
    "/images/gallery/gallery-32.jpeg",
  ];

  // Convert image paths to objects for lightbox
  const slides = images.map((img) => ({
    src: img,
  }));

  // Get first 12 images or all images based on state
  const displayedImages = showAll ? images : images.slice(0, 12);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={image}
                alt="Alumni meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-full bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center p-4 text-white">
                <h3 className="text-lg font-semibold text-center">
                  শতবর্ষ প্রস্তুতি সভা
                </h3>
              </div>
            </div>
          ))}
        </div>

        {!showAll && images.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors"
            >
              Show All ({images.length - 12} more)
            </button>
          </div>
        )}

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={photoIndex}
        />
      </div>
    </section>
  );
};

export default AlumniHistory;
