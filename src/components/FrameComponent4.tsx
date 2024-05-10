import { FunctionComponent } from "react";
import "./FrameComponent4.css";

export type FrameComponent4Type = {
  valueAction1?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  valueAction1,
}) => {
  return (
    <div className="value-action-1-parent">
      <img
        className="value-action-1-icon"
        loading="lazy"
        alt=""
        src={valueAction1}
      />
      <h3 className="we-walk-and">We walk and then we run</h3>
      <div className="we-like-to">{`We like to take it one step at a time. we explore our playground, own it, and then expand it meet new challenges. Each goal sets the stage for the next `}</div>
    </div>
  );
};

export default FrameComponent4;
