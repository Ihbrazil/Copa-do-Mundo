import React from 'react';
import { ImageBackground, Text, View, Image } from 'react-native';

import estilos from "./estilos";

export default function ItemFinal(props) {
  return (
    <View style={estilos.itemFinais}>

      <ImageBackground
        style={estilos.imagemFundoFinais}
        borderRadius={20}
        source={props.estadio}
      >
    
        <View style={estilos.fundoEscuro}>
    
            <Text style={estilos.ano}>
              {props.anoLocal}
            </Text>
      
            <View style={estilos.areaResultado}>
                
                <Image style={estilos.bandeira}
                  source={props.bandeiraVitoria}
                />
                <Text style={estilos.resultado}>
                  {props.resultado}
                </Text>
                <Image style={estilos.bandeira}
                  source={props.bandeiraDerrota}
                />

            </View>

        </View>

      </ImageBackground>
    </View>
  );
}