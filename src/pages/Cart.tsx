import { FunctionComponent } from "react";
import HeaderNav7 from "../components/HeaderNav7";
import CartDetails from "../components/CartDetails";
import Footer1 from "../components/Footer1";
import "./Cart.css";

const Cart: FunctionComponent = () => {
  return (
    <div className="cart">
      <HeaderNav7 />
      <section className="product-credits">
        <h1 className="cart1">Cart</h1>
      </section>
      <CartDetails />
      <Footer1 propMinWidth="723px" />
    </div>
  );
};

export default Cart;
