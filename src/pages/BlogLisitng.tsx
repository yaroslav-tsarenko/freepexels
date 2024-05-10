import { FunctionComponent } from "react";
import HeaderNav1 from "../components/HeaderNav1";
import BlogDesktop3Listing from "../components/BlogDesktop3Listing";
import Footer1 from "../components/Footer1";
import "./BlogLisitng.css";

const BlogLisitng: FunctionComponent = () => {
  return (
    <div className="blog-lisitng">
      <HeaderNav1 />
      <BlogDesktop3Listing />
      <Footer1 propMinWidth="unset" />
    </div>
  );
};

export default BlogLisitng;
