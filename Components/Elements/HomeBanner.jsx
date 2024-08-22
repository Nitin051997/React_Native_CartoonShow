import { ImageBackground, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { styles } from "../CSS/styles"
import data from "../JSON/BannerData.json"
import { useState } from "react"

export const HomeBanner = () => {

    const [cover,setCover] = useState()
    const [banner,setBanner] = useState(0)
    const [bData,setBdata] = useState(data)

    const handleBack = () => {
        if(banner == 0){
            setBanner(bData.length - 1)
        }else{
            setBanner(banner - 1)
        }
    }

    const handleGo = () => {
        if(bData.length - 1 > banner){
            setBanner(banner + 1)
        }else{
            setBanner(0)
        }
    }

    return <>{bData.filter((fil,index) => {
        return index == banner
    }).map((res,inx) => {
        return <><ImageBackground style={styles.slideShow} source={{uri: res.coverImg}}>
                <View style={styles.BannerTxt}><Text variant="titleLarge" theme={{ colors: { primary: 'white' } }}>UpComing!</Text></View>
                    <View style={styles.slideBtnV}>
                        <Button style={styles.slideButton} icon="step-backward" mode="contained" buttonColor="rgba(0,0,0,0)" loading={false} onPress={handleBack}></Button>
                        <Button style={styles.slideButton} icon="step-forward" mode="contained" buttonColor="rgba(0,0,0,0)" loading={false} onPress={handleGo}></Button>
                    </View>
                </ImageBackground></>
    })}
 </>
}