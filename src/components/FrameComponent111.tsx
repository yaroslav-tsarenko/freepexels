import { FunctionComponent } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./FrameComponent111.css";

const FrameComponent11: FunctionComponent = () => {
  return (
    <div className="output-generator-parent">
      <div className="output-generator">
        <div className="candle-2-parent">
          <img
            className="candle-2-icon"
            loading="lazy"
            alt=""
            src="/candle2.svg"
          />
          <b className="filters">Filters</b>
        </div>
        <div className="collapse-wrapper">
          <div className="collapse">
            <img className="collapse-child" alt="" src="/arrow-3.svg" />
            <img className="collapse-item" alt="" src="/line-8.svg" />
          </div>
        </div>
      </div>
      <div className="frame-child83" />
      <div className="frame-parent54">
        <div className="frame-parent55">
          <div className="forward-item-parent">
            <img
              className="forward-item-icon"
              loading="lazy"
              alt=""
              src="/forwarditem.svg"
            />
            <b className="asset-type">Asset Type</b>
          </div>
          <img className="frame-child84" alt="" src="/vector-2.svg" />
        </div>
        <div className="frame-parent56">
          <div className="instance-parent5">
            <Button
              className="frame-child85"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#6b6262",
                fontSize: "16",
                background: "rgba(255, 255, 255, 0.72)",
                border: "#6b6262 solid 0.6px",
                borderRadius: "5px",
                "&:hover": { background: "rgba(255, 255, 255, 0.72)" },
                height: 46,
              }}
            >
              Vectors
            </Button>
            <Button
              className="frame-child86"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#336aea",
                border: "#6b6262 solid 0.6px",
                borderRadius: "5px",
                "&:hover": { background: "#336aea" },
                height: 46,
              }}
            >
              Photos
            </Button>
            <Button
              className="frame-child87"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#6b6262",
                fontSize: "16",
                background: "rgba(255, 255, 255, 0.72)",
                border: "#6b6262 solid 0.6px",
                borderRadius: "5px",
                "&:hover": { background: "rgba(255, 255, 255, 0.72)" },
                height: 46,
              }}
            >
              Videos
            </Button>
          </div>
          <div className="instance-parent6">
            <Button
              className="frame-child88"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#6b6262",
                fontSize: "16",
                background: "rgba(255, 255, 255, 0.72)",
                border: "#6b6262 solid 0.6px",
                borderRadius: "5px",
                "&:hover": { background: "rgba(255, 255, 255, 0.72)" },
                width: 88,
                height: 46,
              }}
            >
              Icons
            </Button>
            <Button
              className="frame-child89"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#6b6262",
                fontSize: "16",
                background: "rgba(255, 255, 255, 0.72)",
                border: "#6b6262 solid 0.6px",
                borderRadius: "5px",
                "&:hover": { background: "rgba(255, 255, 255, 0.72)" },
                height: 46,
              }}
            >
              Templates
            </Button>
            <Button
              className="frame-child90"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#6b6262",
                fontSize: "16",
                background: "rgba(255, 255, 255, 0.72)",
                border: "#6b6262 solid 0.6px",
                borderRadius: "5px",
                "&:hover": { background: "rgba(255, 255, 255, 0.72)" },
                width: 78,
                height: 46,
              }}
            >
              PSD
            </Button>
          </div>
          <Button
            className="frame-child91"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#6b6262",
              fontSize: "16",
              background: "rgba(255, 255, 255, 0.72)",
              border: "#6b6262 solid 0.6px",
              borderRadius: "5px",
              "&:hover": { background: "rgba(255, 255, 255, 0.72)" },
              width: 116,
              height: 46,
            }}
          >
            Mockups
          </Button>
        </div>
      </div>
      <div className="frame-child92" />
      <div className="frame-parent57">
        <div className="frame-parent58">
          <div className="crown-parent">
            <img
              className="crown-icon"
              loading="lazy"
              alt=""
              src="/crown.svg"
            />
            <b className="license1">License</b>
          </div>
          <img className="frame-child93" alt="" src="/vector-2.svg" />
        </div>
        <div className="instance-parent7">
          <Button
            className="frame-child94"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#336aea",
              border: "#6b6262 solid 0.6px",
              borderRadius: "5px",
              "&:hover": { background: "#336aea" },
              width: 81,
              height: 46,
            }}
          >
            Free
          </Button>
          <Button
            className="frame-child95"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#6b6262",
              fontSize: "16",
              background: "rgba(255, 255, 255, 0.72)",
              border: "#6b6262 solid 0.6px",
              borderRadius: "5px",
              "&:hover": { background: "rgba(255, 255, 255, 0.72)" },
              height: 46,
            }}
          >
            Premium
          </Button>
        </div>
      </div>
      <div className="frame-child96" />
      <TextField
        className="ai-generated-wrapper"
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginRight: "10px" }}>
              <img width="22px" height="22px" src="/colorssquare.svg" />
            </InputAdornment>
          ),
          endAdornment: <img width="8px" height="4px" src="/vector-2-2.svg" />,
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "98.52216748768473%",
          height: "22px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "DM Sans",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>AI-generated</MenuItem>
      </TextField>
      <div className="frame-child97" />
      <TextField
        className="tools-wrapper"
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginRight: "10px" }}>
              <img width="24px" height="24px" src="/cpu.svg" />
            </InputAdornment>
          ),
          endAdornment: <img width="8px" height="4px" src="/vector-2-3.svg" />,
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "98.27586206896552%",
          height: "24px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "DM Sans",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>Tools</MenuItem>
      </TextField>
      <div className="frame-child98" />
      <TextField
        className="colors-wrapper"
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginRight: "10px" }}>
              <img width="24px" height="24px" src="/colorswatch.svg" />
            </InputAdornment>
          ),
          endAdornment: <img width="8px" height="4px" src="/vector-2-4.svg" />,
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "98.52216748768473%",
          height: "24px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "DM Sans",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>Colors</MenuItem>
      </TextField>
      <div className="frame-child99" />
      <TextField
        className="include-prompt-wrapper"
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginRight: "10px" }}>
              <img width="24px" height="24px" src="/documenttext.svg" />
            </InputAdornment>
          ),
          endAdornment: <img width="8px" height="4px" src="/vector-2-5.svg" />,
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "100%",
          height: "24px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "DM Sans",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>Include prompt</MenuItem>
      </TextField>
      <div className="frame-child100" />
      <TextField
        className="orientation-wrapper"
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginRight: "10px" }}>
              <img width="24px" height="24px" src="/rotateleft.svg" />
            </InputAdornment>
          ),
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "100%",
          height: "24px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "DM Sans",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>Orientation</MenuItem>
      </TextField>
      <div className="frame-child101" />
      <TextField
        className="quick-edit-wrapper"
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginRight: "10px" }}>
              <img width="24px" height="24px" src="/brush2.svg" />
            </InputAdornment>
          ),
          endAdornment: <img width="8px" height="4px" src="/vector-2-7.svg" />,
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "99.75369458128078%",
          height: "24px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "DM Sans",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>Quick edit</MenuItem>
      </TextField>
      <div className="frame-child102" />
      <TextField
        className="our-choice-wrapper"
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginRight: "10px" }}>
              <img width="24px" height="24px" src="/star.svg" />
            </InputAdornment>
          ),
          endAdornment: <img width="8px" height="4px" src="/vector-2-8.svg" />,
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "99.75369458128078%",
          height: "24px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "DM Sans",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>Our choice</MenuItem>
      </TextField>
    </div>
  );
};

export default FrameComponent11;
