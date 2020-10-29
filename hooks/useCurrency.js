import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
`;

const useCurrency = (label, initialState, currencyOptions) => {
  const [currency, setCurrency] = useState(initialState);

  const SelectElement = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setCurrency(e.target.value)} value={currency}>
        <option value="">--Select--</option>
        {currencyOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [currency, SelectElement, setCurrency];
};

export default useCurrency;
