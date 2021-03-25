import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./Themes";
import "./ButtonDark.css";

const StyledApp = styled.div`
  width: 90%;
  height: 10vh;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 599px) {
    display: none;
  }

  @media(min-width: 1200px) {
    display: flex;
  }
`;

const Label = styled.label`
  display: block;
  width: 20px;
  height: 20px;
  line-height: 30px;
  border-radius: 32px;
  background: none;
`;

const ButtonDark = () => {
  // Leer el localStorage al cargar la pagina
  useEffect(() => {
    const button = document.querySelector(".button-dark");
    if (localStorage.getItem("dark-mode") === "true") {
      setTheme("dark");
      button.classList.add("open");
    } else {
      setTheme("light");
      button.classList.remove("open");
    }
  }, []);

  // Definimos el state del tema Dark Mode
  const [theme, setTheme] = useState("light");

  // Esperar un Click para cambiar el color del body HTML
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    const button = document.querySelector(".button-dark");

    if (theme === "light") {
      localStorage.setItem("dark-mode", true);
      button.classList.add("open");
    } else {
      localStorage.setItem("dark-mode", false);
      button.classList.remove("open");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp>
        <button className="button-dark" onClick={() => themeToggler()}>
          <Label></Label>
          <Label></Label>
        </button>
      </StyledApp>
    </ThemeProvider>
  );
};

export default ButtonDark;
