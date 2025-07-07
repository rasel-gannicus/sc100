import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { IoImagesOutline } from "react-icons/io5";
import { MdAppRegistration } from "react-icons/md";

const Banner = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            শতবর্ষ উদযাপন-২০২৬
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            স্বরূপচন্দ্র সরকারী উচ্চ বিদ্যালয়ের প্রাক্তন শিক্ষার্থীদের উদ্যোগে
            শতবর্ষ-২০২৬ উদযাপন
          </p>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          {/* Batch Profile Box */}
          <Link
            href="/batch-profile"
            className="bg-black/50 p-6 rounded-lg border border-yellow-500 hover:bg-black/60 transition duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="text-yellow-500 text-3xl">
                <FaUsers />
              </div>
              <h3 className="text-white text-lg font-semibold">
                Batch-wise profile view of registered students.
              </h3>
              <span className="text-yellow-500 text-sm">Batch Profile →</span>
            </div>
          </Link>

          {/* Gallery Box */}
          <Link
            href="/gallery"
            className="bg-black/50 p-6 rounded-lg border border-yellow-500 hover:bg-black/60 transition duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="text-yellow-500 text-3xl">
                <IoImagesOutline />
              </div>
              <h3 className="text-white text-lg font-semibold">
                Images view of century anniversary program.
              </h3>
              <span className="text-yellow-500 text-sm">GALLERY →</span>
            </div>
          </Link>

          {/* Registration Box */}
          <Link
            href="/registration"
            className="bg-black/50 p-6 rounded-lg border border-yellow-500 hover:bg-black/60 transition duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="text-yellow-500 text-3xl">
                <MdAppRegistration />
              </div>
              <h3 className="text-white text-lg font-semibold">
                How to registration of anniversary program
              </h3>
              <span className="text-yellow-500 text-sm">
                Registration Process →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
