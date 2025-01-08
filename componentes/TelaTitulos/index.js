import React from 'react';
import { ImageBackground, Text, ScrollView } from 'react-native';

import imgFundo from "../../assets/images/background.png";

import cidademexico from "../../assets/images/cidades/cidademexico.png";
import pasadena from "../../assets/images/cidades/pasadena.png";
import santiago from "../../assets/images/cidades/santiago.png";
import solna from "../../assets/images/cidades/solna.png";
import yokohama from "../../assets/images/cidades/yokohama.png";

import campeao from "../../assets/images/1.png";
import bicampeao from "../../assets/images/2.png";
import tricampeao from "../../assets/images/3.png";
import tetracampeao from "../../assets/images/4.png";
import pentacampeao from "../../assets/images/5.png";

import estilosGlobal from '../estilos/estilos';

import ItemTitulo from '../TelaTitulos/itemTitulo';

export default function TelaTitulos() {
  return (
    <ScrollView>
        <ImageBackground
          style={estilosGlobal.imagemFundo}
          source={imgFundo}
          resizeMode="cover"
          blurRadius={10}
        >

            <Text style={estilosGlobal.titulo}>
              Títulos
            </Text>

            <ItemTitulo
              cidade={solna}
              pais="Suécia"
              titulo={campeao}
              ano="1958"
            />

            <ItemTitulo
              cidade={santiago}
              pais="Chile"
              titulo={bicampeao}
              ano="1962"
            />

            <ItemTitulo
              cidade={cidademexico}
              pais="México"
              titulo={tricampeao}
              ano="1970"
            />

            <ItemTitulo
              cidade={pasadena}
              pais="EUA"
              titulo={pentacampeao}
              ano="1994"
            />

            <ItemTitulo
              cidade={yokohama}
              pais="Japão"
              titulo={pentacampeao}
              ano="1994"
            />
            
        </ImageBackground>
    </ScrollView>
  );
}