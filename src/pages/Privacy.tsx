import { FunctionComponent } from "react";
import HeaderNav1 from "../components/HeaderNav1";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent18 from "../components/FrameComponent18";
import Footer1 from "../components/Footer1";
import "./Privacy.css";

const Privacy: FunctionComponent = () => {
  return (
    <div className="privacy">
      <HeaderNav1 />
      <header className="cedar-host-pro">
        <h1 className="privacy1">Privacy</h1>
      </header>
      <section className="cedar-host-pro-we-us-or-parent">
        <div className="cedar-host-pro1">
          Cedar Host Pro ("we," "us," or "our") values your privacy and is
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, disclose, and protect your information
          when you use our website, products, and services.
        </div>
        <FrameComponent19 />
        <FrameComponent18 />
        <div className="data-security-parent">
          <h3 className="data-security">
            <ol className="data-security1">
              <li>Data Security</li>
            </ol>
          </h3>
          <div className="we-take-reasonable">
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no data transmission or storage can be guaranteed to be
            completely secure. Please use caution when sharing personal
            information online.
          </div>
        </div>
        <div className="third-party-services-parent">
          <h3 className="third-party-services">
            <ol className="third-party-services1">
              <li>Third-Party Services</li>
            </ol>
          </h3>
          <div className="we-may-use">
            We may use third-party service providers to assist us in delivering
            our services. These providers may have access to your information
            for specific purposes, but they are obligated to maintain the
            confidentiality and security of your data.
          </div>
        </div>
        <div className="cookies-and-tracking-technolog-parent">
          <h3 className="cookies-and-tracking-container">
            <ol className="cookies-and-tracking-technolog">
              <li>Cookies and Tracking Technologies</li>
            </ol>
          </h3>
          <div className="we-use-cookies">
            We use cookies and similar tracking technologies to collect and
            store information about your interactions with our website. You can
            manage your cookie preferences through your browser settings.
          </div>
        </div>
        <div className="your-choices-parent">
          <h3 className="your-choices">
            <ol className="your-choices1">
              <li>Your Choices</li>
            </ol>
          </h3>
          <div className="you-have-the">
            You have the right to access, update, or delete your personal
            information. You can also unsubscribe from marketing communications
            at any time. To exercise these rights or for any privacy-related
            inquiries, please contact us at Cedar Host Pro.
          </div>
        </div>
        <div className="changes-to-this-privacy-policy-parent">
          <h3 className="changes-to-this-container">
            <ol className="changes-to-this-privacy-policy">
              <li>Changes to this Privacy Policy</li>
            </ol>
          </h3>
          <div className="we-may-update">
            We may update this Privacy Policy to reflect changes in our data
            practices. Any updates will be posted on this page with an updated
            effective date. Please review this Privacy Policy periodically to
            stay informed about our privacy practices.
          </div>
        </div>
        <div className="contact-us-group">
          <h3 className="contact-us3">
            <ol className="contact-us4">
              <li>Contact Us</li>
            </ol>
          </h3>
          <div className="if-you-have-container1">
            <p className="if-you-have1">
              If you have any questions, concerns, or requests related to this
              Privacy Policy or our data practices, please contact us at Cedar
              Host Pro.
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="by-using-our">
              By using our website, products, and services, you agree to the
              terms outlined in this Privacy Policy. We are committed to
              protecting your privacy and ensuring the security of your
              information.
            </p>
          </div>
        </div>
      </section>
      <Footer1 propMinWidth="unset" />
    </div>
  );
};

export default Privacy;
