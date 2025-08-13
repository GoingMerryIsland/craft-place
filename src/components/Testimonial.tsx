import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

interface Testimonial {
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  testimonialText: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Communicative",
    description: "I'm great at explaining things.",
    imageUrl: "/avatar/img-1.jpg", // Ganti dengan URL gambar yang sesuai
    rating: 5,
    testimonialText:
      "I'm great at explaining things in a way that's easy to understand. If something is complicated, I'll break it down clearly and simply so everyone can get it, no matter how difficult the topic.",
  },
  {
    name: "Collaborative",
    description: "I love working in teams.",
    imageUrl: "/avatar/img-2.jpg", // Ganti dengan URL gambar yang sesuai
    rating: 4,
    testimonialText:
      "I thrive in collaborative environments, where I can work with others to solve complex problems. Teamwork is key to success.",
  },
  {
    name: "Analytical",
    description: "I'm good at breaking down complex data.",
    imageUrl: "/avatar/img-3.jpg", // Ganti dengan URL gambar yang sesuai
    rating: 3,
    testimonialText:
      "I enjoy working with data, analyzing it to identify patterns, and creating solutions based on insights.",
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div>
      {/* Testimonial Content */}
      <div className="bg-white rounded-lg border border-gray-300 p-6">
        <div className="flex flex-col justify-normal">
          <div className="text-4xl mb-4 font-bold text-zinc-700">
            {currentTestimonial.rating}/5
          </div>
          <p className="text-md text-gray-500 mb-4 text-justify">
            {currentTestimonial.testimonialText}
          </p>

          <div className="flex items-center pt-2 border-t-1 border-gray-300 ">
            <Image
              src={currentTestimonial.imageUrl}
              alt={currentTestimonial.name}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div>
              <div className="font-semibold text-lg">
                {currentTestimonial.name}
              </div>
              <p className="text-sm text-gray-500">
                {currentTestimonial.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-end mt-4">
        <button
          onClick={prevTestimonial}
          className="text-2xl text-gray-500 items-center hover:text-blue-700 pt-4 pb-4 pl-4 pr-4 bg-gray-200 rounded-full mr-2"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextTestimonial}
          className="text-2xl text-gray-500 items-center  hover:text-blue-700 pt-4 pb-4 pl-4 pr-4 bg-gray-200 rounded-full mr-2"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
