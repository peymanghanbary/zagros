import React, { useState } from 'react';
import Screen from '../../components/Screen';
import { StyleSheet, Text, View,TextInput, Image, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import { colors, dimensions } from '../../utils/style';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { is_null, toast } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { setUser } from '../../utils/redux/slices/userSlice';

const Login=({navigation})=> {
    
    const dispatch=useDispatch()
    const [state,setState]=useState({loading:false,username:"kminchelle",password:"0lelplR"})
    const login=()=>{

        if(is_null(state.username) || is_null(state.password)){
            return toast("username and password are required!")
        }

        setState(s=>({...s,loading:true}))
        setTimeout(()=>{setState(s=>({...s,loading:false}))},5000)
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: state.username,
                password: state.password,
                // expiresInMins: 60, // optional
            })
        })
        .then((res)=>{
            console.log('res.json()',res.json());
            setState(s=>({...s,loading:false}))
            dispatch(setUser(res.json()))
        })
    }
    
    return (
        <Screen py={0}>
            <Header navigation={navigation} title="Login Screen"/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Animated.View entering={FadeInDown.duration(800)} style={styles.container}>
                    <Image source={require('../../../assets/login.gif')} style={{width:250,height:250,marginTop:-150}}/>
                    <TextInput placeholder='Enter Username' value={state.username} style={styles.input}/>
                    <TextInput placeholder='Enter Password' value={state.password} style={styles.input}/>

                    <TouchableOpacity onPress={login} style={styles.button}>
                        <Text style={styles.buttonTitle}>Login</Text>
                        {state.loading && (<ActivityIndicator style={{marginLeft:5,marginTop:3}} color={'#fff'}/>)}
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:10,
      minHeight:dimensions.h-60
    },
    input:{
        backgroundColor:'#fff',
        width:'100%',
        borderRadius:10,
        paddingHorizontal:10,
        height:50,
        borderWidth:2,
        borderColor:'#eee',
        marginBottom:10
    },
    button:{
        width:'100%',
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center',
        minHeight:50,
        borderRadius:15,
        marginTop:10,
        flexDirection:'row'
    },
    buttonTitle:{
        color:'white',
        fontSize:16,
        fontWeight:'700'
    }
});

export default Login