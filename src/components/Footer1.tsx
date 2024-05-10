import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Footer1.css";

export type Footer1Type = {
  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const Footer1: FunctionComponent<Footer1Type> = ({ propMinWidth }) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <footer className="footer1">
      <div className="frame-parent33" style={groupDiv1Style}>
        <div className="content-parent">
          <b className="content1">CONTENT</b>
          <div className="calendar-of-festivities-parent">
            <div className="calendar-of-festivities1">
              Calendar of festivities
            </div>
            <div className="new-assets2">New assets</div>
            <div className="the-most-popular1">the most popular content</div>
            <div className="search-trends2">Search trends</div>
            <div className="blog1">Blog</div>
          </div>
        </div>
        <div className="information-parent">
          <b className="information1">INFORMATION</b>
          <div className="pricing-parent">
            <div className="pricing2">Pricing</div>
            <div className="about-us3">About us</div>
            <div className="press-room2">Press room</div>
            <div className="api1">API</div>
            <div className="sell-content1">Sell content</div>
            <div className="jobs1">Jobs</div>
            <div className="our-brand-guidelines1">Our brand guidelines</div>
          </div>
        </div>
        <div className="frame-parent34">
          <div className="legal-group">
            <b className="legal1">LEGAL</b>
            <div className="terms-of-use-parent">
              <div className="terms-of-use1">Terms of use</div>
              <div className="license-agreement1">License agreement</div>
              <div className="privacy-policy4">Privacy policy</div>
              <div className="copyright-information1">
                Copyright information
              </div>
              <div className="cookies-policy1">Cookies policy</div>
              <div className="cookies-settings1">Cookies Settings</div>
            </div>
          </div>
          <div className="footer-nav">
            <b className="support1">Support</b>
            <div className="sidebar">
              <div className="faq1">FAQ</div>
              <div className="search-guide1">Search guide</div>
              <div className="contact1">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent35">
        <div className="social-media-group">
          <b className="social-media1">SOCIAL MEDIA</b>
          <div className="related-content">
            <img
              className="facebook-icon1"
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <img className="instagram-icon1" alt="" src="/instagram.svg" />
            <img
              className="youtube-icon1"
              loading="lazy"
              alt=""
              src="/youtube.svg"
            />
            <img
              className="link-square-icon1"
              loading="lazy"
              alt=""
              src="/linksquare.svg"
            />
          </div>
        </div>
        <div className="get-exclusive-assets1">
          Get exclusive assets sent straight to your inbox
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
