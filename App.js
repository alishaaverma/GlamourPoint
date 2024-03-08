import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './src/Signin';
import Splash from './src/Splash';
import Signup from './src/Signup';
import Home from './src/Home';
import AddSalon from './src/AddSalon';
import Book from './src/Book';
import Naykaa from './src/makeup/Naykaa';
import Purplle from './src/makeup/Purplle';
import Smytten from './src/makeup/Smytten';
import Sugar from './src/makeup/Sugar';
import Search from './src/Search';
import ResetPass from './src/ResetPass';
import Drawer from './src/Drawer';
import Aboutus from './src/Aboutus';



export default function App(){
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
    <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddSalon" component={AddSalon} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Naykaa" component={Naykaa} />
      <Stack.Screen name="Purplle" component={Purplle} />
      <Stack.Screen name="Smytten" component={Smytten} />
      <Stack.Screen name="Sugar" component={Sugar} />
      <Stack.Screen name="Search" component={Search} options={{headerShown:true,title:'Search Salon'}} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
      <Stack.Screen name="Drawer" component={Drawer}/>
      <Stack.Screen name="Aboutus" component={Aboutus}/>
    </Stack.Navigator>
  </NavigationContainer>
)
}