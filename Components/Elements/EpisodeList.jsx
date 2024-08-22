import { View } from "react-native"
import { styles } from "../CSS/styles";
import { Video, ResizeMode } from "expo-av"
import { useRef, useState } from "react";
import { Card, Text } from "react-native-paper";
import epiList from '../JSON/EpisodeList.json'

export const EpisodeList = ({ filEpisode }) => {

    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [data,setData] = useState(epiList)

    return <>{data.filter((fil) => {
        return fil.cartoonName == filEpisode
    }).map((res,i) => {
        return <><Card key={i}>
        <Video ref={video} style={styles.video} source={
            {uri: res.videoLink}
            } useNativeControls 
              resizeMode={ResizeMode.CONTAIN} 
              isLooping 
              onPlaybackStatusUpdate={status => setStatus(() => status)}/>
        <Card.Content>
            <Text variant="titleLarge">{res.episodeName}</Text>
            <Text variant="bodyMedium">{res.epiDescription}</Text>
        </Card.Content>
    </Card></>
    })}</>
}