// In App.js in a new project

import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../Pages/Home.page';
import GenerateMemePage from '../Pages/GenerateMeme.page';

const Stack = createNativeStackNavigator();

function MainRoutes() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GenerateMeme"
          component={GenerateMemePage}
          options={({ navigation }) => ({
            title: 'Meme generator',
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
              <Button
                title="Selesai"
                color="#007AFF"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoutes;