import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import "./styles.scss";
import theme from "../../../theme";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider({
  state,
  dispatch,
  title,
  max,
  minLabel,
  maxLabel,
  type,
  value
}) {
  const [val, setVal] = React.useState(value);

  const handleSliderChange = (event, newValue) => {
    dispatch({ type, payload: Number(newValue) });
    setVal(Number(event.target.value));
  };

  const handleInputChange = (event) => {
    dispatch({
      type,
      payload: event.target.value === "" ? "" : Number(event.target.value)
    });
    setVal(event.target.value === "" ? "" : Number(event.target.value));
  };

  return (
    <div className="slider-wrapper">
      <Typography color={theme.palette.text.secondary} id="input-slider">
        {title}
      </Typography>
      <div className="slider-group">
        <Slider
          value={typeof value === "number" ? val : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          max={max}
          size="medium"
          marks={[
            {
              value: 0,
              label: minLabel
            },
            {
              value: max,
              label: maxLabel
            }
          ]}
        />
        <Input
          value={val}
          onChange={handleInputChange}
          style={{ width: "120px" }}
          inputProps={{
            step: 1,
            min: 0,
            max: max,
            type: "number",
            "aria-labelledby": "input-slider"
          }}
        />
      </div>
    </div>
  );
}
