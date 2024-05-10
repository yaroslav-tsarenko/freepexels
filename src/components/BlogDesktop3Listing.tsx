import { FunctionComponent } from "react";
import BlogSingleBlockDesktop from "./BlogSingleBlockDesktop";
import "./BlogDesktop3Listing.css";

const BlogDesktop3Listing: FunctionComponent = () => {
  return (
    <section className="blog-desktop-3-listing">
      <header className="title">
        <h1 className="check-our-blog">Check our Blog!</h1>
        <div className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet consectetur. Tristique nunc laoreet cursus amet quisque gravida elementum pulvinar. Risus tristique maecenas lorem sapien faucibus ac pellentesque. Eu adipiscing arcu fames gravida nisi. `}</div>
      </header>
      <div className="blog-single-block-desktop-parent">
        <BlogSingleBlockDesktop
          blogImage="/blog--image@2x.png"
          titleLabel="A Deep Dive on Studio Photography"
          loremIpsumDolorSitAmetCon={`"Capturing moments in the perfect light: Exploring the artistry of studio photography."`}
          tag="New"
        />
        <BlogSingleBlockDesktop
          blogImage="/blog--image-1@2x.png"
          titleLabel="Who are the Artists?"
          loremIpsumDolorSitAmetCon={`"Peeling back the curtain: Illuminating the artists behind the lens in modern art."`}
          tag="TODAYS TOPIC"
          propWidth="171px"
        />
        <BlogSingleBlockDesktop
          blogImage="/blog--image-2@2x.png"
          titleLabel="Study of Modern Art"
          loremIpsumDolorSitAmetCon={`"Diving into the dynamic tapestry of Modern Art: Exploring its evolution, impact, and interpretation."`}
          tag="Most viewed"
          propWidth="167px"
        />
      </div>
    </section>
  );
};

export default BlogDesktop3Listing;
