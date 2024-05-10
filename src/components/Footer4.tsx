import { FunctionComponent } from "react";
import "./Footer4.css";

const Footer4: FunctionComponent = () => {
  return (
    <section className="footer4">
      <div className="toggle-switch-parent">
        <div className="toggle-switch">
          <b className="content4">CONTENT</b>
          <div className="progress-bar1">
            <div className="calendar-of-festivities4">
              Calendar of festivities
            </div>
            <div className="new-assets5">New assets</div>
            <div className="the-most-popular4">the most popular content</div>
            <div className="search-trends5">Search trends</div>
            <div className="blog4">Blog</div>
          </div>
        </div>
        <div className="tabbed-panel">
          <b className="information4">INFORMATION</b>
          <div className="popover1">
            <div className="pricing8">Pricing</div>
            <div className="about-us6">About us</div>
            <div className="press-room5">Press room</div>
            <div className="api4">API</div>
            <div className="sell-content4">Sell content</div>
            <div className="jobs4">Jobs</div>
            <div className="our-brand-guidelines4">Our brand guidelines</div>
          </div>
        </div>
        <div className="drawer">
          <div className="split-view">
            <b className="legal5">LEGAL</b>
            <div className="stack">
              <div className="terms-of-use4">Terms of use</div>
              <div className="license-agreement4">License agreement</div>
              <div className="privacy-policy7">Privacy policy</div>
              <div className="copyright-information4">
                Copyright information
              </div>
              <div className="cookies-policy4">Cookies policy</div>
              <div className="cookies-settings4">Cookies Settings</div>
            </div>
          </div>
          <div className="flex">
            <b className="support4">Support</b>
            <div className="column">
              <div className="faq4">FAQ</div>
              <div className="search-guide4">Search guide</div>
              <div className="contact4">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent65">
        <div className="social-media-parent2">
          <b className="social-media4">SOCIAL MEDIA</b>
          <div className="scene">
            <img
              className="facebook-icon4"
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <img
              className="instagram-icon4"
              loading="lazy"
              alt=""
              src="/instagram.svg"
            />
            <img
              className="youtube-icon4"
              loading="lazy"
              alt=""
              src="/youtube.svg"
            />
            <img
              className="link-square-icon4"
              loading="lazy"
              alt=""
              src="/linksquare.svg"
            />
          </div>
        </div>
        <div className="get-exclusive-assets4">
          Get exclusive assets sent straight to your inbox
        </div>
      </div>
    </section>
  );
};

export default Footer4;
