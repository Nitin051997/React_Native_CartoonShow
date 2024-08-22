import { Appbar, Button } from 'react-native-paper';
import { useState } from 'react';
import { styles } from '../CSS/styles';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import HomeList from '../Elements/HomeList';
import { HomeBanner } from '../Elements/HomeBanner';

// const HomeApp = ({ route }) => {
const HomeApp = ({ setValidate, navigation, setFilEpisode }) => {

    const [homeIc,setHomeIc] = useState('menu')
    const [showMenu,setShowMenu] = useState(false)
    // const { setValidate } = route.params
    // const { navigation } = route.params

    const handleMenu = () => {
        if(homeIc == 'menu'){
            setHomeIc('close')
            setShowMenu(true)
        }else{
            setHomeIc('menu')
            setShowMenu(false)
        }
    }

    const handleLogOut = () => {
        setValidate(false)
    }

    const handleNavigate = (toPath,filData) => {
        navigation.navigate(toPath)
        setFilEpisode(filData)
    }

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more reorder-horizontal');

  return (<>
            <Appbar.Header theme={{ colors: { primary: 'black' } }} dark={false} mode='center-aligned'>
                <Appbar.Action icon={homeIc} onPress={handleMenu} />
                <Appbar.Content title="Cartoon NetWork" />
                {/* <Appbar.BackAction onPress={_goBack} /> */}
                {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
                {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
            </Appbar.Header>
                {showMenu ? <View style={styles.HomeMenu}>
                    <Button mode="contained" buttonColor="black" loading={false} style={styles.HomeMenuBtn} onPress={handleMenu}>Menu</Button>
                    <Button mode="contained" buttonColor="black" loading={false} style={styles.HomeMenuBtn} onPress={() => console.log('Category')}>Category</Button>
                    <Button mode="contained" buttonColor="black" loading={false} style={styles.HomeMenuBtn} onPress={handleLogOut}>Log Out</Button>
                </View> : <><HomeBanner/>
                    <View style={styles.BannerTxt}>
                        <Text variant="titleLarge">All Cartoon</Text>
                    </View>
                <ScrollView horizontal>
                    <HomeList handleNavigate={handleNavigate}/>
                </ScrollView>
                    </>}
      </>);
};

export default HomeApp;