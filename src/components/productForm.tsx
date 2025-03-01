import { useState, FormEvent } from "react";
import Product from "../models/products";
import { showToast } from "../utils/toast";

interface ProductFormProps {
  product: Partial<Product>;
}

const baseInputClasses = `
  mt-1 block w-full rounded-md border border-gray-300 
  px-3 py-2 focus:border-2 focus:border-indigo-500 
  focus:outline-none sm:text-sm
  [&:user-invalid]:border-red-500
  [&:user-invalid]:focus:border-red-500
  [&:user-invalid]:focus:ring-red-500
`;

const numberInputClasses = `
  ${baseInputClasses}
  [appearance:textfield] 
  [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none
`;

const ProductForm = ({ product }: ProductFormProps) => {
  const [formData, setFormData] = useState({
    title: product.title ?? "",
    description: product.description ?? "",
    category: product.category ?? "",
    price: product.price ?? 0,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = e.currentTarget.checkValidity();
    if (!isValid) {
      showToast.error("Please fill out all required fields.");
      return;
    }
    console.log("Form Data submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      id="product-form"
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={baseInputClasses}
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className={baseInputClasses}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={baseInputClasses}
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
              min="0"
              className={numberInputClasses}
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
