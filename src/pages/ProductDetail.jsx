import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";
import "./Checkout.css";
import "./Home.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.items.find((p) => String(p.id) === String(id))
  );

  if (!product) {
    return (
      <div className="product-detail not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch(addToCart(product));
      navigate("/cart");
    }
  };

  return (
    <div className="product-detail">
      <div className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <h2>{product.name}</h2>
          <p className="detail-category">Category: {product.category}</p>
          <p className="detail-description">{product.description}</p>
          <div className="detail-rating">
            {"\u2605".repeat(Math.floor(product.rating))}
            {"\u2606".repeat(5 - Math.floor(product.rating))}
            <span className="rating-value">{product.rating}</span>
          </div>

          <div className="detail-footer">
            <span className="detail-price">${product.price.toFixed(2)}</span>
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>

          <p className="stock-info">{product.stock} in stock</p>
          <button className="back-btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
