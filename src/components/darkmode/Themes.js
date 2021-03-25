import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  title: "#242424",
  subTitle: "#4D4D4D",
  parrafo: "#242424",
  titleDev: "#242424",
  borderColor: "10px solid #fff",
  boxShadow: "14px 3px 31px 6px #00000033",
  transition: "all 0.8s",
  none: "none",
};

export const darkTheme = {
  body: "#242424",
  title: "#fff",
  subTitle: "#999999",
  parrafo: "#EEEEEE",
  titleDev: "#fff",
  borderColor: "10px solid #1A1A1A",
  boxShadow: "2px 16px 19px 6px #00000020",
  transition: "all 0.8s",
  none: "none",
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body} !important;
        transition: ${(props) => props.theme.transition} !important;
    }

    .title {
        color: ${(props) => props.theme.title} !important;
    }

    .subtitle {
        color: ${(props) => props.theme.subTitle} !important;
    }

    .parrafo {
        color: ${(props) => props.theme.parrafo} !important;
    }

    .title-front {
        color: ${(props) => props.theme.titleDev} !important;
    }

    .weather-app {
        border: ${(props) => props.theme.borderColor} !important;
    }

    .nav-link-menu.open, .input-search, .select {
        background-color: ${(props) => props.theme.body} !important;
        color: ${(props) => props.theme.title} !important;
    }

    .menu-btn.open div{
        background-color: ${(props) => props.theme.title} !important;
    }

    .copy {
        color: ${(props) => props.theme.title} !important;
    }

    @media(max-width: 599px) {
        .weather-app {
            border: ${(props) => props.theme.none} !important;
        }
    }

    @media(min-width: 1200px) {
        .weather-app {
            box-shadow: ${(props) => props.theme.boxShadow} !important;
        }
    }

    @media(min-width: 1800px) {
        .weather-app {
            box-shadow: ${(props) => props.theme.boxShadow} !important;
        }
    }
`;
