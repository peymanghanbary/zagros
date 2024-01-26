import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Screen({children,px=20,py=20,transparent=false}) {

  if(transparent){
    return (
      <View style={{...styles.container,paddingHorizontal:px,paddingVertical:py}}>
        {children}
      </View>
    );
  }
  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['#d8d4fc', '#ecedfe','#ecedfe','#fff']}
        style={{...styles.background,paddingHorizontal:px,paddingVertical:py}}
        >
          {children}
        </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex:1,
    width:'100%'
  }
});
