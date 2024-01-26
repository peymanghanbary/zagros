import React from 'react';
import Screen from '../../components/Screen';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { Item } from '.';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../utils/style';
import { is_null } from '../../utils/helpers';

const ProductDetail=({navigation,route})=> {
  const {item}=route.params

  const keywords=React.useCallback(()=>{
    return item.meta_keywords.split(',')
  },[])

  return (
      <Screen py={0}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header navigation={navigation} title={item.name}/>
          <Animated.View style={{marginTop:20}} entering={FadeInDown.duration(800)}>
            <Item item={item} navigation={navigation}/>
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(800)} style={styles.description}>
            <Text style={styles.titr}>Description</Text>
            <View style={{flexDirection:'row',marginBottom:20}}>
              <Animated.View entering={FadeInDown.duration(1000).delay(0)} style={styles.attributes}>
                <MaterialIcons name="memory" size={24} color="black" />
                <Text style={styles.attributeTitle}>256 GIG</Text>
              </Animated.View>
              <Animated.View entering={FadeInDown.duration(1000).delay(100)} style={styles.attributes}>
                <MaterialIcons name="screenshot" size={24} color="black" />
                <Text style={styles.attributeTitle}>6.8 Inch</Text>
              </Animated.View>
              <Animated.View entering={FadeInDown.duration(1000).delay(200)} style={styles.attributes}>
                <MaterialIcons name="camera" size={24} color="black" />
                <Text style={styles.attributeTitle}>200 MP</Text>
              </Animated.View>
              <Animated.View entering={FadeInDown.duration(1000).delay(300)} style={styles.attributes}>
                <MaterialIcons name="battery-full" size={24} color="black" />
                <Text style={styles.attributeTitle}>5000mAh</Text>
              </Animated.View>
            </View>
            <Animated.Text entering={FadeIn.duration(2200)}>{item.meta_description}</Animated.Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(800)} style={styles.description}>
            <Text style={styles.titr}>Keywords</Text>
            <View style={{marginBottom:20}}>
              {keywords().map((value,index)=>{
                if(!is_null(value)){
                  return (
                    <Animated.View key={index} entering={FadeInDown.duration(1000).delay(0)} style={styles.keywords}>
                      <Text style={styles.keywordsTitle}>{value}</Text>
                    </Animated.View>
                  )
                }
              })}
            </View>
          </Animated.View>
        </ScrollView>
      </Screen>
  );
}


const styles = StyleSheet.create({
  description:{
    backgroundColor:'#fff',
    borderRadius:15,
    paddingHorizontal:15,
    paddingVertical:20,
    marginBottom:10
  },
  attributes:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#eee',
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:5,
    flex:1,
    marginHorizontal:4
  },
  attributeTitle:{
    fontSize:12,
    marginTop:5
  },
  keywords:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.primary,
    borderRadius:5,
    paddingHorizontal:10,
    paddingBottom:10,
    paddingTop:5,
    marginBottom:5,
  },
  keywordsTitle:{
    fontSize:12,
    marginTop:5,
    color:'white',
    fontWeight:'700'
  },
  titr:{
    fontSize:16,
    color:'black',
    fontWeight:'700',
    marginBottom:10,
  }

});

export default ProductDetail