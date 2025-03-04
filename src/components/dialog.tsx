import { XMarkIcon } from "@heroicons/react/24/outline";
import Product from "@/models/products";
import ProductForm from "./productForm";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const Dialog = ({ isOpen, onClose, product }: DialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Product</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        <ProductForm product={product} />

        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="product-form"
            className="bg-black hover:bg-white hover:text-black border cursor-pointer text-white font-bold py-2 px-4 rounded inline-flex items-center gap-2 transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
