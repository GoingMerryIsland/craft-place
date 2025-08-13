// components/Tabs.tsx
"use client";

import { useState } from "react";
import CardItem from "./CardItem"; // Pastikan path CardItem sesuai

interface CardItemType {
  imageSrc: string;
  title: string;
  price: string;
  description: string;
}

interface TabsProps {
  items: string[]; // Daftar tab
  defaultActive?: string; // Tab default yang aktif
  cardItems: Record<string, CardItemType[]>; // Data untuk cardItems berdasarkan tab
}

const Tabs = ({ items, defaultActive, cardItems }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActive || items[0]);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="mt-4 mb-4 flex justify-center gap-4">
        {items.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Display CardItems for the active tab */}
      <div className="grid grid-cols-6 md:grid-cols-2 lg:grid-cols-4">
        {cardItems[activeTab]?.map((item, index) => (
          <CardItem
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            price={item.price}
            description={item.description}
            onViewDetails={() => alert("Viewing details of " + item.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
