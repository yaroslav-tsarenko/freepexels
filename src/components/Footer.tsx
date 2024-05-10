import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Footer.css";

export type FooterType = {
  /** Style props */
  groupDivMinWidth?: CSSProperties["minWidth"];
};

const Footer: FunctionComponent<FooterType> = ({ groupDivMinWidth }) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: groupDivMinWidth,
    };
  }, [groupDivMinWidth]);

  return (
    <footer className="footer">
      <div className="new-assets-parent" style={groupDivStyle}>
        <div className="new-assets">
          <b className="content">CONTENT</b>
          <div className="search-trends">
            <div className="calendar-of-festivities">
              Calendar of festivities
            </div>
            <div className="new-assets1">New assets</div>
            <div className="the-most-popular">the most popular content</div>
            <div className="search-trends1">Search trends</div>
            <div className="blog">Blog</div>
          </div>
        </div>
        <div className="pricing-details">
          <b className="information">INFORMATION</b>
          <div className="press-room">
            <div className="pricing">Pricing</div>
            <div className="about-us2">About us</div>
            <div className="press-room1">Press room</div>
            <div className="api">API</div>
            <div className="sell-content">Sell content</div>
            <div className="jobs">Jobs</div>
            <div className="our-brand-guidelines">Our brand guidelines</div>
          </div>
        </div>
        <div className="jobs-openings">
          <div className="legal-parent">
            <b className="legal">LEGAL</b>
            <div className="terms-of-use-agreement">
              <div className="terms-of-use">Terms of use</div>
              <div className="license-agreement">License agreement</div>
              <div className="privacy-policy3">Privacy policy</div>
              <div className="copyright-information">Copyright information</div>
              <div className="cookies-policy">Cookies policy</div>
              <div className="cookies-settings">Cookies Settings</div>
            </div>
          </div>
          <div className="copyright-information-notice">
            <b className="support">Support</b>
            <div className="support-contact">
              <div className="faq">FAQ</div>
              <div className="search-guide">Search guide</div>
              <div className="contact">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-div">
        <div className="social-media-parent">
          <b className="social-media">SOCIAL MEDIA</b>
          <div className="connect-box">
            <img
              className="facebook-icon"
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <img
              className="instagram-icon"
              loading="lazy"
              alt=""
              src="/instagram.svg"
            />
            <img
              className="youtube-icon"
              loading="lazy"
              alt=""
              src="/youtube.svg"
            />
            <img
              className="link-square-icon"
              loading="lazy"
              alt=""
              src="/linksquare.svg"
            />
          </div>
        </div>
        <div className="get-exclusive-assets">
          Get exclusive assets sent straight to your inbox
        </div>
      </div>
    </footer>
  );
};

export default Footer;
