import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { useColorScheme } from 'react-native';

import { GlobalStyles } from './styles/globalStyles';
import { Layout } from './components/feature-layout/layout';
import { Colors } from './styles/colors';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

export var isDarkMode : boolean;

function App(): JSX.Element {
  isDarkMode = useColorScheme() === 'dark';

  const MainTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors,
      background: Colors.bgMain,
      text: Colors.text
  }};

  return (
    <NavigationContainer theme={MainTheme}>
    <SafeAreaView style={GlobalStyles.main}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={Colors.bgMain}/>
      <Layout/>
    </SafeAreaView>
    </NavigationContainer>

  );
}

export default App;