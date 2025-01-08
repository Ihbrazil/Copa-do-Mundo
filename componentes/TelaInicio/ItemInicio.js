import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import estilos from "./estilos";

export default function ItemInicio(props) {
  return (
    <View style={estilos.itemMenu}
        onTouchEnd={props.acao}
    >
        <ImageBackground
            style={estilos.imagemFundoMenu}
            source={props.img_BG}
            borderRadius={20}
        >
            <View style={estilos.fundoEscuro}>
                <Text
                    style={estilos.textoMenu}>
                    {props.texto}
                </Text>
            </View>

        </ImageBackground>
        
    </View>
  );
}