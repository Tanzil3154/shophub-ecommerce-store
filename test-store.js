// Quick Test Script - Run this in the browser console to test Redux store

// Test 1: Check initial state
console.log("=== Initial Store State ===");
console.log("Products:", store.getState().products.items.length);
console.log("Cart Items:", store.getState().cart.items.length);
console.log("Total Amount:", store.getState().cart.totalAmount);

// Test 2: Add product to cart
console.log("\n=== Adding Product to Cart ===");
store.dispatch({
  type: "cart/addToCart",
  payload: store.getState().products.items[0],
});
console.log("Cart Items:", store.getState().cart.items.length);
console.log("Total Quantity:", store.getState().cart.totalQuantity);
console.log("Total Amount:", store.getState().cart.totalAmount);

// Test 3: Filter by category
console.log("\n=== Filtering by Electronics ===");
store.dispatch({ type: "products/filterByCategory", payload: "Electronics" });
console.log(
  "Filtered Products:",
  store.getState().products.filteredItems.length
);

// Test 4: Search products
console.log('\n=== Searching for "watch" ===');
store.dispatch({ type: "products/searchProducts", payload: "watch" });
console.log("Search Results:", store.getState().products.filteredItems.length);

console.log("\n=== All Tests Complete ✓ ===");
