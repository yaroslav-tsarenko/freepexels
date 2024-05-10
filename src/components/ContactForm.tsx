import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import "./ContactForm.css";

export type ContactFormType = {
  backgrounds?: string;
  frame1000003102?: string;
  frame1000003103?: string;

  /** Style props */
  backgroundsBackgroundImage?: CSSProperties["backgroundImage"];
  downloadFreeDesktopMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const ContactForm: FunctionComponent<ContactFormType> = ({
  backgrounds,
  frame1000003102,
  frame1000003103,
  backgroundsBackgroundImage,
  downloadFreeDesktopMinWidth,
  propWidth,
}) => {
  const logoAndLinkContainerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: backgroundsBackgroundImage,
    };
  }, [backgroundsBackgroundImage]);

  const backgroundsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: downloadFreeDesktopMinWidth,
    };
  }, [downloadFreeDesktopMinWidth]);

  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="contact-form">
      <div
        className="logo-and-link-container"
        style={logoAndLinkContainerStyle}
      >
        <b className="backgrounds" style={backgroundsStyle}>
          {backgrounds}
        </b>
      </div>
      <b className="download-free-desktop">
        Download free desktop and mobile backgrounds.
      </b>
      <Button
        className="contact-form-child"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#000",
          fontSize: "16",
          background: "rgba(197, 195, 195, 0.72)",
          borderRadius: "5px",
          "&:hover": { background: "rgba(197, 195, 195, 0.72)" },
          width: 182,
          height: 46,
        }}
      >
        {frame1000003102}
      </Button>
      <Button
        className="contact-form-item"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#000",
          fontSize: "16",
          background: "rgba(197, 195, 195, 0.72)",
          borderRadius: "5px",
          "&:hover": { background: "rgba(197, 195, 195, 0.72)" },
          width: 197,
          height: 46,
        }}
        style={frameButtonStyle}
      >
        {frame1000003103}
      </Button>
    </div>
  );
};

export default ContactForm;
