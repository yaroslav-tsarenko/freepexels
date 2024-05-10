import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import "./RowBlockContainer.css";

const RowBlockContainer: FunctionComponent = () => {
  return (
    <div className="row-block-container">
      <b className="checkout2">Checkout</b>
      <div className="header">
        <b className="billing-details">Billing Details</b>
      </div>
      <div className="form-field-block">
        <div className="row-1">
          <TextField
            className="block-1"
            placeholder="First Name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#a4a4a4" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <TextField
            className="block-2"
            placeholder="Last Name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#a4a4a4" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
        </div>
        <div className="row-2">
          <TextField
            className="block-11"
            placeholder="Company Name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#a4a4a4" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <FormControl
            className="block-21"
            variant="standard"
            sx={{
              borderColor: "#a4a4a4",
              borderStyle: "SOLID",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              width: "49.035532994923855%",
              height: "50px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "50px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "50px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "50px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "50px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#000",
                fontSize: 16,
                fontWeight: "Regular",
                fontFamily: "DM Sans",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "24px",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="24px"
                  height="24px"
                  src="/icon.svg"
                  style={{ marginRight: "24px" }}
                />
              )}
            >
              <MenuItem>Country</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <TextField
          className="row-3"
          placeholder="Street Address"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#a4a4a4" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#000" },
          }}
        />
        <TextField
          className="block-22"
          placeholder="Apartment / Suite / Unit / etc. (Optional)"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#a4a4a4" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#000" },
          }}
        />
        <TextField
          className="row-4"
          placeholder="Town / City"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#a4a4a4" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#000" },
          }}
        />
        <TextField
          className="block-23"
          placeholder="Email Address"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#a4a4a4" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#000" },
          }}
        />
        <div className="row-5">
          <TextField
            className="block-12"
            placeholder="ZIP"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#a4a4a4" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <TextField
            className="block-24"
            placeholder="Phone"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#a4a4a4" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
        </div>
      </div>
      <div className="cart-subtotal-label" />
      <div className="payment-info-container">
        <div className="button">
          <img
            className="arrow-narrow-right-icon"
            loading="lazy"
            alt=""
            src="/arrownarrowright.svg"
          />
          <div className="security-icon">
            <div className="back">Back</div>
          </div>
        </div>
        <Button
          className="button1"
          endIcon={
            <img width="24px" height="24px" src="/arrownarrowright-1.svg" />
          }
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#4194f2",
            borderRadius: "5px",
            "&:hover": { background: "#4194f2" },
            width: 154,
            height: 60,
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default RowBlockContainer;
