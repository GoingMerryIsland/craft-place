// src/app/category/[slug]/page.tsx
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: Props) {
  const currentCategory =
    categories.find(
      (cat) =>
        cat.toLowerCase().replace(/\s+/g, "-") === params.slug.toLowerCase()
    ) || "All Creatives";

  const filteredProducts =
    currentCategory === "All Creatives"
      ? products
      : products.filter((p) => p.category === currentCategory);

  return (
    <main className="container mx-auto min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header with categories */}
        <div className="flex flex-wrap gap-4 mb-6">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-2 border rounded-md hover:bg-gray-100 ${
                currentCategory === cat ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((p, i) => (
            <ProductCard
              key={i}
              title={p.title}
              image={p.image}
              category={p.category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
