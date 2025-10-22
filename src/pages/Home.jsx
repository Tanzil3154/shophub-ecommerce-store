import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ShopHub</h1>
          <p className="hero-subtitle">
            Discover amazing products at unbeatable prices
          </p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>On orders over $100</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>100% secure transactions</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Easy Returns</h3>
            <p>30-day return policy</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Quality Products</h3>
            <p>Carefully curated items</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start Shopping Today!</h2>
        <p>Browse our collection of premium products</p>
        <Link to="/products" className="cta-button secondary">
          View All Products
        </Link>
      </section>
    </div>
  );
};

export default Home;
