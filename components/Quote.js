import React from "react";
import styled from "@emotion/styled";

const ResultDiv = styled.div`
  color: #fff;
`;
const ResultUPDATE = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const ResultPRICE = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Quote = ({ quote }) => {
  if (Object.keys(quote).length === 0) return null;
  return (
    <ResultDiv>
      <ResultPRICE>
        Price is: <span>{quote.PRICE}</span>
      </ResultPRICE>
      <ResultUPDATE>
        Last Update: <span>{quote.LASTUPDATE}</span>
      </ResultUPDATE>
    </ResultDiv>
  );
};

export default Quote;
