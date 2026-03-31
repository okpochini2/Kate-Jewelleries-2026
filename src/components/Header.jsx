import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import openIcon from "../assets/toggle-open.png";
import closeIcon from "../assets/toggle-close.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="left">
      <img src={logo} className="logo" />
      <span className="brand">KATE UJC</span>
      </div>
     
      <img 
      src={open ? closeIcon : openIcon}
      className="toggle"
      onClick={() => setOpen(!open)}
      />
      
      <nav className={open ? "nav open" : "nav"}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setOpen(false)}>Product</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;