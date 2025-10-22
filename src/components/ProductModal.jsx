import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import "./ProductCard.css";
import "./ProductList.css";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  const dispatch = useDispatch();

  if (!product) return null;

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch(addToCart(product));
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="modal-category">{product.category}</p>
            <p className="modal-description">{product.description}</p>
            <div className="modal-rating">
              {"\u2605".repeat(Math.floor(product.rating))}
              {"\u2606".repeat(5 - Math.floor(product.rating))}
              <span className="rating-value">{product.rating}</span>
            </div>

            <div className="modal-footer">
              <span className="modal-price">${product.price.toFixed(2)}</span>
              <button
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>

            <p className="stock-info">{product.stock} in stock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
