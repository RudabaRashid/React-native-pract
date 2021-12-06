
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View, Button,  } from 'react-native';



/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

import Navigator from "./navigator/Navigator";

const Stack= createStackNavigator();

const App = () => {

  return(
    <Navigator/>
  );
 /*  return (
   <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#fa8072',
        },
        headerTintColor:'#ffe4e1',
        hearderTitleStyle:{
        fontWeight:'bold',
        fontSize:25
        }
      }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component ={HomeScreen}></Stack.Screen>
        <Stack.Screen name="About" component ={AboutScreen}></Stack.Screen>
      </Stack.Navigator>
     
    </NavigationContainer>


  );*/

};
/*
function HomeScreen({navigation})
{

   let data = {name:'Rudaba', email:'rudaba@gmail.com',address:'noida'}
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
      <Text>
        Home Screen
      </Text>
      <Button onPress={() => navigation.push('About',data)} title=" go to About Page"  />
    </View>
  );
};


function AboutScreen({route}){
  //console.warn(route.params);
  let data = route.params;
  return(
    <View>
      <Text >About Screen</Text>
      <Text style ={{fontSize:30}}>{data.name}</Text>
      <Text style ={{fontSize:30}}>{data.email}</Text>
      <Text style ={{fontSize:30}}>{data.address}</Text>
    </View>
  );
};*/

export default App;
