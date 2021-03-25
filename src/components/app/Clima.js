import React, { Fragment } from "react";
import "./styles.css";
import styled from "styled-components";
import PropTypes from "prop-types";

const ContenedorCiudad = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 2rem;

  @media (width: 320px) and (height: 480px) {
    margin-top: 0 !important;
  }

  @media (min-width: 1200px) {
    margin-top: 0rem;
  }

  @media (min-width: 1800px) {
    margin-top: 2rem;
  }
`;

const ContenedorGrados = styled.div`
  width: 90%;
  margin: auto;
  border-bottom: 1px solid white;

  @media (width: 480px) and (height: 854px) {
    margin-top: 12rem !important;
  }

  @media (width: 320px) and (height: 480px) {
    margin-top: 0 !important;
  }

  @media (height: 731px) {
    margin-top: 5rem !important;
  }

  @media (height: 568px) {
    margin-top: 0.5rem !important;
  }

  @media (height: 736px) {
    margin-top: 7rem !important;
  }
  @media (height: 823px) {
    margin-top: 11rem !important;
  }

  @media (max-width: 599px) {
    margin-top: 2rem;
  }

  @media (min-width: 1200px) {
    margin-top: 2rem;
  }

  @media (min-width: 1800px) {
    margin-top: 0rem;
  }
`;

const Ciudad = styled.h2`
  color: white;

  @media (min-width: 1200px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1800px) {
    font-size: 1.5rem;
  }
`;

const HoraFecha = styled.p`
  @media (min-width: 1200px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1800px) {
    font-size: 0.9rem;
  }
`;

const Grados = styled.h2`
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  transition: all 0.6s ease;

  @media (width: 320px) and (height: 480px) {
    font-size: 2rem !important;
  }

  @media (height: 568px) {
    margin-top: 0 !important;
    font-size: 5rem !important;
  }

  @media (max-width: 599px) {
    font-size: 6rem;
    margin-top: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
    margin-top: 2rem;
  }

  @media (min-width: 1800px) {
    font-size: 5rem;
    margin-top: 4.4rem;
  }
`;

const ContainerCloud = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    animation-name: cloud;
    animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  @keyframes cloud {
    0% {
      transform: translateY(0%);
    }
    25% {
      transform: translateY(5%);
    }
    50% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @media (width: 320px) and (height: 480px) {
    img {
      width: 3rem !important;
      height: 3rem !important;
    }
  }

  @media (max-width: 599px) {
    img {
      width: 5rem;
      height: 5rem;
    }

    p {
      font-size: 1.4rem;
      font-weight: 400;
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 1200px) {
    img {
      width: 3.5rem;
      height: 3.5rem;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 1800px) {
    img {
      width: 4rem;
      height: 4rem;
    }

    p {
      font-size: 22px;
      font-weight: 400;
      margin-left: 0.5rem;
    }
  }
`;

const EstadoClima = styled.div`
  width: 90%;
  margin: auto;

  @media (width: 320px) and (height: 480px) {
    margin-top: 0 !important;
  }

  @media (max-width: 599px) {
    margin-top: 1rem;
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    margin-top: 1rem;
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 20%);
  }

  @media (min-width: 1800px) {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 25%);
    gap: 1rem;
    margin-top: 1rem;
    gap: 2rem;
  }

  .estado-titulo {
    color: #d1d1d1;
    font-weight: 300;

    @media (min-width: 1200px) {
      font-size: 0.7rem;
      font-weight: 400;
    }

    @media (min-width: 1800px) {
      font-size: 0.8rem;
    }
  }

  .parametros {
    margin: 0;
    @media (min-width: 1200px) {
      font-size: 1rem;
      font-weight: 500;
    }

    @media (min-width: 1800px) {
      font-size: 1.3rem;
      font-weight: 400;
    }
  }

  .medidas {
    margin: 0;
    @media (min-width: 1200px) {
      font-size: 0.5rem;
      font-weight: 500;
      margin-top: 0.8rem;
    }

    @media (min-width: 1800px) {
      font-size: 0.9rem;
      font-weight: 400;
    }
  }
`;

const ProgressBarDiv = styled.div`
  width: 100%;
  height: 5px;
  margin-top: 0.5rem;

  progress[value] {
    appearance: none;
    width: 100%;
    height: 100%;

    &::-webkit-progress-bar {
      border-radius: 4px;
      background-color: #7e7e7e;
    }

    &::-webkit-progress-value {
      height: 100%;
      background-color: #00ff85;
    }
  }
`;

const Clima = ({ resultado }) => {
  // Extraer los valores de la API
  const { data } = resultado;

  const Dia = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const Mes = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  var now = new Date();

  if (!data) return null;

  return (
    <Fragment>
      <ContenedorCiudad>
        <Ciudad>{data.data[0].city_name}</Ciudad>
        <HoraFecha>
          {now.toLocaleTimeString("en-US")} - {Dia[now.getDay()]},{" "}
          {now.getDate()} {Mes[now.getMonth()]} {now.getFullYear()}
        </HoraFecha>
      </ContenedorCiudad>

      {/* Contenedor de la temperatura del clima */}
      <ContenedorGrados>
        <Grados>{parseFloat(data.data[0].temp).toFixed(0)}°</Grados>
        <ContainerCloud>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`}
            alt="icon-cloud"
          />
          <p>{data.data[0].weather.description}</p>
        </ContainerCloud>
      </ContenedorGrados>

      {/* Estado del clima, Fuerza del Viento, LLuvia  y la Humedad*/}
      <EstadoClima>
        <div>
          <p className="estado-titulo">Wind</p>
          <p className="parametros">
            {parseFloat(data.data[0].wind_spd * 3.6).toFixed(0)}
          </p>
          <p className="medidas">Km/h</p>

          <ProgressBarDiv>
            <progress
              max="100"
              value={parseFloat(data.data[0].wind_spd * 3.6).toFixed(0)}
            />
          </ProgressBarDiv>
        </div>

        <div>
          <p className="estado-titulo">Rain</p>
          <p className="parametros">{data.data[0].precip}</p>
          <p className="medidas">%</p>

          <ProgressBarDiv>
            <progress max="100" value={data.data[0].precip} />
          </ProgressBarDiv>
        </div>

        <div>
          <p className="estado-titulo">Humidity</p>
          <p className="parametros">{parseFloat(data.data[0].rh).toFixed(0)}</p>
          <p className="medidas">%</p>

          <ProgressBarDiv>
            <progress
              max="100"
              value={parseFloat(data.data[0].rh).toFixed(0)}
            />
          </ProgressBarDiv>
        </div>
      </EstadoClima>
    </Fragment>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Clima;
