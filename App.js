import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,NavigationContainer } from 'react-native';
import {createStackNavigator} from 'react-native-navigation';
import {HomeScreen} from './Screens/HomeScreen';
import {MeteorScreen} from './Screens/MeteorScreen';
import {TrackerScreen} from './Screens/TrackerScreen'

const Stack=createStackNavigator()
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOption={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meteor" component={MeteorScreen} />
        <Stack.Screen name="Tracker" component={TrackerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


