import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, Text,View } from 'react-native';
import NavigatorIndex from '.';
import Screen from '../components/Screen';
import { getData, is_null } from '../utils/helpers';
import { useDispatch } from 'react-redux';
import { logout, setUser } from '../utils/redux/slices/userSlice';

const Splash=()=> {

  const dispatch=useDispatch()
  const [state,setState]=React.useState({inited:false})
  React.useEffect(()=>{
    setTimeout(()=>{
      checkUser()
    },1000)
  },[])

  const checkUser=async()=>{
    let user=await getData('@user')
    user={
      "id": 15,
      "username": "kminchelle",
      "email": "kminchelle@qq.com",
      "firstName": "Jeanne",
      "lastName": "Halvorson",
      "gender": "female",
      "image": "https://robohash.org/Jeanne.png?set=set4",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
    }
    // console.log('user',user);
    if(!is_null(user)){
      // let userApi=await GetUserApi()
      let userApi=user

      if(userApi && userApi.token==user.token){
        dispatch(setUser(userApi))
      }else{
        dispatch(logout())
      }
    }else{
        dispatch(logout())
    }

    setState(s=>({...s,inited:true}))
  }

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