import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";
import "./ProductCard.css";

const ProductCard = ({ product, onView }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {onView ? (
          <button
            className="image-button"
            onClick={() => onView(product)}
            aria-label={`View ${product.name}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </button>
        ) : (
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </Link>
        )}
        {product.stock < 5 && product.stock > 0 && (
          <span className="low-stock-badge">Only {product.stock} left!</span>
        )}
        {product.stock === 0 && (
          <span className="out-of-stock-badge">Out of Stock</span>
        )}
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">
          {onView ? (
            <button className="name-button" onClick={() => onView(product)}>
              {product.name}
            </button>
          ) : (
            <Link to={`/products/${product.id}`} className="product-link">
              {product.name}
            </Link>
          )}
        </h3>
        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
          <span className="rating-value">{product.rating}</span>
        </div>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
