import { Alert, ImageBackground, View } from 'react-native';
import { Button, Dialog, HelperText, Portal, ProgressBar, Text, TextInput } from 'react-native-paper';
import { styles } from '../CSS/styles';
import { useEffect, useState } from 'react';

export const LogIn = ({setValidate}) => {

    const [admin,setAdmin] = useState([{"userID": "Nitin", "password": "nitin"}])

    const [userid,setUserid] = useState('')
    const [userVald,setUserVald] = useState(false)
    const [password,setPassword] = useState('')
    const [passVald,setPassVald] = useState(false)
    const [hide,setHide] = useState(true)
    const [pEye,setPeye] = useState('eye')
    const [sign,setSign] = useState(true)
    const [crtNew,setCrtNew] = useState(false)

    const [crtUserid,setCrtUserid] = useState('')
    const [crtPassword,setCrtPassword] = useState('')
    const [crtRePassword,setCrtRePassword] = useState('')
    const [infoVald,setInfoVald] = useState(false)
    const [crtpVald,setCrtpVald] = useState(false)
    const [crtEye,setCrtEye] = useState('eye')
    const [crtHide,setCrtHide] = useState(true)
    const [reCrtEye,setReCrteye] = useState('eye')
    const [reHide,setReHide] = useState(true)
    const [diaViz,setDiaViz] = useState(false)

    const [confirmPass,setConfirmPass] = useState('')

    const handleEye = () => {
        if(pEye == 'eye'){
            setPeye('eye-off')
            setHide(false)
        }else{
            setPeye('eye')
            setHide(true)
        }
    }

    const handleCrtEye = () => {
        if(crtEye == 'eye'){
            setCrtEye('eye-off')
            setCrtHide(false)
        }else{
            setCrtEye('eye')
            setCrtHide(true)
        }
    }

    const handleReCrtEye = () => {
        if(reCrtEye == 'eye'){
            setReCrteye('eye-off')
            setReHide(false)
        }else{
            setReCrteye('eye')
            setReHide(true)
        }
    }

    const handleCrtUser = () => {
        setCrtNew(true)
        setCrtUserid('')
        setCrtPassword('')
        setCrtRePassword('')
        setInfoVald(false)
        setCrtpVald(false)
        setCrtEye('eye')
        setReCrteye('eye')
        setCrtHide(true)
        setReHide(true)
    }

    const handleCreate = () => {
        if(crtUserid == '' || crtUserid.includes(' ')){
            // Alert.alert('Error 404!','User Id Cant be null')
            // setInfoVald(true)
        }else{
            if(admin.some(details => (details.userID == crtUserid)) == true){
                // Alert.alert('Error 404!','User Id Already Taken')
                setInfoVald(true)
                setCrtpVald(false)
            }else{
                setInfoVald(false)
                if(crtPassword == '' || crtRePassword == ''){
                    setCrtpVald(true)
                }else{
                    setCrtpVald(false)
                    if(crtPassword != crtRePassword){
                        // Alert.alert('Error 404!','Password should match')
                        setCrtpVald(true)
                    }else{
                        // Alert.alert('Sucess','User Created')
                        setSign(false)
                        setDiaViz(true)
                    }
                }
            }
        }
    }

    const funDialog = () => {
        setCrtNew(false)
        setDiaViz(false)
    }

    const handleValidation = () => {
        if(admin.some(details => (details.userID == userid)) == true){
            setUserVald(false)
            // setConfirmPass(admin.filter((details) => {return details.userID == userid}).map((val) => {return val.password}))
            console.log('User Pass',confirmPass)
            // if(admin.some(details => (details.password == password)) == true){
            if((confirmPass == password) == true){
                setPassVald(false)
                setValidate(true)
                console.log('Pass Pass')
            }else{
                setPassVald(true)
                setValidate(false)
                console.log('Pass Fail')
            }
        }else{
            setUserVald(true)
            setValidate(false)
            console.log('Fail')
        }
    }

    const handleReset = () => {
        console.log('Reset')
        setSign(true)
        setUserid('')
        setPassword('')
        setUserVald(false)
        setPassVald(false)
        setPeye('eye')
        setHide(true)
    }

    const handleCancel = () => {
        setCrtNew(false)
        setUserid('')
        setPassword('')
        setUserVald(false)
        setPassVald(false)
        setPeye('eye')
        setSign(false)
        setHide(true)
    }

    useEffect(() => {
        setConfirmPass(admin.filter((details) => {return details.userID == userid}).map((val) => {return val.password}))
    },[admin,userid])

    useEffect(() => {
        if(crtUserid != '' && crtPassword != ''){
            setAdmin((old) => {
                if(old.some(res =>(res.userID === crtUserid))){
                    return old.map((ores) => {
                        if(ores.userID === crtUserid){
                            return {userID: crtUserid, password: crtPassword}
                        }else{
                            return ores
                        }
                    })
                }else{
                    return [...old,{userID: crtUserid, password: crtPassword}]
                }
            })
        }
    },[sign,diaViz])

    {/* cursorColor='#5fef1c'*/}

    return (<>{ !crtNew ? 
            <ImageBackground style={styles.HeroImg} source={{uri: 'https://drive.google.com/uc?export=view&id=1DZ6VJmswCnQZxNr-O4UDmIhMvIpqr29w'}} >
                <View style={styles.LoIncontainer}>
                <View style={styles.spaceTxtBox}>
                    <TextInput style={styles.AppText} outlineColor='rgba(0,0,0,0)' activeOutlineColor='rgba(0,0,0,0)' textColor='white' mode='outlined' label='User ID' placeholder='Enter User ID' value={userid} error={userVald} onChangeText={(userId) => {setUserid(userId)}} onChange={() => {setUserVald(false)}}/>
                    {userVald ? <HelperText type='error' visible={userVald}>User ID doesn't match</HelperText> : <></>}
                </View>

                <View>
                    <TextInput style={styles.AppText} outlineColor='rgba(0,0,0,0)' activeOutlineColor='rgba(0,0,0,0)' textColor='white' mode='outlined' label='Password' placeholder='Enter Password' value={password} error={passVald} onChangeText={(pass) => {setPassword(pass)}} secureTextEntry={hide} right={<TextInput.Icon color='white' icon={pEye} onPress={handleEye} />} onChange={() => {setPassVald(false)}} />
                    {passVald ? <HelperText type='error' visible={passVald}>Password doesn't match</HelperText> : <></>}
                </View>

                <View style={styles.spaceBtn}>
                    {sign ? <><Button icon="account" mode="contained" buttonColor="#8fce00" loading={false} style={styles.LogBtn} onPress={handleCrtUser}>SignUp</Button></> : <><Button icon="login" mode="contained" buttonColor="tomato" loading={false} style={styles.LogBtn} onPress={handleValidation}>LogIn</Button><Text>&nbsp;&nbsp;</Text><Button icon="reload" mode="contained" buttonColor="black" loading={false} style={styles.LoadBtn} onPress={handleReset}>Reset</Button></>}
                </View>
                </View>
            </ImageBackground> : 
            <ImageBackground style={styles.LoIncontainer} source={{uri: 'https://drive.google.com/uc?export=view&id=1DX4_w2hKmnl7N6GpYN-u57GWllcrpoF4'}}>
                <Text variant='displaySmall' style={styles.CrtTitle} >Create User</Text>
                <View style={styles.CrtspaceTxtBox}>
                    <TextInput style={styles.AppCrtText} outlineColor='rgba(0,0,0,0)' activeOutlineColor='rgba(0,0,0,0)' mode='outlined' label='Name' placeholder='Enter User Name' left={<TextInput.Icon icon='human' />}/>
                </View>

                <View style={styles.CrtReTxtBox}>
                    <TextInput style={styles.AppCrtText} outlineColor='rgba(0,0,0,0)' activeOutlineColor='rgba(0,0,0,0)' mode='outlined' label='Email' placeholder='Enter User Email' left={<TextInput.Icon icon='email' />}/>
                </View>

                <View style={styles.CrtReTxtBox}>
                    <TextInput style={styles.AppCrtText} outlineColor='rgba(0,0,0,0)' activeOutlineColor='rgba(0,0,0,0)' mode='outlined' label='User ID' placeholder='Create User ID' value={crtUserid} maxLength={8} error={crtUserid == '' || crtUserid.includes(' ') ? true : infoVald} onChangeText={(userId) => {setCrtUserid(userId)}} left={<TextInput.Icon icon='account' />} onChange={() => {setInfoVald(false)}}/>
                    {crtUserid == '' ? <HelperText type='error' visible={crtUserid == '' ? true : false}>User ID can't be Empty!</HelperText> : <></>}
                    {crtUserid.includes(' ') ? <HelperText type='error' visible={crtUserid.includes(' ') ? true : false}>User ID can't Contain Space!</HelperText> : <></>}
                    {infoVald ? <HelperText type='error' visible={infoVald}>User ID alredy taken!</HelperText> : <></>}
                </View>

                <View style={styles.CrtReTxtBox}>
                    <TextInput style={styles.AppCrtText} outlineColor='rgba(0,0,0,0)' activeOutlineColor='rgba(0,0,0,0)' mode='outlined' label='Password' placeholder='Create Password' value={crtPassword} maxLength={15} error={crtpVald} onChangeText={(pass) => {setCrtPassword(pass)}} secureTextEntry={crtHide} left={<TextInput.Icon icon={crtEye} onPress={handleCrtEye} />} onChange={() => {setCrtpVald(false)}}/>
                </View>

                <View style={styles.CrtReTxtBox}>
                    <TextInput style={styles.AppCrtText} outlineColor='rgba(0,0,0,0)' activeOutlineColor='rgba(0,0,0,0)' mode='outlined' label='Re-type Password' placeholder='Confirm Password' value={crtRePassword} maxLength={15} error={crtpVald} onChangeText={(pass) => {setCrtRePassword(pass)}} secureTextEntry={reHide} left={<TextInput.Icon icon={reCrtEye} onPress={handleReCrtEye} />} onChange={() => {setCrtpVald(false)}}/>
                    {crtpVald ? <HelperText type='error' visible={crtpVald}>{crtPassword == '' ? <>Password Can't be Empty!</> : <>Password Doesn't Match!</>}</HelperText> : <></>}
                </View>

                <View style={styles.spaceCrtBtn}>
                    <Button icon="account" mode="contained" buttonColor="#841584" loading={false} style={styles.CrtBtn} onPress={handleCreate}>Create User</Button>
                    {diaViz ? <>
                        <Portal>
                            <Dialog visible={diaViz} onDismiss={funDialog}>
                                <Dialog.Content>
                                    <Text variant='headlineSmall'>User Created Successfully.</Text>
                                    <Text>&nbsp;</Text>
                                    <Text variant='bodyMedium'>Note: The Created ID & Password is only a one time ID & Password, Once the App refesh your Information will get disappear.</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={funDialog}>Ok</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </> : <></>}
                </View>

                <View style={styles.spaceCrtCanBtn}>
                    <Button icon="cancel" mode="contained" buttonColor="#d14035" onPress={handleCancel}>Cancel</Button>
                </View>
            </ImageBackground>
            }</>)
}