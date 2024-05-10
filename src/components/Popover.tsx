import { FunctionComponent } from "react";
import "./Popover.css";

const Popover: FunctionComponent = () => {
  return (
    <section className="popover">
      <div className="modal-dialog">
        <div className="accordion">
          <b className="graduation-videos">Graduation Videos</b>
        </div>
        <div className="cinco-de-mayo-wrapper">
          <b className="cinco-de-mayo">Cinco de mayo</b>
        </div>
        <div className="image-processor">
          <b className="mothers-day">Mothers Day</b>
        </div>
      </div>
      <div className="modal-dialog1">
        <div className="happy-tihar-wrapper">
          <b className="happy-tihar">Happy Tihar</b>
        </div>
        <div className="flowers-wrapper">
          <b className="flowers">Flowers</b>
        </div>
        <div className="family-photos-wrapper">
          <b className="family-photos">Family Photos</b>
        </div>
      </div>
      <div className="modal-dialog2">
        <div className="cactus-images-wrapper">
          <b className="cactus-images">Cactus Images</b>
        </div>
        <div className="city-backdrops-wrapper">
          <b className="city-backdrops">City Backdrops</b>
        </div>
        <textarea
          className="modal-dialog-child"
          placeholder="Sunset Images"
          rows={15}
          cols={27}
        />
      </div>
    </section>
  );
};

export default Popover;
