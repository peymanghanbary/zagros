import React from 'react';
import Screen from '../../components/Screen';
import { StyleSheet, Text, View,TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { colors, dimensions } from '../../utils/style';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Login=({navigation})=> {
    
    return (
        <Screen py={0}>
            <Header navigation={navigation} title="Login Screen"/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Animated.View entering={FadeInDown.duration(800)} style={styles.container}>
                    <Image source={require('../../../assets/login.gif')} style={{width:250,height:250,marginTop:-150}}/>
                    <TextInput placeholder='Enter Username' value='' style={styles.input}/>
                    <TextInput placeholder='Enter Password' value='' style={styles.input}/>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonTitle}>Login</Text>
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
    },
    buttonTitle:{
        color:'white',
        fontSize:16,
        fontWeight:'700'
    }
});

export default Login