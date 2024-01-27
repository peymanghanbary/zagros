import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Header({navigation,title="",rightElement=null}) {

  const _handleGoBack=React.useCallback(()=>{
    // return console.log('navigation',navigation);
    if(navigation.canGoBack()){
      navigation.goBack(null)
    }
  },[])
  return (
    <View style={styles.container}>
        {navigation.canGoBack() && (
          <Pressable onPress={_handleGoBack} style={styles.goBack}>
            <Entypo name="chevron-left" size={20} color="black" />
          </Pressable>
        )}
        <Text style={styles.title}>{title}</Text>
        {rightElement}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height:60,
    alignItems:'center',
  },
  title:{
    color:'#5b689d',
    fontWeight:'700',
    fontSize:18,
    flex:1,
    textAlign:'left'
  },
  goBack:{
    backgroundColor:'#ffffff',
    width:35,
    height:35,
    borderRadius:30,
    marginRight:15,
    justifyContent:'center',
    alignItems:'center',
  }
});
