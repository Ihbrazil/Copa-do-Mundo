import React from 'react';
import { ImageBackground, Text, View, Image } from 'react-native';

import estilos from "./estilos";

export default function ItemArtilheiro(props) {
  return (
    <View style={estilos.itemArtilheiros}>

      <ImageBackground
        style={estilos.imagemFundoArtilheiros} borderRadius={20}
        resizeMode='stretch'
        source={props.foto}
      >
        <View style={estilos.fundoEscuro}>
          
          <View style={estilos.areaGols}>
      
              <Text style={estilos.nome}>
                {props.nome}
              </Text>

              <Text style={estilos.gols}>
                    {props.gols} gols
              </Text>

          </View>

          <Text style={estilos.anos}>
            {props.anos}
          </Text>
        
        </View>

      </ImageBackground>
    </View>
  );
}