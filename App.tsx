/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor={'black'}
        barStyle={'light-content'}
      />

      <CalculadoraScreen/>
    </SafeAreaView>
  );
};

export default App;

