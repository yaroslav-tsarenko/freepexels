import { FunctionComponent } from "react";
import HeaderNav from "../components/HeaderNav";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./ContactUs.css";

const ContactUs: FunctionComponent = () => {
  return (
    <div className="contact-us">
      <HeaderNav />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default ContactUs;
