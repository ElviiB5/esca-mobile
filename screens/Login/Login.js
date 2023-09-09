import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

import { loginStyle } from './styles/LoginStyle';
import Input from '../common/Input/Input';
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import AntDesign from '@expo/vector-icons/AntDesign'

const Login = () => {
    return (
        <View>
            <View style={loginStyle.titleView}>
                <EvilIcons name='arrow-right' size={52} color={"#B1B2FF"}/>
                <Text style={loginStyle.title}>Inicio de sesión</Text>
            </View>
            <Input style={loginStyle.textInput} header="Username" placeHolder="Username" />
            <Input style={loginStyle.textInput} header="Password" placeHolder="Password" />  
            <TouchableOpacity
                style={loginStyle.button}>
                <Text style={loginStyle.textButton} >Iniciar sesión</Text>
            </TouchableOpacity>
            {/* <Button title='Iniciar sesión' color={"#B1B2FF"} /> */}
            <View style={loginStyle.signinText}>
                <Text style={loginStyle.signinAsk}>¿No tienes una cuenta?</Text>
                <Text style={loginStyle.signin}>Regístrate</Text>
            </View>
            <View style={loginStyle.slogan}>
                <Text style={loginStyle.sloganText}>Tu voz, tu voto, tu país</Text>
            </View>
        </View>
    )
}

export default Login;