import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./FrameComponent15.css";

const FrameComponent15: FunctionComponent = () => {
  return (
    <section className="text-parent">
      <div className="text" />
      <div className="instance-wrapper">
        <div className="frame-parent60">
          <div className="rectangle-wrapper">
            <div className="frame-child103" />
          </div>
          <div className="rectangle-parent">
            <div className="frame-child104" />
            <div className="frame-child105" />
          </div>
          <img
            className="instance-child10"
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
      </div>
      <div className="ready-to-start-designing-wrapper">
        <h1 className="ready-to-start">Ready to start designing?</h1>
      </div>
      <div className="high-quality-photos-videos-v-wrapper">
        <div className="high-quality-photos-videos">
          High-quality photos, videos, vectors, PSD, AI images, Icons.. to go
          from ideas to outstanding designs
        </div>
      </div>
      <div className="frame-parent61">
        <div className="frame-wrapper13">
          <div className="frame-parent62">
            <div className="assets-parent1">
              <div className="assets3">Assets</div>
              <div className="condition-branch" />
            </div>
            <div className="search-all-assets3">Search all assets</div>
          </div>
        </div>
        <Button
          className="image-container"
          startIcon={<img width="22px" height="22px" src="/searchnormal.svg" />}
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
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          <button className="search-normal-parent">
            <img
              className="search-normal-icon"
              alt=""
              src="/searchnormal-1.svg"
            />
            <div className="spring">spring</div>
          </button>
          <button className="search-normal-group">
            <img
              className="search-normal-icon1"
              alt=""
              src="/searchnormal-1.svg"
            />
            <div className="instagram-logo">instagram logo</div>
          </button>
          <button className="search-normal-container">
            <img
              className="search-normal-icon2"
              alt=""
              src="/searchnormal-1.svg"
            />
            <div className="wallpaper">wallpaper</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent15;
