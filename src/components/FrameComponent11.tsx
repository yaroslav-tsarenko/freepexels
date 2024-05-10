import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./FrameComponent11.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className="frame-parent31">
      <div className="more-in-this-collection-parent">
        <h3 className="more-in-this">More in this collection</h3>
        <div className="see-all">See All</div>
      </div>
      <div className="frame-parent32">
        <div className="related-tags-parent">
          <div className="related-tags">Related Tags</div>
          <div className="instance-container">
            <Button
              className="frame-child69"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "rgba(197, 195, 195, 0.72)",
                borderRadius: "5px",
                "&:hover": { background: "rgba(197, 195, 195, 0.72)" },
                height: 46,
              }}
            >
              Backgrounds
            </Button>
            <Button
              className="frame-child70"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "rgba(197, 195, 195, 0.72)",
                borderRadius: "5px",
                "&:hover": { background: "rgba(197, 195, 195, 0.72)" },
                width: 71,
                height: 46,
              }}
            >
              Art
            </Button>
            <Button
              className="frame-child71"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "rgba(197, 195, 195, 0.72)",
                borderRadius: "5px",
                "&:hover": { background: "rgba(197, 195, 195, 0.72)" },
                width: 101,
                height: 46,
              }}
            >
              History
            </Button>
            <Button
              className="frame-child72"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "rgba(197, 195, 195, 0.72)",
                borderRadius: "5px",
                "&:hover": { background: "rgba(197, 195, 195, 0.72)" },
                width: 123,
                height: 46,
              }}
            >
              Wallpaper
            </Button>
            <Button
              className="frame-child73"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "rgba(197, 195, 195, 0.72)",
                borderRadius: "5px",
                "&:hover": { background: "rgba(197, 195, 195, 0.72)" },
                width: 92,
                height: 46,
              }}
            >
              Greek
            </Button>
            <Button
              className="frame-child74"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "rgba(197, 195, 195, 0.72)",
                borderRadius: "5px",
                "&:hover": { background: "rgba(197, 195, 195, 0.72)" },
                width: 68,
                height: 46,
              }}
            >
              9+
            </Button>
          </div>
        </div>
        <h3 className="view-similar-pictures">View Similar Pictures</h3>
      </div>
    </section>
  );
};

export default FrameComponent1;
