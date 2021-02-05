import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppNavigation} from './config/router'
console.disableYellowBox = true;

const App  = () => {
  return (
    <NavigationContainer>
    <AppNavigation/>
    </NavigationContainer>
  );
}
export default App;
