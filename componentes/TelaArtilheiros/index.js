import React from 'react';
import { ImageBackground, Text, ScrollView } from 'react-native';

import ademir from "../../assets/images/artilheiros/ademir.png";
import jairzinho from "../../assets/images/artilheiros/jairzinho.png";
import pele from "../../assets/images/artilheiros/pele.png";
import ronaldo from "../../assets/images/artilheiros/ronaldo.png";
import vava from "../../assets/images/artilheiros/vava.png";

import imgFundo from "../../assets/images/background.png";

import estilosGlobal from '../estilos/estilos';

import ItemArtilheiro from './itemArtilheiro';

export default function TelaArtilheiros() {
  return (
    <ScrollView>
        
        <ImageBackground
          style={estilosGlobal.imagemFundo}
          source={imgFundo}
          resizeMode="cover"
          blurRadius={10}
        >
            <Text style={estilosGlobal.titulo}>
              Artilheiros
            </Text>

            <ItemArtilheiro
              foto={ronaldo}
              nome="Ronaldo"
              gols="15"
              anos="1994 - 1998 - 2002 - 2006"
            />

            <ItemArtilheiro
              foto={pele}
              nome="Pelé"
              gols="12"
              anos="1958 - 1962 - 1966 - 1970"
            />

            <ItemArtilheiro
              foto={ademir}
              nome="Ademir"
              gols="9"
              anos="1950"
            />

            <ItemArtilheiro
              foto={vava}
              nome="Vavá"
              gols="9"
              anos="1958 - 1962"
            />
            <ItemArtilheiro
              foto={jairzinho}
              nome="Jairzinho"
              gols="9"
              anos="1966 - 1970 - 1974"
            />

        </ImageBackground>

    </ScrollView>
  );
}