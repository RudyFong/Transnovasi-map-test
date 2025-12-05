// In App.js in a new project

import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../Pages/Home.page';
import HomeIndexPage from '../Pages/HomeIndex.page';


const Stack = createNativeStackNavigator();

function MainRoutes() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeIndex"
      >
        <Stack.Screen
          name="HomeIndex"
          component={HomeIndexPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoutes;