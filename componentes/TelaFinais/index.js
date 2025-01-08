import React from 'react';
import { ImageBackground, ScrollView, Text } from 'react-native';

import estilosGlobal from '../estilos/estilos';

import imgFundo from "../../assets/images/background.png";

import brasil from '../../assets/images/bandeiras/brasil.png';
import uruguai from '../../assets/images/bandeiras/uruguai.png';
import suecia from '../../assets/images/bandeiras/suecia.png';
import tcheco from '../../assets/images/bandeiras/tchecoslovaquia.png';
import italia from '../../assets/images/bandeiras/italia.png';
import franca from '../../assets/images/bandeiras/franca.png';
import alemanha from '../../assets/images/bandeiras/alemanha.png';

import maracana from '../../assets/images/estadios/estadio_brasil.png';
import rasunda from '../../assets/images/estadios/estadio_suecia.png';
import nacional from '../../assets/images/estadios/estadio_chile.png';
import azteca from '../../assets/images/estadios/estadio_mexico.png';
import rose from '../../assets/images/estadios/estadio_eua.png';
import stade from '../../assets/images/estadios/estadio_franca.png';
import yokohama from '../../assets/images/estadios/estadio_japao.png';

import ItemFinal from './itemFinal';

export default function TelaFinais() {
  return (
    <ScrollView>
        
        <ImageBackground source={imgFundo} resizeMode="cover" blurRadius={10} style={estilosGlobal.imagemFundo}>
        
            <Text style={estilosGlobal.titulo}>Finais</Text>

            <ItemFinal
                estadio={ maracana }
                anoLocal="1950 - Maracanã, Brasil"
                bandeiraVitoria={uruguai} bandeiraDerrota={brasil}
                resultado="2x1"
            />
        
            <ItemFinal
                estadio={rasunda}
                anoLocal="1958 - Rasunda,Suécia"
                bandeiraVitoria={brasil}
                bandeiraDerrota={suecia}
                resultado="5x2"
            />
            
            <ItemFinal
                estadio={nacional}
                anoLocal="1962 - Estadio Nacional, Chile"
                bandeiraVitoria={brasil}
                bandeiraDerrota={tcheco}
                resultado="3x1"
            />
            
            <ItemFinal
                estadio={azteca}
                anoLocal="1970 - Estádio Azteca, México"
                bandeiraVitoria={brasil}
                bandeiraDerrota={italia}
                resultado="4x1"
            />
            
            <ItemFinal
                estadio={rose}
                anoLocal="1994 - Rose Bowl, EUA"
                bandeiraVitoria={brasil}
                bandeiraDerrota={italia}
                resultado="0x0"
            />
            
            <ItemFinal
                estadio={stade}
                anoLocal="1998 - Stade de France, França"
                bandeiraVitoria={franca}
                bandeiraDerrota={brasil}
                resultado="3x0"
            />
            
            <ItemFinal
                estadio={yokohama}
                anoLocal="2002 - Yokohama, Japão"
                bandeiraVitoria={brasil}
                bandeiraDerrota={alemanha}
                resultado="2x0"
            />

        </ImageBackground>
        
    </ScrollView>
  );
}