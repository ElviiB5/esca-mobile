import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import Input from '../common/Input/Input';
import EvilIcons from '@expo/vector-icons/EvilIcons'
import RNPickerSelect from 'react-native-picker-select';
import { signUpStyle } from './styles/SignUpStyle';
import { commonStyles } from '../commonStyles';
import { useDispatch, useSelector } from 'react-redux';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { createVoterUser, loginFetch } from '../../fetches/Auth/Auth';
import { getStatesAndMunicipalities } from '../../fetches/General/General';

const SignUp = ({navigation}) => {
    const { states, municipalities } = useSelector(state => state.generalReducer);
    const [userValues, setUserValues] = useState({
        dni: '',
        firstname: '',
        lastname: '',
        birthDate: '',
        gender: '',
        municipality: '',
        selectedMunicipalities: [],
        state: '',
        street: '',
        number: '',
        neighbor: '',
        zip: '',
        userType: '',
        username: '',
        password: '',
        confirmPassword: '',
    })

    const dispatch = useDispatch()

    const clearValues = () => {
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
            confirmPassword: '',
        })
    }

    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
      await dispatch(getStatesAndMunicipalities())
    }

    const handleLogin = async () => {
        console.log("Here!",userValues)
        if(userValues.password === userValues.confirmPassword) {
            console.log(userValues)
            console.log("Has access!")
            const { code, userCreatedSuccessful } = await dispatch(createVoterUser(userValues))

            console.log("code!!",code)
            if (userCreatedSuccessful && code === 1) {
                await dispatch(loginFetch(userValues.username, userValues.password))

                clearValues()
                showMessage({
                  message: "PERFECTO!",
                  description: "Ya tienes acceso con el usuario!",
                  type: "success",
                });
            } else {
                showMessage({
                  message: "ERROR!",
                  description: "Ocurrió un error al crear el usuario, intenta más tarde",
                  type: "error",
                });
            }
        } else {
            console.log("yaas")
            showMessage({
              message: "ERROR",
              description: "Credenciales incorrectas",
              type: "danger",
            });
        }
    }

    return (
        <View>
        <ScrollView>
            <View style={signUpStyle.mainView}>
                <View style={signUpStyle.titleView}>
                    <EvilIcons name='arrow-right' size={52} color={"#B1B2FF"}/>
                    <Text style={signUpStyle.title}>Inicio de sesión</Text>
                </View>
                <View style={signUpStyle.inputs}>
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
                        value={userValues.confirmPassword}
                        onChange={(event) => setUserValues({ ...userValues, 'confirmPassword': event.nativeEvent.text })}
                    /> 
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
                        placeHolder="aaaa-mm-dd"  
                        isLogged={false} 
                        value={userValues.birthDate}
                        onChange={(event) => setUserValues({ ...userValues, 'birthDate': event.nativeEvent.text })}
                    /> 
                    <View>
                        <Text style={signUpStyle.text} >Sexo</Text>
                        <RNPickerSelect
                            onValueChange={(value) => setUserValues({ ...userValues, 'gender': value })}
                            items={[
                                { label: 'Femenino', value: 'Femenino' },
                                { label: 'Masculino', value: 'Masculino' },
                            ]}
                        />
                    </View>
                    <View>
                        <Text style={signUpStyle.text} >Estado</Text>
                        <RNPickerSelect
                            onValueChange={(value) => {
                              const selectedState = states.states.find((state) => state.label === value)
                              const filteredMunicipalities = municipalities.filter((municipality) => municipality?.stateid === selectedState.id)
                              setUserValues({ 
                                ...userValues, 
                                'state': value, 
                                'selectedMunicipalities': filteredMunicipalities })
                            }}
                            items={states?.states || []}
                        />
                    </View>
                    <View>
                        <Text style={signUpStyle.text} >Municipio</Text>
                        <RNPickerSelect
                            onValueChange={(value) => setUserValues({ ...userValues, 'municipality': value })}
                            items={userValues.selectedMunicipalities || []}
                        />
                    </View>
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
                    <TouchableOpacity
                        style={signUpStyle.button}
                        onPress={handleLogin}
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
        </View>
    )
}

export default SignUp;