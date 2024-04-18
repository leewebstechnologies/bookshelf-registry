import "./navbar.css";
import logo from "../../images/1.png";

const Navbar = () => {
  return (
    <header>
      <div className="brand">
        <img className="logo" src={logo} alt="logo" />
        <h3>Book Registry</h3>
      </div>
    </header>
  );
};
export default Navbar;
