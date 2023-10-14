import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

import { loginStyle } from './styles/LoginStyle';
import Input from '../common/Input/Input';
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useDispatch } from 'react-redux';
import { setLoginAuth } from '../../redux/actions/authActions';
import { loginFetch } from '../../fetches/Auth/Auth';

const Login = ({navigation}) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        if(username === "" ||  password === ""){
            console.log("Empty input")
        } else {
            const { data, isLogin} = await dispatch(loginFetch(username, password))
            
            if(isLogin === true){
                console.log("Username",username)
                console.log("data.fullName",data.fullName)
                console.log("data.userType",data.userType)
                console.log("data.token",data.token)
                setUsername('')
                setPassword('')
            }
        }
    }

    return (
        <View style={loginStyle.container}>
            <View style={loginStyle.mainContainer}>
                <View style={loginStyle.titleView}>
                    <EvilIcons name='arrow-right' size={52} color={"#B1B2FF"}/>
                    <Text style={loginStyle.title}>Inicio de sesión</Text>
                </View>
                <View style={loginStyle.inputs}>
                    <Input 
                        style={loginStyle.textInput} 
                        header="Username" 
                        placeHolder="Username" 
                        onChange={(event) => {
                            setUsername(event.nativeEvent.text)}
                        }
                        value={username}
                    />
                    <Input 
                        style={loginStyle.textInput} 
                        header="Password" 
                        placeHolder="Password" 
                        onChange={(event) => {
                            setPassword(event.nativeEvent.text)}
                        }
                        value={password}
                    />  
                    <TouchableOpacity
                        style={loginStyle.button}
                        onPress={handleLogin}
                        >
                        <Text style={loginStyle.textButton} >Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
                {/* <Button title='Iniciar sesión' color={"#B1B2FF"} /> */}
                <View style={loginStyle.signinText}>
                    <Text style={loginStyle.signinAsk}>¿No tienes una cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={loginStyle.signin}>Regístrate</Text>
                    </TouchableOpacity>
                </View>
                <View style={loginStyle.slogan}>
                    <Text style={loginStyle.sloganText}>Tu voz, tu voto, tu país</Text>
                </View>
            </View>
        </View>
    )
}

export default Login;