// components/Footer.tsx
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="grid grid-cols-2 border border-gray-200">
        <div className="p-10 border-r border-gray-300">
          {/* Logo & Deskripsi */}
          <div className="md:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center pb-3">
              <Image
                src="/logo-craft.svg"
                alt="Logo"
                width={60}
                height={30}
                priority
              />
            </Link>
            <p className="text-sm text-gray-500 mb-6">
              Markify is a dynamic digital marketplace designed to help
              creatives showcase and sell their unique products.
            </p>
            <p className="text-xs text-gray-400 mb-4">© 2025 Braydon Coyer</p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <FaEarthAsia size={14} />
              </a>
              <a
                href="#"
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#"
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <FaTiktok size={14} />
              </a>
              <a
                href="#"
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="p-10">
          <div className="flex md:grid-cols-3 gap-16">
            {/* General */}
            <div>
              <h4 className="font-semibold mb-4">General</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="flex items-center">
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Category</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">How is work</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Project Inquiry</a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#">All Creatives</a>
                </li>
                <li>
                  <a href="#">Mobile App</a>
                </li>
                <li>
                  <a href="#">Framer</a>
                </li>
                <li>
                  <a href="#">Branding</a>
                </li>
                <li>
                  <a href="#">Figma</a>
                </li>
                <li>
                  <a href="#">Dashboard</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Testimonial</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 slash-border bg-white"></div>
    </footer>
  );
}
