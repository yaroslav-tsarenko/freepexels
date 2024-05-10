import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./FrameComponent.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="login-page-wrapper">
      <div className="login-page">
        <div className="calendar-and-assets">
          <b className="contact-us5">Contact Us</b>
          <h1 className="looking-to-get-container">
            <p className="looking-to">Looking to</p>
            <p className="get-in-touch">Get In Touch</p>
            <p className="with-us">With Us?</p>
          </h1>
          <div className="were-on-a">{`We're on a mission to redefine the future of cryptocurrency server hosting. Our cutting-edge solutions are engineered for performance, security, and scalability, empowering crypto enthusiasts, traders, and businesses to thrive in this dynamic digital landscape. `}</div>
        </div>
        <div className="privacy-policy2">
          <div className="copyright-info">
            <TextField
              className="input"
              placeholder="First Name"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "58px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "8px",
                },
                "& .MuiInputBase-input": { color: "#979797" },
              }}
            />
            <TextField
              className="input1"
              placeholder="Last Name"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "58px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "8px",
                },
                "& .MuiInputBase-input": { color: "#979797" },
              }}
            />
          </div>
          <TextField
            className="input2"
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "58px",
                backgroundColor: "#f1f1f1",
                borderRadius: "8px",
              },
              "& .MuiInputBase-input": { color: "#979797" },
            }}
          />
          <TextField
            className="input3"
            placeholder="Enter your Contact Number"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "58px",
                backgroundColor: "#f1f1f1",
                borderRadius: "8px",
              },
              "& .MuiInputBase-input": { color: "#979797" },
            }}
          />
          <textarea
            className="input4"
            placeholder="Enter your Message"
            rows={10}
            cols={25}
          />
          <Button
            className="privacy-policy-child"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#336aea",
              borderRadius: "5px",
              "&:hover": { background: "#336aea" },
              width: 155,
              height: 46,
            }}
          >
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
