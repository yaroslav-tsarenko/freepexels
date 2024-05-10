import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import "./FrameComponent16.css";

export type FrameComponent16Type = {
  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const FrameComponent16: FunctionComponent<FrameComponent16Type> = ({
  propLeft,
  propTop,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className="frame-parent67" style={frameDiv2Style}>
      <textarea
        className="frame-textarea"
        placeholder="100"
        rows={16}
        cols={27}
      />
      <div className="credits-wrapper">
        <b className="credits1">100 Credits</b>
      </div>
      <div className="empty-space-wrapper">
        <div className="empty-space">$100</div>
      </div>
      <div className="instance-frame">
        <Button
          className="frame-child106"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#336aea",
            borderRadius: "5px",
            "&:hover": { background: "#336aea" },
            width: 113,
            height: 46,
          }}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent16;
