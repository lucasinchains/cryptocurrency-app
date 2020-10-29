import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import cryptomonedas from "./cryptomonedas.png";
import Form from "./components/Form";
import axios from "axios";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Header = styled.h1`
  font-family: "Bebas Neue";
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

function App() {
  const [currency, handleCurrency] = useState("");

  const [cryptoCurrency, setCryptoCurrency] = useState("");

  const [quote, setQuote] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      if (currency === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
      const result = await axios.get(url);

      setLoading(true);
      setTimeout(() => {
        setLoading(false);

        setQuote(result.data.DISPLAY[cryptoCurrency][currency]);
      }, 2500);
    };
    getQuote();
  }, [currency, cryptoCurrency]);

  const evaluateComponents = loading ? <Spinner /> : <Quote quote={quote} />;

  return (
    <Container>
      <div>
        <Image src={cryptomonedas} alt="cripto-currency img" />
      </div>
      <div>
        <Header>Crypto-currencies App</Header>
        <Form
          handleCurrency={handleCurrency}
          setCryptoCurrency={setCryptoCurrency}
        />
        {evaluateComponents}
      </div>
    </Container>
  );
}

export default App;
