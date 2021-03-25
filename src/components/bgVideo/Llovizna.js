import React from 'react';
import Lloviznas from "../../videos/Llovizna.mp4";
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

const Llovizna = () => {
    return ( 
        <Videobg autoPlay loop muted>
            <source src={Lloviznas}></source>
          </Videobg>
     );
}
 
export default Llovizna;