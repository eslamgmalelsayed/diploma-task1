import { useState } from "react";
import Product from "../models/products";
import Btn from "../ui/btn";
import Dialog from "./dialog";
import RatingStars from "./ratingStars";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleAddToCart = () => {
    setIsDialogOpen(true);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <>
      <div className="max-w-sm overflow-hidden shadow-lg bg-white p-4 border border-gray-200 rounded-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-gray-300">
        <div className="relative w-full h-64">
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
          )}
          <img
            className={`w-full h-64 object-contain ${
              imageLoading
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-300"
            }`}
            loading="lazy"
            src={product.thumbnail}
            alt={product.title}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="px-2 py-4">
          <div className="flex justify-between items-center gap-2">
            <span className="font-bold text-xl truncate flex-1">
              {product.title}
            </span>
            <span className="inline-block flex-shrink-0 px-3 py-1 text-xl font-bold">
              {formatPrice(product.price)}
            </span>
          </div>
          <p className="text-gray-700 text-base line-clamp-2 mb-4">
            {product.category}
          </p>
          <p className="text-gray-700 text-base line-clamp-2 mb-2">
            {product.description}
          </p>
          <div className="mb-2">
            <RatingStars rating={Number(product.rating)} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-sm truncate flex-1">
            stock: {product.stock}
          </span>
          {product.availabilityStatus?.toLowerCase() === "low stock" && (
            <span className="inline-block flex-shrink-0 px-3 py-1 text-sm font-semibold rounded-full bg-red-500 text-amber-50">
              {product.availabilityStatus}
            </span>
          )}
        </div>
        <div className="px-2 pt-4 pb-2 w-full">
          <Btn
            label="Add to Cart"
            onClick={handleAddToCart}
            className="w-full"
          />
        </div>
      </div>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
