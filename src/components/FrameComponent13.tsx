import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./FrameComponent13.css";

const FrameComponent13: FunctionComponent = () => {
  return (
    <section className="connection-point-parent">
      <div className="connection-point">
        <div className="premium-benefits">PREMIUM BENEFITS</div>
      </div>
      <div className="color-palette">
        <h1 className="ready-to-level">Ready to level up?</h1>
      </div>
      <div className="alignment-system">
        <div className="symbol-library">
          <div className="prototype-manager">
            <Button
              className="interaction-zone"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#336aea",
                borderRadius: "5px",
                "&:hover": { background: "#336aea" },
                height: 46,
              }}
            >
              Go Premium
            </Button>
          </div>
          <div className="yes-you-can">(Yes, you can cancel anytime)</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent13;
