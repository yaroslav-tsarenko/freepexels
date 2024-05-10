import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import HeaderNav1 from "../components/HeaderNav1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Footer1 from "../components/Footer1";
import "./ProductDetails.css";

const ProductDetails: FunctionComponent = () => {
  return (
    <div className="product-details">
      <HeaderNav1 />
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="frame-parent">
        <div className="ready-for-100-daily-downloads-wrapper">
          <div className="ready-for-100">
            Ready for 100 Daily downloads, innovative AI tools and endless
            content?
          </div>
        </div>
        <Button
          className="frame-child"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#336aea",
            borderRadius: "5px",
            "&:hover": { background: "#336aea" },
            width: 140,
            height: 46,
          }}
        >
          Go Premium
        </Button>
      </div>
      <FrameComponent1 />
      <section className="frame-group">
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/frame-109@2x.png"
        />
        <img
          className="frame-inner"
          loading="lazy"
          alt=""
          src="/frame-110@2x.png"
        />
        <img
          className="frame-icon"
          loading="lazy"
          alt=""
          src="/frame-111@2x.png"
        />
        <img
          className="frame-child1"
          loading="lazy"
          alt=""
          src="/frame-112@2x.png"
        />
        <img
          className="frame-child2"
          loading="lazy"
          alt=""
          src="/frame-113@2x.png"
        />
        <img
          className="frame-child3"
          loading="lazy"
          alt=""
          src="/frame-114@2x.png"
        />
      </section>
      <Footer1 />
    </div>
  );
};

export default ProductDetails;
