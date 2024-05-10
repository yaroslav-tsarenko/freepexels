import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./FrameComponent12.css";

const FrameComponent12: FunctionComponent = () => {
  return (
    <section className="frame-parent50">
      <div className="frame-wrapper10">
        <div className="instance-parent3">
          <div className="vector-container">
            <img className="instance-child5" alt="" src="/vector-1.svg" />
            <div className="instance-child6" />
            <div className="instance-child7" />
            <div className="instance-child8" />
          </div>
          <div className="freepexels-frame">
            <h1 className="freepexels2">Freepexels</h1>
          </div>
        </div>
      </div>
      <header className="instance-parent4">
        <div className="frame-parent51">
          <div className="frame-wrapper11">
            <div className="frame-parent52">
              <div className="assets-container">
                <div className="assets2">Assets</div>
                <div className="frame-child81" />
              </div>
              <div className="search-all-assets2">Search all assets</div>
            </div>
          </div>
          <Button
            className="instance-child9"
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
        <div className="frame-wrapper12">
          <div className="frame-parent53">
            <div className="pricing-frame">
              <div className="pricing6">Pricing</div>
            </div>
            <Button
              className="frame-child82"
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
      </header>
    </section>
  );
};

export default FrameComponent12;
