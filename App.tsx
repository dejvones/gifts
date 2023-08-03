import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { useColorScheme } from 'react-native';

import { DarkTheme, LightTheme, IColors } from './styles/colors';
import { GlobalStyles } from './styles/globalStyles';
import { Layout } from './components/feature-layout/layout';

export var Colors : IColors;

function App(): JSX.Element {
  const isDark = useColorScheme() === 'dark';
  Colors = isDark ? DarkTheme : LightTheme;

  return (
    <SafeAreaView style={GlobalStyles.main}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={Colors.bgMain}/>
      <Layout/>
    </SafeAreaView>
  );
}

export default App;