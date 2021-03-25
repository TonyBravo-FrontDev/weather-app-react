import React from 'react';
import Nublado_2 from "../../videos/Nublado.mp4";
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
  z-index: -2;
  @media (max-width: 599px) {
    border-radius: 0px;
  }
`;

const Nublado = () => {
    return ( 
        <Videobg autoPlay loop muted>
            <source src={Nublado_2}></source>
          </Videobg>
     );
}
 
export default Nublado;