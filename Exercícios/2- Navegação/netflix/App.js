import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

//Lugar onde será guardado o token
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from "./src/pages/login/login";
import Cadastro from "./src/pages/cadastro/cadastro";
import Filmes from "./src/pages/filmes/filmes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.userToken == null ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Login'
              }}
            />
            <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
              title: 'Cadastro'
            }}
            />
          </>
        ) : (
          <Stack.Screen name="Filmes" component={Filmes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}