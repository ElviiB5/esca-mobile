import React, {useState} from "react";
import { Button,  View } from 'react-native';
import { EditProfileStyles } from "../styles/EditProfileStyle";
import Input from "../../../common/Input/Input";


const Bottom = (props) =>{ 
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
        userType: ''
    })
    return(
        <View style={EditProfileStyles.mainView}>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="DNI" 
                    placeHolder="DNI"  
                    isLogged={true} 
                    onChange={(event) => {
                        setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
                    }
                    value={userValues.dni}
                /> 
            </View>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="Nombre(s)" 
                    placeHolder="Nombre(s)"  
                    isLogged={true} 
                    value={userValues.firstname}
                    onChange={(event) => setUserValues({ ...userValues, 'firstname': event.nativeEvent.text })}
                /> 
            </View>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="Apellido(s)" 
                    placeHolder="Apellido(s)"  
                    isLogged={true} 
                    value={userValues.lastname}
                    onChange={(event) => setUserValues({ ...userValues, 'lastname': event.nativeEvent.text })}
                /> 
            </View>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="Fecha de nacimiento" 
                    placeHolder="Fecha de nacimiento"  
                    isLogged={true} 
                    value={userValues.birthDate}
                    onChange={(event) => setUserValues({ ...userValues, 'birthDate': event.nativeEvent.text })}
                /> 
            </View>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="Sexo" 
                    placeHolder="Sexo"  
                    isLogged={true} 
                    value={userValues.gender}
                    onChange={(event) => setUserValues({ ...userValues, 'gender': event.nativeEvent.text })}
                /> 
            </View>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="Municipio" 
                    placeHolder="Municipio"  
                    isLogged={true} 
                    value={userValues.municipality}
                    onChange={(event) => setUserValues({ ...userValues, 'municipality': event.nativeEvent.text })}
                /> 
            </View>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="Estado" 
                    placeHolder="Estado"  
                    isLogged={true} 
                    value={userValues.state}
                    onChange={(event) => setUserValues({ ...userValues, 'state': event.nativeEvent.text })}
                /> 
            </View>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="Calle" 
                    placeHolder="Calle"  
                    isLogged={true} 
                    value={userValues.street}
                    onChange={(event) => setUserValues({ ...userValues, 'street': event.nativeEvent.text })}
                /> 
            </View>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="Número" 
                    placeHolder="#"  
                    isLogged={true} 
                    value={userValues.number}
                    onChange={(event) => setUserValues({ ...userValues, 'number': event.nativeEvent.text })}
                /> 
            </View>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="Colonia" 
                    placeHolder="Colonia"  
                    isLogged={true} 
                    value={userValues.neighbor}
                    onChange={(event) => setUserValues({ ...userValues, 'neighbor': event.nativeEvent.text })}
                /> 
            </View>
            <View style={EditProfileStyles.inputs}>
                <Input 
                    style={EditProfileStyles.textInput} 
                    header="Código Postal" 
                    placeHolder="Código Postal"  
                    isLogged={true} 
                    value={userValues.zip}
                    onChange={(event) => setUserValues({ ...userValues, 'zip': event.nativeEvent.text })}
                /> 
            </View>
            <View style={EditProfileStyles.button}>
            <Button title='CAMBIAR' color='#B1B2FF' onPress={() => props.passedNavgation.navigate('Profile')}/>
        </View>
    </View> 
    )
}

export default Bottom;