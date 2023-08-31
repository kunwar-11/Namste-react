import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *  - Restaurent Cards
 * Footer
 *  - Copyright
 *  - Contact
 *  - Links
 */

//Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="logo-containrer">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-truck-logo-with-red-food-truck-vector-illustration-isolated_9845-157.jpg"
          alt="logo"
        />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </header>
  );
};

const RestuarantCard = () => {
  return (
    <div className="restaurent-card">
      <div className="restaurent-card-image">
        <img
          src="https://b.zmtcdn.com/data/pictures/0/18658840/7c5c527c4de25ce5cb219a18c0e261bd.jpg"
          alt="rest-image"
          className="restaurent-image"
        />
      </div>
      <div className="restaurent-card-body">
        <h3>Te Amo</h3>
        <small>North Indian , South Indian, Chineese , etc</small>
        <div className="restaurent-card-rate-time">
          <h4>
            Ratings <span>4.4</span>
          </h4>
          <h4>30mins</h4>
        </div>
      </div>
    </div>
  );
};

//Body Container

const Body = () => {
  return (
    <main>
      <div className="search-bar">Search</div>
      <div className="restaurant-container">
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
      </div>
    </main>
  );
};

//crerating the Top level component in which all our App will recide

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
