import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Home() {
  return (
    <div className="page home">
      <img src={logo} className="big-logo" alt="" />

      <h1>KATE UNISEX JEWELLERIES COLLECTION</h1>

      <Link to="/products">
        <button className="btn">Get Started</button>
      </Link>
    </div>
  );
}

export default Home;