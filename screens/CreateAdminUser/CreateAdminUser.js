import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import Input from '../common/Input/Input';
import EvilIcons from '@expo/vector-icons/EvilIcons'
import RNPickerSelect from 'react-native-picker-select';
import { createAdminUserStyle } from './styles/CreateAdminUser';
import { commonStyles } from '../commonStyles';
import { useDispatch, useSelector } from 'react-redux';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { createAdminUser, createVoterUser, loginFetch } from '../../fetches/Auth/Auth';
import { getStatesAndMunicipalities } from '../../fetches/General/General';

const CreateAdminUser = ({navigation}) => {
  const { token } = useSelector(state => state.authReducer);
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

    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
      await dispatch(getStatesAndMunicipalities())
    }

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

    const handleCreateAdmin = async () => {
        if(userValues.password === userValues.confirmPassword) {
            console.log(userValues)
            console.log("Has access!")
            const { code, userCreatedSuccessful } = await dispatch(createAdminUser(userValues, token))

            if (userCreatedSuccessful && code === 1) {
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
            <View style={createAdminUserStyle.mainView}>
                <View style={createAdminUserStyle.titleView}>
                    <EvilIcons name='user' size={52} color={"#B1B2FF"}/>
                    <Text style={createAdminUserStyle.title}>Registro de administrador</Text>
                </View>
                <View style={createAdminUserStyle.inputs}>
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="Username" 
                        placeHolder="Username"
                        value={userValues.username}
                        onChange={(event) => setUserValues({ ...userValues, 'username': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="Password" 
                        placeHolder="Password"  
                        value={userValues.password}
                        onChange={(event) => setUserValues({ ...userValues, 'password': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="Verificar password" 
                        placeHolder="Verificar password"  
                        value={userValues.confirmPassword}
                        onChange={(event) => setUserValues({ ...userValues, 'confirmPassword': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="DNI" 
                        placeHolder="DNI"  
                        onChange={(event) => {
                            setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
                        }
                        value={userValues.dni}
                    /> 
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="Nombre(s)" 
                        placeHolder="Nombre(s)"  
                        value={userValues.firstname}
                        onChange={(event) => setUserValues({ ...userValues, 'firstname': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="Apellido(s)" 
                        placeHolder="Apellido(s)"  
                        value={userValues.lastname}
                        onChange={(event) => setUserValues({ ...userValues, 'lastname': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="Fecha de nacimiento" 
                        placeHolder="aaaa-mm-dd"  
                        value={userValues.birthDate}
                        onChange={(event) => setUserValues({ ...userValues, 'birthDate': event.nativeEvent.text })}
                    /> 
                    <View>
                        <Text style={createAdminUserStyle.text} >Sexo</Text>
                        <RNPickerSelect
                            onValueChange={(value) => setUserValues({ ...userValues, 'gender': value })}
                            items={[
                                { label: 'Femenino', value: 'Femenino' },
                                { label: 'Masculino', value: 'Masculino' },
                            ]}
                        />
                    </View>
                    <View>
                        <Text style={createAdminUserStyle.text} >Estado</Text>
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
                        <Text style={createAdminUserStyle.text} >Municipio</Text>
                        <RNPickerSelect
                            onValueChange={(value) => setUserValues({ ...userValues, 'municipality': value })}
                            items={userValues.selectedMunicipalities || []}
                        />
                    </View>
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="Calle" 
                        placeHolder="Calle"  
                        value={userValues.street}
                        onChange={(event) => setUserValues({ ...userValues, 'street': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="Número" 
                        placeHolder="#"  
                        value={userValues.number}
                        onChange={(event) => setUserValues({ ...userValues, 'number': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="Colonia" 
                        placeHolder="Colonia"  
                        value={userValues.neighbor}
                        onChange={(event) => setUserValues({ ...userValues, 'neighbor': event.nativeEvent.text })}
                    /> 
                    <Input 
                        style={createAdminUserStyle.textInput} 
                        header="Código Postal" 
                        placeHolder="Código Postal"  
                        value={userValues.zip}
                        onChange={(event) => setUserValues({ ...userValues, 'zip': event.nativeEvent.text })}
                    /> 
                </View>
                <View style={createAdminUserStyle.button}>
                    <Button title='Crear usuario' color='#B1B2FF' onPress={handleCreateAdmin} />
                </View>
                <View style={createAdminUserStyle.slogan}>
                    <Text style={createAdminUserStyle.sloganText}>Tu voz, tu voto, tu país</Text>
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

export default CreateAdminUser;