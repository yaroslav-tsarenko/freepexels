import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import HeaderNav6 from "../components/HeaderNav6";
import FrameComponent15 from "../components/FrameComponent15";
import Space from "../components/Space";
import ConditionSet from "../components/ConditionSet";
import FrameComponent14 from "../components/FrameComponent14";
import Popover from "../components/Popover";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent10 from "../components/FrameComponent10";
import Footer4 from "../components/Footer4";
import BottomFooter from "../components/BottomFooter";
import "./Landing.css";

const Landing: FunctionComponent = () => {
  return (
    <div className="landing">
      <HeaderNav6 />
      <FrameComponent15 />
      <section className="slider">
        <div className="stepper">
          <h1 className="check-our-latest">Check our latest collections</h1>
          <div className="get-the-inspiration">
            Get the inspiration need with our curated collections and boost your
            creativity
          </div>
        </div>
        <Button
          className="slider-child"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#336aea",
            borderRadius: "5px",
            "&:hover": { background: "#336aea" },
            width: 182,
            height: 46,
          }}
        >
          Explore Collection
        </Button>
      </section>
      <Space />
      <section className="condition-set">
        <div className="trending">Trending</div>
        <div className="frame-parent6">
          <div className="frame-wrapper1">
            <div className="curated-for-you-parent">
              <h1 className="curated-for-you">Curated for you</h1>
              <div className="get-the-inspiration1">
                Get the inspiration need with our curated collections and boost
                your creativity
              </div>
            </div>
          </div>
          <Button
            className="frame-button"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#336aea",
              borderRadius: "5px",
              "&:hover": { background: "#336aea" },
              width: 182,
              height: 46,
            }}
          >
            Explore Collection
          </Button>
        </div>
      </section>
      <section className="condition-set1">
        <div className="frame-parent7">
          <img
            className="frame-child32"
            loading="lazy"
            alt=""
            src="/frame-1000003157@2x.png"
          />
          <b className="cars-collection">Cars Collection</b>
          <div className="photos">100+ photos</div>
        </div>
        <div className="frame-parent8">
          <img
            className="frame-child33"
            alt=""
            src="/frame-1000003157-1@2x.png"
          />
          <b className="clothing-collection">Clothing Collection</b>
          <div className="photos1">1000+ photos</div>
        </div>
        <div className="frame-parent9">
          <img
            className="frame-child34"
            alt=""
            src="/frame-1000003157-2@2x.png"
          />
          <b className="travel-collection">Travel Collection</b>
          <div className="photos2">1000+ photos</div>
        </div>
        <div className="frame-parent10">
          <img
            className="frame-child35"
            alt=""
            src="/frame-1000003157-3@2x.png"
          />
          <b className="food-collection">Food Collection</b>
          <div className="photos3">1000+ photos</div>
        </div>
      </section>
      <ConditionSet />
      <section className="stack-layout">
        <div className="panel-parent">
          <img className="panel-icon" alt="" src="/frame-92@2x.png" />
          <img className="row-icon" alt="" src="/frame-93@2x.png" />
          <img className="column-icon" alt="" src="/frame-94@2x.png" />
          <img className="frame-child36" alt="" src="/frame-95@2x.png" />
          <img className="image-icon" alt="" src="/frame-96@2x.png" />
          <img className="shape-icon" alt="" src="/frame-97@2x.png" />
          <img className="path-icon" alt="" src="/frame-98@2x.png" />
        </div>
        <div className="frame-parent11">
          <img className="frame-child37" alt="" src="/frame-92-1@2x.png" />
          <img className="frame-child38" alt="" src="/frame-93-1@2x.png" />
          <img className="frame-child39" alt="" src="/frame-94-1@2x.png" />
          <img className="frame-child40" alt="" src="/frame-95-1@2x.png" />
          <img className="frame-child41" alt="" src="/frame-96-1@2x.png" />
          <img className="frame-child42" alt="" src="/frame-97-1@2x.png" />
          <img className="frame-child43" alt="" src="/frame-98-1@2x.png" />
        </div>
        <div className="frame-parent12">
          <img className="frame-child44" alt="" src="/frame-92-2@2x.png" />
          <img className="frame-child45" alt="" src="/frame-93-2@2x.png" />
          <img className="frame-child46" alt="" src="/frame-94-2@2x.png" />
          <img className="frame-child47" alt="" src="/frame-95-2@2x.png" />
          <img className="frame-child48" alt="" src="/frame-96-2@2x.png" />
          <img className="frame-child49" alt="" src="/frame-97-2@2x.png" />
          <img className="frame-child50" alt="" src="/frame-98-2@2x.png" />
        </div>
        <div className="frame-parent13">
          <img className="frame-child51" alt="" src="/frame-98-2@2x.png" />
          <img className="frame-child52" alt="" src="/frame-95-2@2x.png" />
          <img className="frame-child53" alt="" src="/frame-97-2@2x.png" />
          <img className="frame-child54" alt="" src="/frame-92-2@2x.png" />
          <img className="frame-child55" alt="" src="/frame-93-2@2x.png" />
          <img className="frame-child56" alt="" src="/frame-94-2@2x.png" />
          <img className="frame-child57" alt="" src="/frame-96-2@2x.png" />
        </div>
      </section>
      <div className="landing-inner">
        <Button
          className="frame-child58"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#336aea",
            borderRadius: "5px",
            "&:hover": { background: "#336aea" },
            width: 126,
            height: 46,
          }}
        >
          View More
        </Button>
      </div>
      <FrameComponent14 />
      <section className="stack-panel-parent">
        <div className="stack-panel">
          <h1 className="designers-faves">Designers’ Faves</h1>
        </div>
        <div className="from-hd-videos">
          from HD videos to amazing AI-generated images, find the content you
          want in the format you need
        </div>
      </section>
      <Popover />
      <section className="condition-set2">
        <div className="collections">COLLECTIONS</div>
        <div className="frame-parent14">
          <div className="frame-wrapper2">
            <div className="extraordinary-in-a-nutshell-parent">
              <h1 className="extraordinary-in-a">
                Extraordinary, in a nutshell
              </h1>
              <div className="get-the-inspiration2">
                Get the inspiration need with our curated collections and boost
                your creativity
              </div>
            </div>
          </div>
          <Button
            className="frame-child59"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#336aea",
              borderRadius: "5px",
              "&:hover": { background: "#336aea" },
              width: 182,
              height: 46,
            }}
          >
            Explore Collection
          </Button>
        </div>
      </section>
      <section className="condition-set3">
        <div className="frame-parent15">
          <img
            className="frame-child60"
            loading="lazy"
            alt=""
            src="/frame-36@2x.png"
          />
          <b className="daily-motivation">Daily Motivation</b>
          <div className="resources">90 Resources</div>
        </div>
        <div className="frame-parent16">
          <img
            className="frame-child61"
            loading="lazy"
            alt=""
            src="/frame-37@2x.png"
          />
          <b className="streetwear-design">Streetwear design</b>
          <div className="resources1">90 Resources</div>
        </div>
        <div className="frame-parent17">
          <img
            className="frame-child62"
            loading="lazy"
            alt=""
            src="/frame-38@2x.png"
          />
          <b className="music-boards">Music boards</b>
          <div className="resources2">910 Resources</div>
        </div>
        <div className="frame-parent18">
          <img
            className="frame-child63"
            loading="lazy"
            alt=""
            src="/frame-39@2x.png"
          />
          <b className="fashion">Fashion</b>
          <div className="resources3">900+ Resources</div>
        </div>
      </section>
      <FrameComponent13 />
      <FrameComponent10 />
      <section className="whatever-the-job-well-make-i-parent">
        <div className="whatever-the-job">
          Whatever the job, we’ll make it faster
        </div>
        <h1 className="new-ai-image">
          New AI image generator: Do more, instantly
        </h1>
        <Button
          className="feedback-bubble"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#336aea",
            borderRadius: "5px",
            "&:hover": { background: "#336aea" },
            width: 108,
            height: 46,
          }}
        >
          Try Now
        </Button>
      </section>
      <Footer4 />
      <BottomFooter />
    </div>
  );
};

export default Landing;
