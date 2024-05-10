import { FunctionComponent } from "react";
import HeaderNav4 from "../components/HeaderNav4";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent5 from "../components/FrameComponent5";
import Footer2 from "../components/Footer2";
import "./Explore.css";

const Explore: FunctionComponent = () => {
  return (
    <div className="explore">
      <HeaderNav4 />
      <FrameComponent9 />
      <section className="explore-parent">
        <div className="explore1">Explore</div>
        <h1 className="explore-freepexels-photos">Explore Freepexels Photos</h1>
        <div className="our-site-has">
          Our site has over a million free high-resolution photos. Explore these
          popular photo categories on our site. All photoshere are free to
          download and use under the website license
        </div>
        <h1 className="browse-thousands-of">
          Browse thousands of free images on our website
        </h1>
      </section>
      <FrameComponent5 />
      <section className="brand-representation-container">
        <h1 className="free-high-resolution-photos">
          Free high-resolution photos
        </h1>
      </section>
      <section className="frame-section">
        <div className="frame-div">
          <img className="frame-child4" alt="" src="/frame-92@2x.png" />
          <img className="frame-child5" alt="" src="/frame-93@2x.png" />
          <img className="frame-child6" alt="" src="/frame-94@2x.png" />
          <img className="frame-child7" alt="" src="/frame-95@2x.png" />
          <img className="frame-child8" alt="" src="/frame-96@2x.png" />
          <img className="frame-child9" alt="" src="/frame-97@2x.png" />
          <img className="frame-child10" alt="" src="/frame-98@2x.png" />
        </div>
        <div className="frame-parent1">
          <img className="frame-child11" alt="" src="/frame-92-1@2x.png" />
          <img className="frame-child12" alt="" src="/frame-93-1@2x.png" />
          <img className="frame-child13" alt="" src="/frame-94-1@2x.png" />
          <img className="frame-child14" alt="" src="/frame-95-1@2x.png" />
          <img className="frame-child15" alt="" src="/frame-96-1@2x.png" />
          <img className="frame-child16" alt="" src="/frame-97-1@2x.png" />
          <img className="frame-child17" alt="" src="/frame-98-1@2x.png" />
        </div>
        <div className="frame-parent2">
          <img className="frame-child18" alt="" src="/frame-92-2@2x.png" />
          <img className="frame-child19" alt="" src="/frame-93-2@2x.png" />
          <img className="frame-child20" alt="" src="/frame-94-2@2x.png" />
          <img className="frame-child21" alt="" src="/frame-95-2@2x.png" />
          <img className="frame-child22" alt="" src="/frame-96-2@2x.png" />
          <img className="frame-child23" alt="" src="/frame-97-2@2x.png" />
          <img className="frame-child24" alt="" src="/frame-98-2@2x.png" />
        </div>
        <div className="frame-parent3">
          <img
            className="frame-child25"
            loading="lazy"
            alt=""
            src="/frame-98-2@2x.png"
          />
          <img
            className="frame-child26"
            loading="lazy"
            alt=""
            src="/frame-95-2@2x.png"
          />
          <img
            className="frame-child27"
            loading="lazy"
            alt=""
            src="/frame-97-2@2x.png"
          />
          <img
            className="frame-child28"
            loading="lazy"
            alt=""
            src="/frame-92-2@2x.png"
          />
          <img
            className="frame-child29"
            loading="lazy"
            alt=""
            src="/frame-93-2@2x.png"
          />
          <img
            className="frame-child30"
            loading="lazy"
            alt=""
            src="/frame-94-2@2x.png"
          />
          <img
            className="frame-child31"
            loading="lazy"
            alt=""
            src="/frame-96-2@2x.png"
          />
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default Explore;
