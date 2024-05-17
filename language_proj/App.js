import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import LoadingScreen from './app/Loading'
import Onboarding1Screen from './app/Onboard1';
import Onboarding2Screen from './app/Onboard2';
import Onboarding3Screen from './app/Onboard3';
import LanguageSelectScreen from './app/LanguageSelect';
import LoginScr from './app/Login';
import SeniorScreen from './app/SeniorScr';
import Listening from './app/Listening';
import Guess from './app/GuessScr';
import GardenerScreen from './app/WordsPr';


const Stack = createStackNavigator();

const App = () => {
  
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('./app/src/fonts/Fredoka-Light.ttf'),
        'Fredoka-M': require('./app/src/fonts/Fredoka-Medium.ttf'),
        'Fredoka-R': require('./app/src/fonts/Fredoka-Regular.ttf'),
      });
    }
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Onboard1" component={Onboarding1Screen} />
        <Stack.Screen name="Onboard2" component={Onboarding2Screen} />
        <Stack.Screen name="Onboard3" component={Onboarding3Screen} />
        <Stack.Screen name="LanguageSelect" component={LanguageSelectScreen} />
        <Stack.Screen name="Senior" component={SeniorScreen} />
        <Stack.Screen name="List" component={Listening} />
        <Stack.Screen name="Game" component={Guess} />
        <Stack.Screen name="Login" component={LoginScr} />
        <Stack.Screen name="Garden" component={GardenerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
