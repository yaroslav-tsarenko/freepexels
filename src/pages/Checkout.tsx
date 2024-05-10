import { FunctionComponent } from "react";
import HeaderNav from "../components/HeaderNav";
import RowBlockContainer from "../components/RowBlockContainer";
import FrameComponent17 from "../components/FrameComponent17";
import Footer from "../components/Footer";
import "./Checkout.css";

const Checkout: FunctionComponent = () => {
  return (
    <div className="checkout">
      <HeaderNav />
      <section className="checkout-wrapper">
        <h1 className="checkout1">Checkout</h1>
      </section>
      <form className="cart-details">
        <RowBlockContainer />
        <FrameComponent17 />
      </form>
      <Footer groupDivMinWidth="723px" />
    </div>
  );
};

export default Checkout;
