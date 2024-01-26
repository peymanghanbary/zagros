import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Screen from '../../components/Screen';
import Animated from 'react-native-reanimated';
import Header from '../../components/Header';
import React from 'react';
import { ProductsApi } from '../../controllers/Products';
import { imageUrl, number_format } from '../../utils/helpers';
export default function ProductIndex({navigation}) {

  const statesRef=React.useRef({page:1,loading:false})
  const [state,setState]=React.useState({items:[]})
  React.useEffect(()=>{
    fetch({page:1})
  },[])

  const fetch=({page=1})=>{
    ProductsApi({page}).then(({data})=>{
      setState(s=>({...s,items:page==1?data:s.items.concat(data)}))
      statesRef.current.page=statesRef.current.page+1
      statesRef.current.loading=false
    })
  }

  const _onEndReached=()=>{
    if(!statesRef.current.loading){
      statesRef.current.loading=true
      fetch({page:statesRef.current.page})
    }
  }

  return (
      <Screen py={0}>
        <Header navigation={navigation} title='Latest Mobile Phones'/>

        <FlatList
          onEndReached={_onEndReached}
          contentContainerStyle={{paddingBottom:20,paddingTop:10}}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<ActivityIndicator color={'#000'}/>}
          data={state.items}
          renderItem={({item})=><Item item={item} navigation={navigation}/>}
          keyExtractor={item => item.id}
        />
      </Screen>
  );
}

export const Item=({navigation,item})=>{
  return (
    <Pressable onPress={()=>{navigation.navigate("ProductDetail",{item})}} style={{backgroundColor:'#fff',height:125,borderRadius:15,marginBottom:10,alignItems:'center',paddingHorizontal:10,flexDirection:'row'}}>
      <View style={{width:100,height:100}}>
      <Animated.Image sharedTransitionTag='sharedTag' alt='image' source={{uri:imageUrl(item.image.path)}} style={{width:'100%',height:'100%',borderRadius:20,borderWidth:1}}/>
      <View style={{position:'absolute',borderRadius:10,width:'100%',height:'100%',backgroundColor:'rgba(111, 115, 119, 0.07)'}}/>
      </View>
      <View style={{paddingHorizontal:15,flex:1,height:100,justifyContent:'space-between',paddingVertical:5}}>
        <Text style={{textAlign:'left',fontWeight:'bold'}}>{item.title}</Text>
        <Text style={{textAlign:'left'}}>Last Update : {item.last_update}</Text>
        <Text style={{textAlign:'left'}}>{number_format(item.amount)} T</Text>
      </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    paddingVertical:20
  }
});
