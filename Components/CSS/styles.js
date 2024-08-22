import { StyleSheet } from "react-native";
import { MD3DarkTheme as DefaultTheme } from "react-native-paper";

export const styles = StyleSheet.create({
    
    AppTheme: {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          elevation: {'level0': 'transparent'}
        },
      },

    LoIncontainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 15,
        // paddingBottom: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },

    HeroImg: {
        flex: 1,
    },

    Crtcontainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },

    spaceTxtBox: {
        padding: 10,
        paddingTop: 330,
    },

    CrtspaceTxtBox: {
        paddingTop: 50,
        padding: 10,
    },

    CrtReTxtBox: {
        padding: 10,
    },

    spaceBtn: {
        paddingTop: 30,
        flexDirection: "row"
    },

    spaceCrtBtn: {
        paddingTop: 50,
    },

    spaceCrtCanBtn: {
        paddingTop: 20,
    },

    LogBtn: {
        width: 110,
        height: 40,
    },

    LoadBtn: {
        width: 0,
        height: 40,
    },

    CrtBtn: {
        width: 180,
        height: 40,
    },

    AppText: {
        width: 220,
        height: 45,
        // backgroundColor: 'rgba(0,0,0,0)',
        backgroundColor: 'black',
        borderRadius: 100,
    },

    AppCrtText: {
        width: 260,
        height: 45,
        // borderBlockColor: none,
    },

    CrtTitle: {
        fontFamily: 'sans-serif',
    },

    HomeMenu: {
        backgroundColor: 'black',
        flex: 1,
        padding: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
    },

    HomeMenuBtn: {
        width: 380,
        height: 50,
    },

    ContentMenu: {
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    buttonImage: {
        width: 150,
        height: 260,
    },

    scrollViewContent: {
        flexGrow: 1,
    },

    HomeSpace: {
        padding: 5,
    },

    slideShow: {
        flex: 1,
    },

    slideBtnV: {
        flexDirection: 'row',
        padding: 5,
        paddingTop: 40,
        justifyContent: 'space-between'
    },

    slideButton: {
        width: 0,
        height: 40,
    },

    BannerTxt: {
        padding: 10
    },

    vidContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
    
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
      },

})