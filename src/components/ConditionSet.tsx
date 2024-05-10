import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./ConditionSet.css";

const ConditionSet: FunctionComponent = () => {
  return (
    <section className="condition-set4">
      <div className="condition-set-inner">
        <div className="assets-parent2">
          <div className="assets4">Assets</div>
          <h1 className="browse-our-wide">Browse our wide range of assets</h1>
          <div className="get-the-inspiration3">
            Get the inspiration need with our curated collections and boost your
            creativity
          </div>
        </div>
      </div>
      <Button
        className="condition-set-child"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#336aea",
          borderRadius: "5px",
          "&:hover": { background: "#336aea" },
          width: 157,
          height: 46,
        }}
      >
        Explore Assets
      </Button>
    </section>
  );
};

export default ConditionSet;
