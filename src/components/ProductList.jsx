import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
  searchProducts,
} from "../store/slices/productsSlice";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import ProductModal from "./ProductModal";

const ProductList = () => {
  const dispatch = useDispatch();
  const { filteredItems, categories, selectedCategory, searchQuery } =
    useSelector((state) => state.products);

  const handleCategoryChange = (category) => {
    dispatch(filterByCategory(category));
  };

  const handleSearch = (e) => {
    dispatch(searchProducts(e.target.value));
  };

  const [modalProduct, setModalProduct] = useState(null);

  return (
    <div className="product-list-container">
      <div className="filter-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={(p) => setModalProduct(p)}
            />
          ))
        ) : (
          <div className="no-products">
            <p>No products found</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </div>
  );
};

export default ProductList;
