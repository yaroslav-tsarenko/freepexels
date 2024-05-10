import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Explore from "./pages/Explore";
import ProductListing from "./pages/ProductListing";
import Credits from "./pages/Credits";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import BlogLisitng from "./pages/BlogLisitng";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Faqs from "./pages/Faqs";
import ProductDetails from "./pages/ProductDetails";
import ContactUs from "./pages/ContactUs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/product-listing":
        title = "";
        metaDescription = "";
        break;
      case "/credits":
        title = "";
        metaDescription = "";
        break;
      case "/checkout":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/blog-lisitng":
        title = "";
        metaDescription = "";
        break;
      case "/terms":
        title = "";
        metaDescription = "";
        break;
      case "/privacy":
        title = "";
        metaDescription = "";
        break;
      case "/faqs":
        title = "";
        metaDescription = "";
        break;
      case "/product-details":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/blog-lisitng" element={<BlogLisitng />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/" element={<ContactUs />} />
    </Routes>
  );
}
export default App;
