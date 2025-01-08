import React from 'react';
import { ImageBackground, Text, ScrollView, View, Image } from 'react-native';

import estilos from "./estilos";

export default function ItemTitulo(props) {
  return (
    <ScrollView style={estilos.itemTitulos}>

      <ImageBackground
        style={estilos.imagemFundoTitulos}
        borderRadius={20}
        resizeMode='stretch'
        source={props.cidade}
      >
      <View style={ estilos.fundoEscuro }>
        <View style={ estilos.areaTitulos }>
        
          <Text style={ estilos.pais }>
              {props.pais}
          </Text>

          <Image style={ estilos.titulo} source={props.titulo} />
        
        </View>
        
        <Text style={ estilos.ano}>
          {props.ano}
        </Text>
      </View>  
      
      </ImageBackground>
    </ScrollView>
  );
}