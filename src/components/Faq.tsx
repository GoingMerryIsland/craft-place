// components/FaqAccordion.tsx
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const Faq = ({ items }: FaqAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <div className="flex justify-between items-center py-4">
            <h3 className="text-lg font-medium">{item.question}</h3>
            <button
              onClick={() => toggleAccordion(index)}
              className="text-xl font-semibold text-blue-500"
            >
              {activeIndex === index ? "−" : "+"}
            </button>
          </div>
          {activeIndex === index && (
            <div className="py-2 text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
