import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './auth/login';
import ProductIndex from './product';
import ProductDetail from './product/detail';

const Stack = createNativeStackNavigator();
const NavigatorIndex=()=> {
  const {user}=useSelector(s=>s.userReducer)

  if(user.loggedIn){
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="ProductIndex" component={ProductIndex} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{presentation:'containedTransparentModal',headerShown:false}}/>
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default NavigatorIndex