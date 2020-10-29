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

const useCryptocurrency = (label, initialState, currencyOptions) => {
  const [CriptoCurrency, setCriptoCurrency] = useState(initialState);

  const SelectElementCryto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange={(e) => setCriptoCurrency(e.target.value)}
        value={CriptoCurrency}
      >
        <option value="">--Select--</option>
        {currencyOptions.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [CriptoCurrency, SelectElementCryto, setCriptoCurrency];
};

export default useCryptocurrency;
