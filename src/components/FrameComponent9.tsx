import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./FrameComponent9.css";

const FrameComponent9: FunctionComponent = () => {
  return (
    <section className="assets-list-container-parent">
      <div className="assets-list-container">
        <div className="instance-parent1">
          <div className="vector-group">
            <img
              className="vector-icon"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <div className="instance-child2" />
            <div className="instance-child3" />
            <div className="instance-child4" />
          </div>
          <div className="freepexels-container">
            <h1 className="freepexels1">Freepexels</h1>
          </div>
        </div>
      </div>
      <div className="instance-parent2">
        <div className="asset-category-label-parent">
          <div className="asset-category-label">
            <div className="frame-parent44">
              <div className="assets-group">
                <div className="assets1">Assets</div>
                <div className="frame-child80" />
              </div>
              <div className="search-all-assets1">Search all assets</div>
            </div>
          </div>
          <Button
            className="header-navigation-links"
            startIcon={
              <img width="22px" height="22px" src="/searchnormal.svg" />
            }
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#336aea",
              borderRadius: "5px",
              "&:hover": { background: "#336aea" },
              width: 133,
            }}
          >
            Search
          </Button>
        </div>
        <div className="frame-wrapper9">
          <div className="frame-parent45">
            <div className="pricing-container">
              <div className="pricing4">Pricing</div>
            </div>
            <Button
              className="copyright-info-link"
              startIcon={<img width="22px" height="22px" src="/bag2.svg" />}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#336aea",
                borderRadius: "5px",
                "&:hover": { background: "#336aea" },
                width: 137,
                height: 46,
              }}
            >
              My cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
