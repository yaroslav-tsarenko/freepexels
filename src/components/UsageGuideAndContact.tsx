import { FunctionComponent } from "react";
import "./UsageGuideAndContact.css";

const UsageGuideAndContact: FunctionComponent = () => {
  return (
    <section className="usage-guide-and-contact">
      <div className="social-media-links">
        <div className="exclusive-content-subscription">
          <div className="attribution-how-when">
            Attribution: How, When and Where?
          </div>
          <div className="is-this-website">Is this website for free?</div>
          <div className="download-limit-how">
            Download limit: How many resources can I download?
          </div>
          <div className="what-is-the">
            What is the difference between mai and secondary element?
          </div>
        </div>
        <div className="footer-info-wrapper">
          <div className="footer-info" />
        </div>
        <div className="f-a-q-search-and-guide-with-co">
          <div className="personal-use-parent">
            <div className="personal-use">Personal use</div>
            <div className="marketing-products-for">
              Marketing products for your own business
            </div>
            <div className="custom-work-for">
              Custom work for one specific client
            </div>
            <div className="packaging">Packaging</div>
          </div>
        </div>
      </div>
      <div className="marketplace-assets">
        <div className="terms-of-use-agreement1">
          <div className="pricing-and-about-us" />
          <div className="press-room-a-p-i-and-selling-c">
            <div className="youtube-videos-parent">
              <div className="youtube-videos">Youtube Videos</div>
              <div className="social-network-posts">Social Network Posts</div>
              <div className="subscription-invoices">Subscription invoices</div>
              <div className="blog-and-websites">Blog and websites</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageGuideAndContact;
