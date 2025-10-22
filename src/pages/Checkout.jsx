import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/slices/cartSlice";
import { addOrder } from "../store/slices/userSlice";
import "./Checkout.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const shipping = totalAmount > 100 ? 0 : 9.99;
    const tax = totalAmount * 0.1;
    const orderTotal = totalAmount + shipping + tax;

    const order = {
      id: Date.now(),
      items,
      totalAmount: orderTotal,
      date: new Date().toISOString(),
      customerInfo: {
        fullName: formData.fullName,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode,
      },
    };

    dispatch(addOrder(order));
    dispatch(clearCart());
    setOrderPlaced(true);

    setTimeout(() => {
      navigate("/profile");
    }, 3000);
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="empty-checkout">
        <h2>Your cart is empty</h2>
        <button
          className="back-to-shop-btn"
          onClick={() => navigate("/products")}
        >
          Back to Shopping
        </button>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-icon">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p>
          Thank you for your purchase. You will be redirected to the home page.
        </p>
      </div>
    );
  }

  const shipping = totalAmount > 100 ? 0 : 9.99;
  const tax = totalAmount * 0.1;
  const total = totalAmount + shipping + tax;

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-content">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Shipping Information</h3>

            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Zip Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Payment Information</h3>

            <div className="form-group">
              <label>Card Number *</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date *</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div className="form-group">
                <label>CVV *</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>

        <div className="order-summary-checkout">
          <h3>Order Summary</h3>

          <div className="order-items">
            {items.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div className="order-item-info">
                  <p className="order-item-name">{item.name}</p>
                  <p className="order-item-quantity">Qty: {item.quantity}</p>
                </div>
                <p className="order-item-price">
                  ${item.totalPrice.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
