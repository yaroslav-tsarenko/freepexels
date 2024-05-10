import { FunctionComponent } from "react";
import HeaderNav7 from "../components/HeaderNav7";
import FrameComponent16 from "../components/FrameComponent16";
import Footer from "../components/Footer";
import "./Credits.css";

const Credits: FunctionComponent = () => {
  return (
    <div className="credits">
      <HeaderNav7 />
      <section className="freepixel-credits-wrapper">
        <h1 className="freepixel-credits">Freepixel Credits</h1>
      </section>
      <section className="frame-parent19">
        <FrameComponent16 />
        <FrameComponent16 propLeft="688px" propTop="64px" />
        <FrameComponent16 propLeft="1256px" propTop="64px" />
        <FrameComponent16 propLeft="120px" propTop="566px" />
        <FrameComponent16 propLeft="688px" propTop="566px" />
        <FrameComponent16 propLeft="1256px" propTop="566px" />
      </section>
      <Footer groupDivMinWidth="unset" />
    </div>
  );
};

export default Credits;
