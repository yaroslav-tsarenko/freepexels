import { FunctionComponent } from "react";
import HeaderNav3 from "../components/HeaderNav3";
import HeaderNav2 from "../components/HeaderNav2";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent8 from "../components/FrameComponent8";
import Footer1 from "../components/Footer1";
import "./AboutUs.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className="about-us">
      <HeaderNav3 />
      <HeaderNav2
        expressThePowerOfYourIdea="Express the power of your ideas with BrandName"
        foundedIn2021WereTheOneSt="Founded in 2021, we’re the one-stop platform for all the cool solutions, content, and inspiration you need to express the power of your ideas."
        frame25="/frame-25@2x.png"
      />
      <section className="reviews">
        <img
          className="community-reviews-icon"
          loading="lazy"
          alt=""
          src="/frame-25-1@2x.png"
        />
        <div className="trusted-by">
          <div className="about-freepik">
            <h1 className="who-are-we">Who are we?</h1>
            <div className="we-gather-talent-container">
              <p className="we-gather-talent">
                We gather talent and inspiration from creatives all around the
                world –all in one place– and looove it when we help you make
                your great ideas happen.
              </p>
              <p className="we-believe-in">
                We believe in the power of good design and community. Our spirit
                is restless, and our inner joyful rebel says: Don't follow all
                the conventions; rewrite them.
              </p>
            </div>
          </div>
        </div>
      </section>
      <HeaderNav2
        expressThePowerOfYourIdea="What do we do?"
        foundedIn2021WereTheOneSt="We exist to help others turn their ideas into great designs faster, easier, and better. We put innovative technology –like AI– and best-quality content within reach of everyone, including designers, marketers, small business owners, educators, and content creators."
        frame25="/frame-25-2@2x.png"
        propBackgroundColor="#f0f1ff"
        propPadding="200px 0px 0px"
        propLineHeight="53px"
      />
      <FrameComponent6 />
      <section className="frame-container">
        <div className="our-squad-wrapper">
          <div className="our-squad">Our Squad</div>
        </div>
        <h1 className="what-we-built">What we built together</h1>
      </section>
      <FrameComponent7 />
      <FrameComponent8 />
      <Footer1 propMinWidth="unset" />
    </div>
  );
};

export default AboutUs;
