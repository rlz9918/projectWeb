import * as React from "react";
import { Box } from "@mui/material";
import bibliografia from "../../assets/Banner/bibliografia.png";
import "./acercaDe-style.css";
export default function AboutMe(props) {
  return (
    <>
      <Box class="biblio-container" id="inicio" ref={props.reference}>
        <img
          src={`${bibliografia}`}
          alt="bibliografia"
          class="biblo-img"
          loading="lazy"
        />
        <Box component="p" class="description-biblo">
        Soy una persona que vive en busca de la creatividad musical, tocando lo
        que nace de mi alma y todo aquello que da mil vueltas en mi cabeza.
        Siempre tuve afinidad por la música, y la pandemia fue lo que me dio el
        espacio para volcarme en lo que sentía. Siempre me ha gustado hacer y
        escuchar música, y ahora que tengo la oportunidad de compartir esta
        pasión con los demás. Espero que puedas encontrar tu camino en mi mundo
        y sentir las mismas emociones que yo sobre la música, el arte y la vida.
        Lo que expreso en mis canciones puede ser a veces alegre o depre pero mi
        realidad es que la vida se basa de ciclos. en los que uno no siempre
        puede estar bien. Y a veces esta bien estar mal.
        </Box>
      </Box>
    </>
  );
}
