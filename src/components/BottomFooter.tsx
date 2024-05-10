import { FunctionComponent } from "react";
import "./BottomFooter.css";

const BottomFooter: FunctionComponent = () => {
  return (
    <footer className="freepexels-company-projects-parent">
      <div className="freepexels-company-projects">
        Freepexels Company projects
      </div>
      <div className="freepexels-parent">
        <div className="freepexels3">Freepexels</div>
        <div className="flaticon">Flaticon</div>
        <div className="slidesgo">Slidesgo</div>
        <div className="wepik">Wepik</div>
        <div className="videvo">Videvo</div>
      </div>
    </footer>
  );
};

export default BottomFooter;
