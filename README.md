# React E-commerce Product Card

A modern React component for displaying product cards with interactive features.

## Demo

🚀 [Live Demo](https://diploama-task1.netlify.app/)

## Features

- 🛍️ Clean and modern product card design
- ⭐ Dynamic rating stars display
- 🏷️ Price formatting with currency
- 📦 Stock status indicator
- 🔄 Smooth hover animations
- 📱 Responsive layout
- 🎨 Tailwind CSS styling
- 🚀 Type-safe with TypeScript

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Hero Icons
- React Hot Toast

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/react-product-card.git

# Navigate to project directory
cd react-product-card

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

## Component Usage

```tsx
import ProductCard from './components/ProductCard';

// Example product data
const product = {
  id: 1,
  title: "Product Title",
  description: "Product Description",
  price: 99.99,
  category: "Electronics",
  rating: 4.5,
  stock: 10,
  availabilityStatus: "in stock",
  thumbnail: "product-image.jpg"
};

// Use the component
<ProductCard product={product} />
```

## Features

### Product Card
- Image display with lazy loading
- Title with truncation
- Price formatting
- Category and description display
- Rating stars
- Stock status indicator
- Add to cart button
- Hover effects

### Dialog
- Edit product details
- Form validation
- Toast notifications
- Responsive design

## Development

```bash
# Run development server
pnpm run dev

# Build for production
pnpm run build

# Run tests
pnpm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
