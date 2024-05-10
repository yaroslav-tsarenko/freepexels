import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./FrameComponent2.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <header className="frame-header">
      <div className="frame-wrapper3">
        <div className="instance-parent">
          <div className="vector-parent">
            <img
              className="instance-child"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <div className="instance-item" />
            <div className="instance-inner" />
            <div className="rectangle-div" />
          </div>
          <div className="freepexels-wrapper">
            <h1 className="freepexels">Freepexels</h1>
          </div>
        </div>
      </div>
      <div className="instance-group">
        <div className="frame-parent23">
          <div className="frame-wrapper4">
            <div className="frame-parent24">
              <div className="assets-parent">
                <div className="assets">Assets</div>
                <div className="line-div" />
              </div>
              <div className="search-all-assets">Search all assets</div>
            </div>
          </div>
          <Button
            className="instance-child1"
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
        <div className="frame-wrapper5">
          <div className="frame-parent25">
            <div className="pricing-wrapper">
              <div className="pricing1">Pricing</div>
            </div>
            <Button
              className="frame-child64"
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
    </header>
  );
};

export default FrameComponent2;
