import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./HeaderNav3.css";

const HeaderNav3: FunctionComponent = () => {
  return (
    <header className="header-nav4">
      <div className="company-products">
        <FormControl
          className="parent2"
          variant="standard"
          sx={{
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "90px",
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
              color: "#fff",
              fontSize: 16,
              fontWeight: "Regular",
              fontFamily: "Inter",
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
                width="10px"
                height="8px"
                src="/communication-honesty.svg"
                style={{}}
              />
            )}
          >
            <MenuItem>Company</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className="parent3"
          variant="standard"
          sx={{
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "86px",
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
              color: "#fff",
              fontSize: 16,
              fontWeight: "Regular",
              fontFamily: "Inter",
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
              <img width="10px" height="8px" src="/polygon-2.svg" style={{}} />
            )}
          >
            <MenuItem>Products</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className="explore4">Explore</div>
      </div>
      <div className="our-squad1">
        <div className="loginsignup2">Login/Signup</div>
      </div>
    </header>
  );
};

export default HeaderNav3;
