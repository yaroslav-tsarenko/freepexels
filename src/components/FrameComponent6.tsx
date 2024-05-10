import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";
import "./FrameComponent6.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <section className="pricing3">
      <div className="legal2">
        <div className="values">Values</div>
        <h1 className="we-say-it">We say it straight</h1>
        <div className="yeah-thats-right">
          Yeah, that’s right. We talk to each other openly and honestly. Why?
          Because we care about working in an environment where everyone
          communicates directly and respectfully.
        </div>
      </div>
      <div className="frame-parent36">
        <FrameComponent4 valueAction1="/valueaction-1@2x.png" />
        <FrameComponent4 valueAction1="/valueaction-1-1@2x.png" />
        <FrameComponent4 valueAction1="/valuechange-1@2x.png" />
        <FrameComponent4 valueAction1="/valueaction-1-1@2x.png" />
      </div>
    </section>
  );
};

export default FrameComponent6;
