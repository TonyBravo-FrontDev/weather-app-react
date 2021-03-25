import React, { Fragment } from "react";
import Noche from "../../videos/stock.mp4";
import styled from "styled-components";

const Videobg = styled.video`
  position: absolute;
  object-fit: cover;
  width: 100%;
  margin: auto;
  height: 100%;
  overflow: hidden;
  top: 1px;
  border-radius: 12px;
  z-index: -3;

  @media (max-width: 599px) {
    border-radius: 0px;
  }
`;

const Stock = () => {
  return (
    <Fragment>
      <Videobg autoPlay loop muted>
        <source src={Noche}></source>
      </Videobg>
    </Fragment>
  );
};

export default Stock;
