import AlumniHistory from "../../_container/AlumniHistory";

export default function GalleryContainer() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black min-h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center gap-3 justify-center pt-44 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            শতবর্ষ উদযাপন-২০২৫
          </h1>
          <h1 className="text-2xl md:text-2xl text-center max-w-2xl  text-white">
            বুড়িচং আনন্দ পাইলট সরকারী উচ্চ বিদ্যালয়ের প্রাক্তন শিক্ষার্থীদের
            উদ্যোগে শতবর্ষ-২০২৫ উদযাপন অনুষ্ঠানের কিছু স্থিরচিত্র
          </h1>
        </div>
      </div>
      <div className="py-20">
        <AlumniHistory />
      </div>
    </>
  );
}
