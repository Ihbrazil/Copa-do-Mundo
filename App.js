import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicio from "./componentes/TelaInicio";
import TelaFinais from './componentes/TelaFinais';
import TelaArtilheiros from './componentes/TelaArtilheiros';
import TelaTitulos from './componentes/TelaTitulos';

const Navegacao = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator>
        <Navegacao.Screen name="Início" component={ TelaInicio} />
        <Navegacao.Screen name="Finais" component={ TelaFinais} />
        <Navegacao.Screen name="Artilheiros" component={ TelaArtilheiros} />
        <Navegacao.Screen name="Títulos" component={ TelaTitulos} />
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}
