//Header Component
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <header className="header">
      <div className="logo-containrer">
        <img className="logo" src={LOGO_URL} alt="logo" />
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

export default Header;
