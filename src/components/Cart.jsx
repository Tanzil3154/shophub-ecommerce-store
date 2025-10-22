import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/slices/cartSlice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some products to get started!</p>
        <button
          className="continue-shopping-btn"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart ({totalQuantity} items)</h2>
        <button className="clear-cart-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-price">${item.price.toFixed(2)} each</p>
              </div>

              <div className="cart-item-quantity">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>

              <div className="cart-item-total">
                ${item.totalPrice.toFixed(2)}
              </div>

              <button
                className="remove-btn"
                onClick={() => handleRemove(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping:</span>
            <span>${totalAmount > 100 ? "0.00" : "9.99"}</span>
          </div>

          <div className="summary-row">
            <span>Tax (10%):</span>
            <span>${(totalAmount * 0.1).toFixed(2)}</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row total">
            <span>Total:</span>
            <span>
              $
              {(
                totalAmount +
                (totalAmount > 100 ? 0 : 9.99) +
                totalAmount * 0.1
              ).toFixed(2)}
            </span>
          </div>

          {totalAmount > 100 && (
            <div className="free-shipping-badge">🎉 You got free shipping!</div>
          )}

          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>

          <button
            className="continue-shopping-btn"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
