"use client" ;
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from 'react';

const AlumniHistory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        '/images/mm1.jpg',
        '/images/mm3.jpg',
        '/images/mm4.jpg',
        '/images/nn4.jpg',
        '/images/nn1.jpg',
        '/images/nn2.jpg',
        '/images/nn3.jpg',
        '/images/nn4.jpg',
    ];

    // Convert image paths to objects for lightbox
    const slides = images.map((img) => ({
        src: img,
    }));

    return (
        <section className="py-10">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
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
                                <h3 className="text-lg font-semibold text-center">শতবর্ষ প্রস্তুতি সভা</h3>
                            </div>
                        </div>
                    ))}
                </div>

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