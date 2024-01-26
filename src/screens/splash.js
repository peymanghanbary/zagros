import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, Text,View } from 'react-native';
import NavigatorIndex from '.';
import Screen from '../components/Screen';

const Splash=()=> {

  const [state,setState]=React.useState({inited:false})
  React.useEffect(()=>{
    setTimeout(()=>{
      setState(s=>({...s,inited:true}))
    },1000)
  },[])

  if(state.inited){
    return (
      <NavigatorIndex/>
    )
  }

  return (
      <Screen>
          <View style={{...styles.container}}>
            <StatusBar barStyle='dark-content' backgroundColor={'#fff'}/>
            <Text style={{marginBottom:20,fontSize:20}}>loading...</Text>
            <ActivityIndicator color={'#000'}/>
          </View>
      </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Splash