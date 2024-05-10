import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import HeaderNav5 from "../components/HeaderNav5";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent11 from "../components/FrameComponent11";
import Footer3 from "../components/Footer3";
import "./ProductListing.css";

const ProductListing: FunctionComponent = () => {
  return (
    <div className="product-listing">
      <HeaderNav5 />
      <FrameComponent12 />
      <section className="frame-parent4">
        <FrameComponent11 />
        <div className="frame-parent5">
          <div className="showing-results-for-photos-parent">
            <h3 className="showing-results-for-container">
              <span>Showing Results</span>
              <b>{` `}</b>
              <span>for</span>
              <b> “Photos”</b>
            </h3>
            <div className="frame-wrapper">
              <FormControl
                className="parent"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "100%",
                  height: "22px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "22px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "22px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "22px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "22px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: Mixed,
                    fontWeight: "Mixed",
                    fontFamily: "Mixed",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="8px"
                      height="4px"
                      src="/vector-2-9.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>Sort by : Most Relevant</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className="data-gatherer-parent">
            <div className="data-gatherer">
              <img
                className="data-gatherer-child"
                loading="lazy"
                alt=""
                src="/frame-1000003150@2x.png"
              />
              <img
                className="input-processor-icon"
                loading="lazy"
                alt=""
                src="/frame-1000003152@2x.png"
              />
              <img
                className="output-aggregator-icon"
                loading="lazy"
                alt=""
                src="/frame-1000003153@2x.png"
              />
              <img
                className="flow-manager-icon"
                loading="lazy"
                alt=""
                src="/frame-1000003154@2x.png"
              />
              <img
                className="error-handler-icon"
                loading="lazy"
                alt=""
                src="/frame-1000003155@2x.png"
              />
              <img
                className="data-filter-icon"
                loading="lazy"
                alt=""
                src="/frame-1000003156@2x.png"
              />
            </div>
            <div className="data-gatherer1">
              <img
                className="data-gatherer-item"
                alt=""
                src="/frame-1000003155-1@2x.png"
              />
              <img
                className="data-gatherer-inner"
                alt=""
                src="/frame-1000003150-1@2x.png"
              />
              <img
                className="data-gatherer-child1"
                alt=""
                src="/frame-1000003156-1@2x.png"
              />
              <img
                className="data-gatherer-child2"
                alt=""
                src="/frame-1000003154-1@2x.png"
              />
              <img
                className="data-gatherer-child3"
                alt=""
                src="/frame-1000003152-1@2x.png"
              />
              <img
                className="data-gatherer-child4"
                alt=""
                src="/frame-1000003153-1@2x.png"
              />
            </div>
            <div className="data-gatherer2">
              <img
                className="data-gatherer-child5"
                alt=""
                src="/frame-1000003156-2@2x.png"
              />
              <img
                className="data-gatherer-child6"
                alt=""
                src="/frame-1000003150-2@2x.png"
              />
              <img
                className="data-gatherer-child7"
                alt=""
                src="/frame-1000003153-2@2x.png"
              />
              <img
                className="data-gatherer-child8"
                alt=""
                src="/frame-1000003154-2@2x.png"
              />
              <img
                className="data-gatherer-child9"
                alt=""
                src="/frame-1000003152-2@2x.png"
              />
              <img
                className="data-gatherer-child10"
                alt=""
                src="/frame-1000003155-2@2x.png"
              />
            </div>
            <div className="data-gatherer3">
              <img
                className="data-gatherer-child11"
                alt=""
                src="/frame-1000003152-3@2x.png"
              />
              <img
                className="data-gatherer-child12"
                alt=""
                src="/frame-1000003154-3@2x.png"
              />
              <img
                className="data-gatherer-child13"
                alt=""
                src="/frame-1000003155-3@2x.png"
              />
              <img
                className="data-gatherer-child14"
                alt=""
                src="/frame-1000003153-3@2x.png"
              />
              <img
                className="data-gatherer-child15"
                alt=""
                src="/frame-1000003156-3@2x.png"
              />
              <img
                className="data-gatherer-child16"
                alt=""
                src="/frame-1000003150-3@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer3 />
    </div>
  );
};

export default ProductListing;
