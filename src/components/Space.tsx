import { FunctionComponent } from "react";
import "./Space.css";

const Space: FunctionComponent = () => {
  return (
    <section className="space">
      <div className="box-layout">
        <b className="cars">Cars</b>
        <img
          className="box-layout-child"
          loading="lazy"
          alt=""
          src="/group-10.svg"
        />
      </div>
      <div className="box-layout1">
        <b className="watches">Watches</b>
      </div>
      <div className="box-layout2">
        <b className="food">Food</b>
      </div>
      <div className="box-layout3">
        <b className="landscapes">Landscapes</b>
      </div>
      <div className="box-layout4">
        <b className="mountains">Mountains</b>
      </div>
      <div className="box-layout5">
        <b className="sports">Sports</b>
        <img
          className="box-layout-item"
          loading="lazy"
          alt=""
          src="/group-9.svg"
        />
      </div>
    </section>
  );
};

export default Space;
