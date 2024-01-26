import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import Splash from './src/screens/splash';
import store from './src/utils/redux/store';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <Provider store={store} >
          <Splash/>
        </Provider>
      </NavigationContainer>
  );
}
