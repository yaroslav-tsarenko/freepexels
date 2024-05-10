import { FunctionComponent } from "react";
import "./CheckoutButton.css";

export type CheckoutButtonType = {
  productImage?: string;
  photo1?: string;
};

const CheckoutButton: FunctionComponent<CheckoutButtonType> = ({
  productImage,
  photo1,
}) => {
  return (
    <div className="checkout-button">
      <img
        className="product-image-icon"
        loading="lazy"
        alt=""
        src={productImage}
      />
      <div className="photo-1-wrapper">
        <div className="photo-1">{photo1}</div>
      </div>
      <div className="back-button-wrapper">
        <div className="back-button">
          <div className="product-info">$120.00</div>
          <div className="credits2">12 Credits</div>
        </div>
      </div>
      <div className="wrapper">
        <div className="div4">$120.00</div>
      </div>
    </div>
  );
};

export default CheckoutButton;
