import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCurrency from "../hooks/useCurrency";
import useCryptocurrency from "../hooks/useCryptocurrency";
import axios from "axios";
import Error from "./Error";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ setCryptoCurrency, handleCurrency }) => {
  const [cryptoList, setcryptoList] = useState([]);

  const [error, setError] = useState(false);

  const monedas = [
    { code: "USD", name: "United States Dolar" },
    { code: "ARS", name: "Peso Argentino" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Great Britain Pound" },
  ];

  const [currency, SelectElement, setCurrency] = useCurrency(
    "Select currency",
    "",
    monedas
  );

  const [
    CryptoCurrency,
    SelectElementCryto,
    setCriptoCurrency,
  ] = useCryptocurrency("Select Cypto-currency", "", cryptoList);

  useEffect(() => {
    const consultAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);

      setcryptoList(result.data.Data);
    };
    consultAPI();
  }, []);

  const quoteCurrency = (e) => {
    e.preventDefault();

    if (currency === "" || CryptoCurrency === "") {
      setError(true);
      return;
    }

    setError(false);

    handleCurrency(currency);

    setCryptoCurrency(CryptoCurrency);
  };
  return (
    <form onSubmit={quoteCurrency}>
      {error ? <Error message="All fields are required" /> : null}
      <SelectElement />
      <SelectElementCryto />
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
