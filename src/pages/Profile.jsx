import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/slices/userSlice";
import "./Profile.css";

const Profile = () => {
  const { isAuthenticated, user, orders } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <h3>Account Information</h3>
          <div className="profile-info">
            <div className="info-row">
              <span className="info-label">Name:</span>
              <span className="info-value">{user?.name}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email:</span>
              <span className="info-value">{user?.email}</span>
            </div>
          </div>

          <button className="logout-profile-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="orders-card">
          <h3>Order History</h3>
          {orders.length > 0 ? (
            <div className="orders-list">
              {orders.map((order, index) => (
                <div key={index} className="order-item">
                  <div className="order-header">
                    <span className="order-id">Order #{index + 1}</span>
                    <span className="order-date">
                      {new Date(order.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="order-items">
                    {order.items.map((item) => (
                      <div key={item.id} className="order-product">
                        <img src={item.image} alt={item.name} />
                        <div className="order-product-info">
                          <p className="order-product-name">{item.name}</p>
                          <p className="order-product-quantity">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="order-product-price">
                          ${item.totalPrice.toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="order-total">
                    <span>Total:</span>
                    <span className="total-amount">
                      ${order.totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-orders">
              <p>No orders yet</p>
              <button
                onClick={() => navigate("/products")}
                className="shop-btn"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
