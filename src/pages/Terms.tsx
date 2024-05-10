import { FunctionComponent } from "react";
import HeaderNav1 from "../components/HeaderNav1";
import Footer1 from "../components/Footer1";
import "./Terms.css";

const Terms: FunctionComponent = () => {
  return (
    <div className="terms">
      <HeaderNav1 />
      <header className="terms-and-conditions-wrapper">
        <h1 className="terms-and-conditions">Terms and Conditions</h1>
      </header>
      <section className="welcome-to-freepexels-these-t-parent">
        <div className="welcome-to-freepexels">
          Welcome to Freepexels! These Terms and Conditions ("Terms") govern
          your use of our website, products, and services. By accessing or using
          any part of our website or services, you agree to abide by these
          Terms.
        </div>
        <div className="acceptance-of-terms-parent">
          <h3 className="acceptance-of-terms-container">
            <ol className="acceptance-of-terms">
              <li>Acceptance of Terms</li>
            </ol>
          </h3>
          <div className="please-read-these">
            Please read these Terms carefully before using our services. Your
            use of our services indicates your acceptance of these Terms and
            your agreement to comply with them. If you do not agree with any
            part of these Terms, you may not use our services.
          </div>
        </div>
        <div className="use-of-services-parent">
          <h3 className="use-of-services-container">
            <ol className="use-of-services">
              <li>Use of Services</li>
            </ol>
          </h3>
          <div className="please-read-these1">
            Please read these Terms carefully before using our services. Your
            use of our services indicates your acceptance of these Terms and
            your agreement to comply with them. If you do not agree with any
            part of these Terms, you may not use our services.
          </div>
          <div className="frame-parent20">
            <div className="eligibility-parent">
              <b className="eligibility">2.1 Eligibility</b>
              <div className="to-use-our">
                To use our services, you must be at least 18 years old and
                capable of forming a binding contract. By using our services,
                you represent and warrant that you meet these eligibility
                requirements.
              </div>
            </div>
            <div className="footer-content">
              <b className="account-creation">2.2 Account Creation</b>
              <div className="some-of-our">
                Some of our services may require you to create an account. You
                are responsible for maintaining the confidentiality of your
                account information and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized
                use of your account.
              </div>
            </div>
          </div>
        </div>
        <div className="privacy-policy-parent">
          <h3 className="privacy-policy">
            <ol className="privacy-policy1">
              <li>Privacy Policy</li>
            </ol>
          </h3>
          <div className="our-privacy-policy">
            Our Privacy Policy governs the collection, use, and sharing of your
            personal information when you use our services. By using our
            services, you consent to the practices described in our Privacy
            Policy.
          </div>
        </div>
        <div className="intellectual-property-parent">
          <h3 className="intellectual-property">
            <ol className="intellectual-property1">
              <li>Intellectual Property</li>
            </ol>
          </h3>
          <div className="please-read-these2">
            Please read these Terms carefully before using our services. Your
            use of our services indicates your acceptance of these Terms and
            your agreement to comply with them. If you do not agree with any
            part of these Terms, you may not use our services.
          </div>
          <div className="frame-parent21">
            <div className="ownership-parent">
              <b className="ownership">4.1 Ownership</b>
              <div className="all-content-materials">
                All content, materials, and intellectual property on our website
                and within our services are owned or licensed by Cedar Host Pro.
                You may not use, reproduce, or distribute any of our content
                without our express written permission.
              </div>
            </div>
            <div className="trademarks-parent">
              <h3 className="trademarks">4.2 Trademarks</h3>
              <div className="any-trademarks-logos">
                {" "}
                Any trademarks, logos, or service marks displayed on our website
                are the property of [Your Company Name] or their respective
                owners. You may not use these marks without our prior written
                consent or the consent of the respective owners.
              </div>
            </div>
          </div>
        </div>
        <div className="service-availability-parent">
          <h3 className="service-availability">
            <ol className="service-availability1">
              <li>Service Availability</li>
            </ol>
          </h3>
          <div className="we-strive-to">
            We strive to provide reliable services, but we do not guarantee
            uninterrupted or error-free operation of our website or services. We
            reserve the right to modify or discontinue our services at any time
            without notice.
          </div>
        </div>
        <div className="user-conduct-parent">
          <h3 className="user-conduct">
            <ol className="user-conduct1">
              <li>User Conduct</li>
            </ol>
          </h3>
          <div className="you-agree-to">
            You agree to use our services for lawful purposes and in compliance
            with these Terms. You may not engage in any activity that violates
            applicable laws or infringes on the rights of others.
          </div>
        </div>
        <div className="termination-parent">
          <h3 className="termination">
            <ol className="termination1">
              <li>Termination</li>
            </ol>
          </h3>
          <div className="we-reserve-the">
            We reserve the right to terminate or suspend your access to our
            services at our discretion, without prior notice, for any violation
            of these Terms or for any other reason.
          </div>
        </div>
        <div className="limitation-of-liability-parent">
          <h3 className="limitation-of-liability-container">
            <ol className="limitation-of-liability">
              <li>Limitation of Liability</li>
            </ol>
          </h3>
          <div className="to-the-fullest">
            To the fullest extent permitted by law, Cedar Host Pro and its
            affiliates shall not be liable for any direct, indirect, incidental,
            consequential, or punitive damages arising from your use of our
            services.
          </div>
        </div>
        <div className="governing-law-parent">
          <h3 className="governing-law">
            <ol className="governing-law1">
              <li>Governing Law</li>
            </ol>
          </h3>
          <div className="these-terms-are">
            These Terms are governed by and construed in accordance with the
            laws of [Your Jurisdiction]. Any disputes arising from these Terms
            or your use of our services shall be subject to the exclusive
            jurisdiction of the courts of law.
          </div>
        </div>
        <div className="contact-us-parent">
          <h3 className="contact-us1">
            <ol className="contact-us2">
              <li>Contact Us</li>
            </ol>
          </h3>
          <div className="if-you-have-container">
            <p className="if-you-have">
              If you have any questions or concerns about these Terms or our
              services, please contact us at hello@cryptoclouds.com.
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="thank-you-for">
              Thank you for choosing Cedar Host Pro.
            </p>
            <p className="we-hope-you">
              {" "}
              We hope you enjoy our services and find them valuable for your
              crypto endeavors.
            </p>
          </div>
        </div>
      </section>
      <Footer1 propMinWidth="unset" />
    </div>
  );
};

export default Terms;
