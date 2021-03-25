import React from "react";
import Despejado from "./Despejados";
import Soleado from "./Soleado";
import Frio from "./Frio";
import Lluvia from "./Lluvia";
import Heavyrain from "./Heavyrain";
import Nublado from "./Nublado";
import Snow from "./Snow";
import Llovizna from "./Llovizna";
import Tormenta from "./Tormenta";
import TormentaDos from "./TormentaDos";
import LluviaLigera from "./LluviaLigera";
import Fog from "./Fog";
import IcyFog from "./IcyFog";
import Haze from "./Haze";
import HeavySnowRain from "./HeavySnowRain";
import Snowrain from "./Snowrain";
import PropTypes from 'prop-types';

const VideoBg = ({ resultado }) => {
  const { data } = resultado;

  if (!data) return null;

  let datos = data.data[0].weather.code;
  let video;

  // eslint-disable-next-line
  if (datos == "800") {
    return (video = <Despejado />);
  }
  // eslint-disable-next-line
  if (datos == "801" || datos == "802") {
    return (video = <Soleado />);
  }
  // eslint-disable-next-line
  if (datos == "600" || datos == "601") {
    return (video = <Frio />);
  }
  // eslint-disable-next-line
  if (datos == "602" || datos == "610" || datos == "611" || datos == "612") {
    return (video = <Snow />);
  }
  // eslint-disable-next-line
  if (datos == "500" || datos == "501") {
    return (video = <Lluvia />);
  }
  // eslint-disable-next-line
  if (datos == "502" || datos == "511" || datos == "522") {
    return (video = <Heavyrain />);
  }
  // eslint-disable-next-line
  if (datos == "300" || datos == "302") {
    return (video = <Llovizna />);
  }
  // eslint-disable-next-line
  if (datos == "803" || datos == "804") {
    return (video = <Nublado />);
  }
  // eslint-disable-next-line
  if (
    datos == "200" ||
    datos == "233" ||
    datos == "232" ||
    datos == "231" ||
    datos == "230"
  ) {
    return (video = <Tormenta />);
  }
  // eslint-disable-next-line
  if (datos == "201" || datos == "202") {
    return (video = <TormentaDos />);
  }
  // eslint-disable-next-line
  if (datos == "301" || datos == "302" || datos == "520" || datos == "521") {
    return (video = <LluviaLigera />);
  }
  // eslint-disable-next-line
  if (datos == "700" || datos == "741") {
    return (video = <Fog />);
  }
  // eslint-disable-next-line
  if (datos == "751") {
    return (video = <IcyFog />);
  }
  // eslint-disable-next-line
  if (datos == "721" || datos == "731" || datos == "711") {
    return (video = <Haze />);
  }
  // eslint-disable-next-line
  if (datos == "621" || datos == "623") {
    return (video = <Snowrain />);
  }
  // eslint-disable-next-line
  if (datos == "622") {
    return (video = <HeavySnowRain />);
  }

  return { video };
};

VideoBg.propTypes = {
  resultado: PropTypes.object.isRequired
}

export default VideoBg;
