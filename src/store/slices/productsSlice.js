import { createSlice } from "@reduxjs/toolkit";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "Premium wireless headphones with noise cancellation",
    rating: 4.5,
    stock: 15,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Feature-rich smartwatch with fitness tracking",
    rating: 4.7,
    stock: 8,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Comfortable running shoes for all terrains",
    rating: 4.3,
    stock: 20,
  },
  {
    id: 4,
    name: "Backpack",
    price: 49.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description: "Durable backpack with multiple compartments",
    rating: 4.6,
    stock: 12,
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 129.99,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    description: "Programmable coffee maker with thermal carafe",
    rating: 4.4,
    stock: 6,
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 29.99,
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    description: "Non-slip yoga mat with carrying strap",
    rating: 4.8,
    stock: 25,
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 39.99,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description: "LED desk lamp with adjustable brightness",
    rating: 4.2,
    stock: 18,
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 59.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    description: "UV protection sunglasses with polarized lenses",
    rating: 4.5,
    stock: 30,
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: initialProducts,
    filteredItems: initialProducts,
    categories: ["All", "Electronics", "Sports", "Accessories", "Home"],
    selectedCategory: "All",
    searchQuery: "",
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;
      if (action.payload === "All") {
        state.filteredItems = state.items.filter((item) =>
          item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      } else {
        state.filteredItems = state.items.filter(
          (item) =>
            item.category === action.payload &&
            item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
    },
    searchProducts: (state, action) => {
      state.searchQuery = action.payload;
      const query = action.payload.toLowerCase();
      if (state.selectedCategory === "All") {
        state.filteredItems = state.items.filter((item) =>
          item.name.toLowerCase().includes(query)
        );
      } else {
        state.filteredItems = state.items.filter(
          (item) =>
            item.category === state.selectedCategory &&
            item.name.toLowerCase().includes(query)
        );
      }
    },
    updateStock: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        product.stock -= quantity;
      }
    },
  },
});

export const { filterByCategory, searchProducts, updateStock } =
  productsSlice.actions;
export default productsSlice.reducer;
