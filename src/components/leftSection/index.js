import React from "react";
import InputSlider from "../common/slider";

const LeftSection = ({ state, dispatch }) => {
  return (
    <div>
      <InputSlider
        state={state}
        dispatch={dispatch}
        title="Loan Amount"
        max={50000000}
        minLabel="0"
        maxLabel="5Cr"
        type="principal"
        value={state.principal}
      />
      <InputSlider
        state={state}
        dispatch={dispatch}
        type="rateOfInterest"
        title="Interest Rate"
        max={15}
        minLabel="0"
        maxLabel="15%"
        value={state.roi}
      />
      <InputSlider
        state={state}
        dispatch={dispatch}
        type="loanTenure"
        title="Loan Term (Years)"
        max={30}
        minLabel="0"
        maxLabel="30Y"
        value={state.tenure}
      />
    </div>
  );
};

export default LeftSection;
