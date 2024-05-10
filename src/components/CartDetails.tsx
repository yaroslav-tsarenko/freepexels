import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import CheckoutButton from "./CheckoutButton";
import "./CartDetails.css";

const CartDetails: FunctionComponent = () => {
  return (
    <section className="cart-details1">
      <div className="header-parent">
        <div className="header4">
          <div className="header-child" />
          <b className="product">Product</b>
          <div className="price-wrapper">
            <b className="price">Price</b>
          </div>
          <b className="total">Total</b>
        </div>
        <CheckoutButton productImage="/product-image@2x.png" photo1="Photo 1" />
        <div className="checkout-button1" />
        <CheckoutButton
          productImage="/product-image-1@2x.png"
          photo1="Photo 2"
        />
        <div className="checkout-button2" />
        <CheckoutButton
          productImage="/product-image-2@2x.png"
          photo1="Photo 3"
        />
        <div className="checkout-button3" />
        <div className="button-parent">
          <div className="button3">
            <img
              className="arrow-narrow-right-icon1"
              loading="lazy"
              alt=""
              src="/arrownarrowright.svg"
            />
            <div className="back-wrapper">
              <div className="back1">Back</div>
            </div>
          </div>
          <Button
            className="button4"
            endIcon={
              <img width="24px" height="24px" src="/arrownarrowright-1.svg" />
            }
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#345ded",
              borderRadius: "16px",
              "&:hover": { background: "#345ded" },
              width: 202,
              height: 60,
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
      <div className="checkout-details4">
        <div className="header-wrapper">
          <div className="header5">
            <div className="checkout-details5">Checkout Details</div>
          </div>
        </div>
        <div className="checkout-details-inner2">
          <div className="cart-subtotal-group">
            <div className="cart-subtotal1">Cart Subtotal</div>
            <div className="div5">$360.00</div>
          </div>
        </div>
        <div className="checkout-details-inner3">
          <div className="frame-parent69">
            <div className="shipping-handling-group">
              <div className="shipping-handling1">{`Shipping & Handling`}</div>
              <div className="other-taxes1">Other Taxes</div>
            </div>
            <div className="parent13">
              <div className="div6">$0.00</div>
              <div className="div7">$0.00</div>
            </div>
          </div>
        </div>
        <div className="footer-content-wrapper">
          <div className="footer-content1" />
        </div>
        <div className="checkout-details-inner4">
          <div className="grand-total-group">
            <div className="grand-total1">Grand Total</div>
            <div className="div8">$360.00</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartDetails;
