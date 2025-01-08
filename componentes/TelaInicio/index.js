import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import imgFundo from "../../assets/images/background.png";
import imgArtilheiros from "../../assets/images/bg_artilheiros.png";
import imgFinais from "../../assets/images/bg_finais.png";
import imgTitulos from "../../assets/images/bg_titulos.png";

import ItemInicio from './ItemInicio';

import estilosGlobal from '../estilos/estilos';

export default function TelaInicio(props) {
    const abrirFinais = () => {
        props.navigation.navigate("Finais");
    }

    const abrirArtilheiros = () => {
        props.navigation.navigate("Artilheiros");
    }

    const abrirTitulos = () => {
        props.navigation.navigate("Títulos");
    }

  return (
    <View>
        <ImageBackground
            style={estilosGlobal.imagemFundo}
            source={imgFundo}
            resizeMode="cover"
            blurRadius={10}
        >
            <Text style={estilosGlobal.titulo}>
                Brasil nas copas do mundo
            </Text>

            <ItemInicio
                acao={ abrirFinais }
                img_BG={imgFinais}
                texto="Finais"
            />

            <ItemInicio
                acao={ abrirArtilheiros }
                img_BG={imgArtilheiros}
                texto="Artilheiros"
            />

            <ItemInicio
                acao={ abrirTitulos }
                img_BG={imgTitulos}
                texto="Títulos"
            />    
        </ImageBackground>
    </View>
  );
}