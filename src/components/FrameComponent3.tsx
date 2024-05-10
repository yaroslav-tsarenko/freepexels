import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent3.css";

export type FrameComponent3Type = {
  aboutUsFreepik3211?: string;

  /** Style props */
  propBoxShadow?: CSSProperties["boxShadow"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  aboutUsFreepik3211,
  propBoxShadow,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  return (
    <div className="frame-wrapper8" style={frameDiv1Style}>
      <div className="frame-parent40">
        <div className="about-us-freepik-32-1-1-wrapper">
          <img
            className="about-us-freepik-32-1-1"
            loading="lazy"
            alt=""
            src={aboutUsFreepik3211}
          />
        </div>
        <div className="an-invaluable-tool">
          An invaluable tool for designers and content creators, offering an
          abundance of stunning visuals that inspire and impress.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
