import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../CSS/styles';
import { useState } from 'react';
import data from '../JSON/Data.json'
import { Button } from 'react-native-paper';

const HomeList = ({handleNavigate}) => {

    const [dataValue,setDataValue] = useState(data)

    return <>
            <View style={styles.ContentMenu}>
                {dataValue.map((resList,index) => {
                    return <>
                        <TouchableOpacity key={index} style={styles.HomeSpace} onPress={() => handleNavigate('EpisodeList',resList.cartoonName)}>
                            <Image key={index} source={{uri: resList.coverImg}} style={styles.buttonImage}/>
                        </TouchableOpacity>
                    </>
                })}
            </View>
    </>
}

export default HomeList