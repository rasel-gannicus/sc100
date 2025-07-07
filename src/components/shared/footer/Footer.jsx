import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={30}
                className="h-40 w-auto"
              />
            </Link>
            <p className="text-xs text-gray-300">
              স্বরূপচন্দ্র সরকারী উচ্চ বিদ্যালয়ের প্রাক্তন শিক্ষার্থীদের
              উদ্যোগে শতবর্ষ-২০২৬ উদযাপন
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                <FaTwitter size={16} />
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                <FaInstagram size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-500 text-base font-semibold mb-3">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/registration"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Registration Team
                </Link>
              </li>
              <li>
                <Link
                  href="/constitution"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Constitution
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-yellow-500 text-base font-semibold mb-3">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>স্বরূপচন্দ্র সরকারি উচ্চ বিদ্যালয়</li>
              <li>
                <Link
                  href="mailto:info@demo.com"
                  className="hover:text-yellow-500 transition-colors"
                >
                  ঠিকানা: ডাকঘর: জগন্নাথপুর, উপজেলা: জগন্নাথপুর, জেলা: সুনামগঞ্জ।
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-yellow-500 transition-colors"
                >
                  বিদ্যালয় কোড: ২৫৫০
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-yellow-500 transition-colors"
                >
                  EIIN নম্বর: 129939
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <p className="text-center text-xs text-gray-400">
            © 2023 All Rights Reserved by Sharupchandra Pilot High School
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
