import * as React from 'react';
import { AppRegistry, ImageBackground } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import { name as appName } from './app.json';
import { Provider as StoreProvider } from 'react-native-paper';
import { LogIn } from './Components/App/LogIn';
import { StatusBar } from 'expo-status-bar';
import AppDrawer from './Components/Router/AppDrawer';
import HomeList from './Components/Elements/HomeList';
import HomeApp from './Components/Lander/Home';

export default function Main() {

  const [validate,setValidate] = React.useState(false)

  return (<><StatusBar hidden={false}/>
    <StoreProvider>
      <PaperProvider>
        {!validate ? <LogIn setValidate={setValidate}/> : <AppDrawer setValidate={setValidate}/> }
        {/* <AppDrawer/> */}
        {/* <HomeApp/> */}
        {/* <LogIn/> */}
        {/* <HomeList/> */}
      </PaperProvider>
    </StoreProvider>
    </>);
}

AppRegistry.registerComponent(appName, () => Main);
