import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeApp from '../Lander/Home';
import { EpisodeList } from '../Elements/EpisodeList';
import HomeScreen from '../Trash/HomeScreen';
import SecondScreen from '../Trash/SecondScreen'

const Stack = createStackNavigator();

const AppDrawer = ({setValidate}) => {

  const [filEpisode,setFilEpisode] = useState()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} initialParams={{setValidate}}>
            {(props) => <HomeApp {...props} setValidate={setValidate} setFilEpisode={setFilEpisode}/>}
        </Stack.Screen>
        <Stack.Screen name="EpisodeList" initialParams={{setValidate}}>
            {(props) => <EpisodeList {...props} filEpisode={filEpisode}/>}
        </Stack.Screen>
        {/* <Stack.Screen name="EpisodeList" component={EpisodeList} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppDrawer;
