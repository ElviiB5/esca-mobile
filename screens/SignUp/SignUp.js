import React, { useState } from 'react';
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import Input from '../common/Input/Input';
import EvilIcons from '@expo/vector-icons/EvilIcons'
import RNPickerSelect from 'react-native-picker-select';
import { signUpStyle } from './styles/SignUpStyle';
import { commonStyles } from '../commonStyles';

const SignUp = ({navigation}) => {
    const [userValues, setUserValues] = useState({
        dni: '',
        firstname: '',
        lastname: '',
        birthDate: '',
        gender: '',
        municipality: '',
        state: '',
        street: '',
        number: '',
        neighbor: '',
        zip: '',
        userType: '',
        username: '',
        password: '',
        repeatPassword: '',
    })

    const login = () => {
        if(userValues.password === userValues.repeatPassword) {
            console.log(userValues)
            console.log("Has access!")
            setUserValues({
                dni: '',
                firstname: '',
                lastname: '',
                birthDate: '',
                gender: '',
                municipality: '',
                state: '',
                street: '',
                number: '',
                neighbor: '',
                zip: '',
                userType: '',
                username: '',
                password: '',
                repeatPassword: '',
            })
            navigation.navigate('Login')
        }
        else {
            console.log(userValues)
            console.log("Does not have access:(")
        }
    }

    return (
        <ScrollView>
            <View style={signUpStyle.mainView}>
                <View style={signUpStyle.titleView}>
                    <EvilIcons name='arrow-right' size={52} color={"#B1B2FF"}/>
                    <Text style={signUpStyle.title}>Inicio de sesión</Text>
                </View>
                <View style={signUpStyle.inputs}>
                    <Input 
                        style={signUpStyle.textInput} 
                        header="DNI" 
                        placeHolder="DNI"  
                        isLogged={false} 
                        onChange={(event) => {
                            setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
                        }
                        value={userValues.dni}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Nombre(s)" 
                        placeHolder="Nombre(s)"  
                        isLogged={false} 
                        value={userValues.firstname}
                        onChange={(event) => setUserValues({ ...userValues, 'firstname': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Apellido(s)" 
                        placeHolder="Apellido(s)"  
                        isLogged={false} 
                        value={userValues.lastname}
                        onChange={(event) => setUserValues({ ...userValues, 'lastname': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Fecha de nacimiento" 
                        placeHolder="Fecha de nacimiento"  
                        isLogged={false} 
                        value={userValues.birthDate}
                        onChange={(event) => setUserValues({ ...userValues, 'birthDate': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Sexo" 
                        placeHolder="Sexo"  
                        isLogged={false} 
                        value={userValues.gender}
                        onChange={(event) => setUserValues({ ...userValues, 'gender': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Municipio" 
                        placeHolder="Municipio"  
                        isLogged={false} 
                        value={userValues.municipality}
                        onChange={(event) => setUserValues({ ...userValues, 'municipality': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Estado" 
                        placeHolder="Estado"  
                        isLogged={false} 
                        value={userValues.state}
                        onChange={(event) => setUserValues({ ...userValues, 'state': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Calle" 
                        placeHolder="Calle"  
                        isLogged={false} 
                        value={userValues.street}
                        onChange={(event) => setUserValues({ ...userValues, 'street': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Número" 
                        placeHolder="#"  
                        isLogged={false} 
                        value={userValues.number}
                        onChange={(event) => setUserValues({ ...userValues, 'number': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Colonia" 
                        placeHolder="Colonia"  
                        isLogged={false} 
                        value={userValues.neighbor}
                        onChange={(event) => setUserValues({ ...userValues, 'neighbor': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Código Postal" 
                        placeHolder="Código Postal"  
                        isLogged={false} 
                        value={userValues.zip}
                        onChange={(event) => setUserValues({ ...userValues, 'zip': event.nativeEvent.text })}
                    /> 
                    {/* <RNPickerSelect
                        // onValueChange={(value) => handleUserTypeChange(value)}
                        items={[
                            { label: 'Administrador', value: 'Administrador' },
                            { label: 'Votante', value: 'Votante' },
                        ]}
                    /> */}
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Username" 
                        placeHolder="Username"  
                        isLogged={false} 
                        value={userValues.username}
                        onChange={(event) => setUserValues({ ...userValues, 'username': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Password" 
                        placeHolder="Password"  
                        isLogged={false} 
                        value={userValues.password}
                        onChange={(event) => setUserValues({ ...userValues, 'password': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Verificar password" 
                        placeHolder="Verificar password"  
                        isLogged={false} 
                        value={userValues.repeatPassword}
                        onChange={(event) => setUserValues({ ...userValues, 'repeatPassword': event.nativeEvent.text })}
                    /> 
                    <TouchableOpacity
                        style={signUpStyle.button}
                        onPress={login}
                    >
                        <Text style={signUpStyle.textButton} >Registrarme</Text>
                    </TouchableOpacity>
                </View>
                <View style={signUpStyle.signinText}>
                    <Text style={signUpStyle.signinAsk}>¿Ya tienes una cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={signUpStyle.signin}>Inicia sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style={signUpStyle.slogan}>
                    <Text style={signUpStyle.sloganText}>Tu voz, tu voto, tu país</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp;