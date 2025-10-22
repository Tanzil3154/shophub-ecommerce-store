# ShopHub - Modern E-commerce Store

A fully-functional e-commerce website built with React, Vite, Redux Toolkit, and React Router.

## 🚀 Features

- **Product Catalog**: Browse through a curated selection of products
- **Category Filtering**: Filter products by categories (Electronics, Sports, Accessories, Home)
- **Search Functionality**: Search products by name
- **Shopping Cart**: Add, remove, and manage cart items
- **Quantity Management**: Increase/decrease product quantities in cart
- **Checkout Process**: Complete checkout with shipping and payment information
- **Responsive Design**: Mobile-friendly UI that works on all devices
- **Redux State Management**: Centralized state management with Redux Toolkit
- **Modern UI**: Beautiful gradient design with smooth animations

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and development server
- **Redux Toolkit** - State management
- **React Redux** - React bindings for Redux
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern features

## 📦 Installation

1. Clone the repository or navigate to the project folder:

   ```bash
   cd ecommerce-store
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## 🚀 Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:

   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Deploy the project:

   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

## 📁 Project Structure

```
ecommerce-store/
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   └── Cart.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   └── Checkout.jsx
│   ├── store/             # Redux store
│   │   ├── store.js
│   │   └── slices/
│   │       ├── productsSlice.js
│   │       ├── cartSlice.js
│   │       └── userSlice.js
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies
```

## 🎨 Features Overview

### Product Management

- View products with images, descriptions, and ratings
- Filter by category
- Search products by name
- Stock management with low stock indicators

### Shopping Cart

- Add products to cart
- Adjust quantities
- Remove items
- Real-time price calculation
- Free shipping on orders over $100

### Checkout

- Shipping information form
- Payment details form
- Order summary
- Order confirmation

## 🌐 Environment Variables

No environment variables are required for this project as it uses mock data.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

---

Built with ❤️ using React + Vite + Redux
