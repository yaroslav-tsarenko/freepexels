import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import HeaderNav3 from "../components/HeaderNav3";
import UsageGuideAndContact from "../components/UsageGuideAndContact";
import Footer1 from "../components/Footer1";
import "./Faqs.css";

const Faqs: FunctionComponent = () => {
  return (
    <div className="faqs">
      <HeaderNav3 />
      <section className="header-nav">
        <h1 className="faqs1">FAQs</h1>
      </section>
      <section className="frequently-asked-questions-and">
        <div className="attribution-details">
          <img
            className="copyrigh-1-icon"
            loading="lazy"
            alt=""
            src="/copyrigh-1@2x.png"
          />
          <h3 className="copyright">Copyright</h3>
        </div>
        <div className="attribution-details1">
          <img
            className="about-is-1"
            loading="lazy"
            alt=""
            src="/about-is-1@2x.png"
          />
          <h3 className="about-us1">About us</h3>
        </div>
        <div className="attribution-details2">
          <img
            className="usage-guide-1"
            loading="lazy"
            alt=""
            src="/usage-guide-1@2x.png"
          />
          <h3 className="usage-guide">Usage guide</h3>
        </div>
        <div className="attribution-details3">
          <img
            className="license-1-icon"
            loading="lazy"
            alt=""
            src="/license-1@2x.png"
          />
          <h3 className="license">License</h3>
        </div>
        <div className="attribution-details4">
          <img
            className="edit-1-icon"
            loading="lazy"
            alt=""
            src="/edit-1@2x.png"
          />
          <h3 className="edit">Edit</h3>
        </div>
        <div className="attribution-details5">
          <img
            className="join-team-1"
            loading="lazy"
            alt=""
            src="/join-team-1@2x.png"
          />
          <h3 className="joining-us">Joining us</h3>
        </div>
        <div className="attribution-details6">
          <img
            className="technical-suport-1"
            loading="lazy"
            alt=""
            src="/technical-suport-1@2x.png"
          />
          <h3 className="technical-support">Technical Support</h3>
        </div>
        <div className="attribution-details7">
          <img
            className="sub-1-icon"
            loading="lazy"
            alt=""
            src="/sub-1@2x.png"
          />
          <h3 className="subscription">Subscription</h3>
        </div>
      </section>
      <section className="header-nav1">
        <h3 className="popular-topics">Popular Topics</h3>
      </section>
      <UsageGuideAndContact />
      <section className="contact-support-f-a-q">
        <h3 className="cant-find-your">Cant find your question?</h3>
        <div className="subscribe-to-exclusive-content">
          <Button
            className="subscribe-to-exclusive-content-child"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#336aea",
              borderRadius: "5px",
              "&:hover": { background: "#336aea" },
              height: 46,
            }}
          >
            Submit a request
          </Button>
        </div>
      </section>
      <Footer1 propMinWidth="unset" />
    </div>
  );
};

export default Faqs;
