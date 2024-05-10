import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import ContactForm from "./ContactForm";
import "./FrameComponent5.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className="f-a-q-list">
      <ContactForm
        backgrounds="Backgrounds"
        frame1000003102="Cool Backgrounds"
        frame1000003103="Desktop Wallpapers"
      />
      <ContactForm
        backgrounds="Images"
        frame1000003102="Free Stock Photos"
        frame1000003103="Nature Images"
        backgroundsBackgroundImage="url('/frame-1000003099@3x.png')"
        downloadFreeDesktopMinWidth="64px"
        propWidth="154px"
      />
      <div className="contact-form1">
        <textarea
          className="contact-form-inner"
          placeholder="Wallpapers"
          rows={15}
          cols={27}
        />
        <b className="download-free-desktop1">
          Download free desktop and mobile backgrounds.
        </b>
        <Button
          className="contact-form-child1"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            background: "rgba(197, 195, 195, 0.72)",
            borderRadius: "5px",
            "&:hover": { background: "rgba(197, 195, 195, 0.72)" },
            width: 177,
            height: 46,
          }}
        >
          iPhone Wallpaper
        </Button>
        <Button
          className="contact-form-child2"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            background: "rgba(197, 195, 195, 0.72)",
            borderRadius: "5px",
            "&:hover": { background: "rgba(197, 195, 195, 0.72)" },
            width: 169,
            height: 46,
          }}
        >
          Cool Wallpapers
        </Button>
      </div>
    </section>
  );
};

export default FrameComponent5;
