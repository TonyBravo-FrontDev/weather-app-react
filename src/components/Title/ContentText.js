import React, { Fragment, useState, useEffect } from "react";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { ThemeProvider } from "styled-components";
import Formulario from "../app/Formulario";
import { lightTheme, darkTheme } from "../darkmode/Themes";
import VideoBg from "../bgVideo/VideoBg";
import Stock from "../bgVideo/Stock";
import Error from "../app/Error";
import PropTypes from "prop-types";
import axios from "axios";
import "./Social.css";
import "./Weatherapp.css";

const Container = styled.main`
  @media (max-width: 599px) {
    width: 100%;
    height: 99vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    width: 80%;
    margin: auto;
    gap: 15rem;
    margin-top: 5rem !important;
    display: grid;
    grid-template-columns: 55% 25%;
  }

  @media (min-width: 1400px) {
    width: 80%;
    margin: auto;
    margin-top: 5rem !important;
    display: grid;
    grid-template-columns: 50% 22%;
  }

  @media (min-width: 1800px) {
    display: grid;
    grid-template-columns: 50% 20%;
    width: 80%;
    margin: auto;
    gap: 22rem;
    margin-top: 6rem !important;
  }
`;

const ContainerText = styled.div`
  @media (max-width: 599px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Titulo = styled.h1`
  font-family: "Montserrat", sans-serif;
  @media (min-width: 1200px) {
    font-size: 76px;
  }
  @media (min-width: 1800px) {
    font-size: 96px;
  }
`;

const Subtitulo = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;

  &::after {
    content: "";
    display: block;
    width: 7.5rem;
    height: 2px;
    margin-top: 1rem;
    background: #999999;
  }

  @media (min-width: 1200px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1400px) {
    font-size: 1rem;
  }

  @media (min-width: 1800px) {
    font-size: 1rem;
  }
`;

const TitleDev = styled.h3`
  font-weight: 500;
`;

const Parrafo = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 25px;
`;

const Enlace = styled.a`
  font-size: 30px;
  margin-right: 2rem;
`;

const ContainerD = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 599px) {
    display: none;
  }

  @media (min-width: 1200px) and (max-height: 950px) {
    margin-top: 9rem;
  }

  @media (min-width: 1400px) {
    margin-top: 9rem;
  }
  @media (min-width: 1800px) {
    margin-top: 4.5rem;
  }
`;

const Derechos = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

const ContextText = ({ titulo }) => {
  // Hooks de Buscador
  const [datos, setDatos] = useState({
    pais: "",
    ciudad: "",
  });

  // eslint-disable-next-line
  const [theme, setTheme] = useState("light");
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});

  const { pais, ciudad } = datos;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const idioma = "en";
        const key = "e00bfc653bd7429887cdd5cf1b4263e7";
        const url = `https://api.weatherbit.io/v2.0/current?&city=${ciudad}&country=${pais}&key=${key}&lang=${idioma}`;

        const respuesta = axios.get(url);
        const resultado = await respuesta;

        setResultado(resultado);
        setConsultar(false);
      }
    };
    // Consultar la API
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  let component;

  if (resultado.status === 204 || resultado.status === 404) {
    component = <Error mensaje="No se encontraron resultados" />;
  } else {
    component = <VideoBg resultado={resultado} />;
  }

  return (
    <Fragment>
      <Container>
        <ContainerText>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Titulo className="title">{titulo}</Titulo>
            <Subtitulo className="subtitle">
              SEE THE WEATHER OF YOUR CITY WITH A UNIQUE EXPERIENCE
            </Subtitulo>
            <Parrafo className="parrafo">
              Check the weather in your city using our app, get a user
              experience like no other weather app.{""}{" "}
              <strong>Search your city!</strong>
            </Parrafo>
            <TitleDev className="title-front">
              Frontend Developer - Tony Bravo
            </TitleDev>

            <div>
              <Enlace
                href="https://www.instagram.com/tonybravo11/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} className="instagram" />
              </Enlace>
              <Enlace href="https://twitter.com/Tony_Bravo11" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="twitter" />
              </Enlace>
              <Enlace
                href="https://www.linkedin.com/in/antonio-diego-bravo-150a2718a/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
              </Enlace>
            </div>
          </ThemeProvider>
        </ContainerText>

        <div className="weather-app">
          <Formulario
            datos={datos}
            setDatos={setDatos}
            setConsultar={setConsultar}
            resultado={resultado}
          />
          {/* Componente de videos */}
          {component}
          <Stock />
        </div>
      </Container>

      <ContainerD>
        <Derechos className="copy">
          &copy; 2020 All rights reserved - Antonio Diego Bravo
        </Derechos>
      </ContainerD>
    </Fragment>
  );
};

ContextText.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default ContextText;
