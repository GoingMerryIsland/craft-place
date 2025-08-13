"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Tabs from "@/components/Tabs";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";

const brands = [
  { src: "/brand/dropbox.png", alt: "Dropbox" },
  { src: "/brand/spotify.png", alt: "Spotify" },
  { src: "/brand/amazon.png", alt: "Amazon" },
  { src: "/brand/slack.png", alt: "Slack" },
  { src: "/brand/netflix.png", alt: "Netflix" },
  { src: "/brand/shopify.png", alt: "Shopify" },
];

const services = [
  {
    title: "Website Creatives",
    image: "/services/website.gif",
    link: "/category",
  },
  {
    title: "App Creatives",
    image: "/services/app.gif",
    link: "/category",
  },
  {
    title: "Branding Creatives",
    image: "/services/branding.gif",
    link: "/category",
  },
  {
    title: "Dashboard Creatives",
    image: "/services/dashboard.gif",
    link: "/category",
  },
];

const cardData = {
  "Category 1": [
    {
      imageSrc: "/product/image-1.jpg",
      title: "Item 1",
      price: "$10",
      description: "Deskripsi singkat tentang item 1",
    },
    {
      imageSrc: "/product/image-2.jpg",
      title: "Item 2",
      price: "$20",
      description: "Deskripsi singkat tentang item 2",
    },
    {
      imageSrc: "/product/image-1.jpg",
      title: "Item 2",
      price: "$20",
      description: "Deskripsi singkat tentang item 2",
    },
    {
      imageSrc: "/product/image-2.jpg",
      title: "Item 2",
      price: "$20",
      description: "Deskripsi singkat tentang item 2",
    },
    {
      imageSrc: "/product/image-1.jpg",
      title: "Item 2",
      price: "$20",
      description: "Deskripsi singkat tentang item 2",
    },
  ],

  "Category 2": [
    {
      imageSrc: "/product/image-1.jpg",
      title: "Item 3",
      price: "$15",
      description: "Deskripsi singkat tentang item 3",
    },
    {
      imageSrc: "/product/image-2.jpg",
      title: "Item 4",
      price: "$25",
      description: "Deskripsi singkat tentang item 4",
    },
  ],

  "Category 3": [
    {
      imageSrc: "/product/image-2.jpg",
      title: "Item 5",
      price: "$15",
      description: "Deskripsi singkat tentang item 3",
    },
    {
      imageSrc: "/product/image-1.jpg",
      title: "Item 6",
      price: "$25",
      description: "Deskripsi singkat tentang item 4",
    },
  ],
  "Category 4": [
    {
      imageSrc: "/product/image-2.jpg",
      title: "Item 7",
      price: "$15",
      description: "Deskripsi singkat tentang item 3",
    },
    {
      imageSrc: "/product/image-1.jpg",
      title: "Item 8",
      price: "$25",
      description: "Deskripsi singkat tentang item 4",
    },
  ],
};

const faqs = [
  {
    question: "Can I update the site myself after it’s done?",
    answer:
      "Yes. I build everything in Framer, which makes it easy for your team to edit text, images, and sections without coding.",
  },
  {
    question: "Do you offer just design, or full development too?",
    answer: "We offer both design and full development services.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "We'll need your project requirements, brand guidelines, and any content you'd like to include.",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto w-full min-h-screen slash-border bg-white">
      {/* Badge Section */}
      <section className=" bg-white flex justify-center items-center mx-8 border-b border-dashed border-gray-300">
        <div className="mt-8 mb-8">
          <div className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            100+ Creatives Available
          </div>
        </div>
      </section>

      {/* Heading */}
      <section className=" bg-white flex justify-center items-center mx-8 border-b border-dashed border-gray-300">
        <div className="mt-8 mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Empower Your Vision with <br />
            Creative Digital Solutions
          </h1>
        </div>
      </section>

      {/* Subheading & Button */}
      <section className=" bg-white flex justify-center items-center mx-8 border-b border-gray-300">
        <div className="mt-8 mb-8 flex flex-col justify-center items-center">
          <p className="max-w-xl text-center text-gray-500">
            Explore templates, apps, branding assets, and request custom
            projects meticulously tailored to meet your needs.
          </p>
          <button className="mt-6 rounded-md bg-gray-900 px-5 py-2 text-white hover:bg-gray-800">
            Browse Products
          </button>
        </div>
      </section>

      {/*heading */}
      <section className=" bg-white flex justify-center items-center mx-8 border-b border-gray-300">
        <div className="mt-8 mb-8 flex flex-col justify-center items-center">
          <h2 className="font-bold text-gray-900 sm:text-2xl ">
            Trusted by Industry Leaders Worldwide
          </h2>
        </div>
      </section>

      {/* Brand Logos */}
      <section className=" bg-white flex justify-between items-center mx-8">
        <div className="grid grid-cols-6 divide-x divide-gray-300">
          {brands.map((brand) => (
            <div key={brand.alt} className="flex justify-center items-center">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={121}
                height={48}
                className="object-contain mr-16 ml-16 mt-4 mb-4"
              />
            </div>
          ))}
        </div>
      </section>

      {/*heading categories */}
      <section className=" bg-white flex justify-center items-center mx-8 border-t border-gray-300">
        <div className="mt-8 mb-8 gap-2 flex flex-col justify-center items-center">
          <h2 className="font-bold text-gray-900 sm:text-2xl ">
            Explore Our Categories
          </h2>
          <p className="max-w-xl text-center text-gray-500">
            All Access, Forever Yours.
          </p>
        </div>
      </section>

      {/*categories */}
      <section className="bg-gray-50 py-12 mx-8 border-t border-gray-300 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 border border-gray-200 rounded-lg overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 p-6 border-r border-gray-200 last:border-r-0 bg-white"
            >
              {/* Gambar */}
              <Image
                src={service.image}
                alt={service.title}
                width={120}
                height={120}
                className="object-contain"
              />

              {/* Title + Arrow sebagai button */}
              <Link
                href={service.link}
                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition"
              >
                {service.title}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/*products*/}
      <section className=" bg-white flex flex-col justify-center items-center mx-8 border-b border-t border-gray-300">
        <div className="mt-8 mb-2 gap-2 flex flex-col justify-center items-center">
          <h2 className="font-bold text-gray-900 sm:text-2xl ">
            Explore Our Creatives
          </h2>
          <p className="max-w-xl text-center text-gray-500">
            Browse premium digital products designed to inspire and elevate your
            projects.
          </p>
        </div>
        <div className="mt-2 mb-8 flex flex-col justify-center items-center w-full">
          <Tabs
            items={["Category 1", "Category 2", "Category 3", "Category 4"]} // Nama-nama kategori untuk tab
            cardItems={cardData} // Data card untuk tiap kategori
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className=" bg-white justify-center items-center mx-8">
        <div className="grid grid-cols-2">
          <div className="p-10">
            <h2 className="font-bold text-gray-900 sm:text-2xl pb-4 ">
              Stories That Speak for themselves.
            </h2>
            <p className="max-w-xl justify-left text-gray-500">
              These testimonials are a true testament to the trust built through
              long-term partnerships with us. They are clients who have directly
              benefited from our services and continue to rely on us for their
              needs. Join the many who have achieved success with us and
              experience the difference.
            </p>
          </div>

          <div className="p-10 gap-2">
            <Testimonial />
          </div>
        </div>
      </section>

      {/*heading categories */}
      <section className=" bg-white flex justify-center items-center mx-8 mt-10 mb-10">
        <div className="mt-8 mb-8 gap-2 flex flex-col justify-center items-center">
          <h2 className="font-bold text-gray-900 sm:text-2xl ">
            Are you Looking for a Custom Creatives?
          </h2>
          <p className="max-w-xl text-center text-gray-500">
            Book a 15 min call with us to discuss your custom project.
          </p>
          <button className="mt-6 rounded-md bg-gray-900 px-5 py-2 text-white hover:bg-gray-800">
            Book Now
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className=" bg-white justify-center items-center mx-8">
        <div className="grid grid-cols-2 ">
          <div className="p-10">
            <div className="mt-4 mb-4">
              <div className="flex items-center w-fit gap-2 rounded-md border border-gray-300 px-3 py-1 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                100+ Creatives Available
              </div>
            </div>
            <h2 className="font-bold text-gray-900 sm:text-2xl pb-4 ">
              Stories That Speak for themselves.
            </h2>
            <p className="max-w-xl justify-left text-gray-500">
              These testimonials are a true testament to the trust built through
              long-term partnerships with us. They are clients who have directly
              benefited from our services and continue to rely on us for their
              needs. Join the many who have achieved success with us and
              experience the difference.
            </p>
          </div>

          <div className="p-10 gap-2">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
