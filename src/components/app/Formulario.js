import styled from "styled-components";
import React, { useState } from "react";
import Clima from "./Clima";
import Error from "./Error";
import "./styles.css";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: white;

  @media (max-width: 599px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Navbar = styled.nav`
  width: 90%;
  margin: auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 400;
`;

const Formulario = ({ datos, setDatos, setConsultar, resultado }) => {
  const [error, setError] = useState(false);
  // Extraer los datos de ciudad y pais
  const { pais, ciudad } = datos;

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pais.trim === "" || ciudad.trim() === "") {
      return setError(true);
    } else {
      setError(false);
      // Pasarlo al componente principal
      setConsultar(true);
    }
  };

  let component;

  if (error) {
    component = <Error mensaje="No results" />;
  } else {
    component = <Clima resultado={resultado} />;
  }

  // Abrir el boton del Menu
  const openMenu = () => {
    document.querySelector(".nav-link-menu").classList.toggle("open");
    document.querySelector(".menu-btn").classList.toggle("open");
  };

  

  return (
    <Container>
      <Navbar>
        <div>
          
        </div>
        <div>
          <div onClick={openMenu} className="menu-btn">
            <div></div>
          </div>

          <ul className="nav-link-menu">
            <li>
              <form onSubmit={handleSubmit}>
                <select
                  name="pais"
                  value={pais}
                  onChange={handleChange}
                  className="select"
                >
                  <option value="">Select a country</option>
                  <option value="CA">Canadá</option>
                  <option value="US">United States</option>
                  <option value="MX">México</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="PE">Perú</option>
                </select>
                <input
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  value={ciudad}
                  onChange={handleChange}
                  className="input-search"
                  placeholder="Search city"
                />
                <input
                  type="submit"
                  value="Search Weather"
                  className="submit"
                  onClick={openMenu}
                />

                {error ? <Error mensaje="Both fields are required" /> : null}
              </form>
            </li>
          </ul>
        </div>
      </Navbar>

      {component}
    </Container>
  );
};

Formulario.propTypes = {
  datos: PropTypes.object.isRequired,
  setDatos: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired,
  resultado: PropTypes.object.isRequired,
};

export default Formulario;
