// components/CardItem.tsx
import Image from "next/image";

interface CardItemProps {
  imageSrc: string;
  title: string;
  price: string;
  description: string;
  onViewDetails?: () => void;
}

const CardItem = ({
  imageSrc,
  title,
  price,
  description,
  onViewDetails,
}: CardItemProps) => {
  return (
    <div className="w-full flex flex-col border border-gray-200 border-r-1 border-b-1 border-dashed overflow-hidden">
      {/* Image */}
      <div className="relative m-4 rounded-md overflow-hidden h-59">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      {/* Text Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-gray-800 font-medium">{title}</h3>
          <span className="text-green-600 font-semibold">{price}</span>
        </div>

        <p className="text-sm text-gray-600 flex-grow">{description}</p>

        {/* Button */}
        <button
          onClick={onViewDetails}
          className="mt-4 w-full bg-black text-white py-2 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardItem;
