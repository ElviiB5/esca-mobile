import React, {useState} from "react";
import { Button,  View } from 'react-native';
import { EditProfileStyles } from "../styles/EditProfileStyle";
import Input from "../../../common/Input/Input";


const Bottom = ({userInfo, ...props}) =>{ 
    const [userValues, setUserValues] = useState({
        username: userInfo.username,
        password: userInfo.password,
        repeatPassword: userInfo.repeatPassword,
        dni: userInfo.dni,
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        birthDate: userInfo.birthDate,
        gender: userInfo.gender,
        municipality: userInfo.municipality,
        state: userInfo.state,
        street: userInfo.street,
        number: userInfo.number,
        neighbor: userInfo.neighbor,
        zip: userInfo.zip,
        userType: userInfo.userType
    })

    const handleUpdateUserInfo = () => {
        const { authUpdated } = dispatch(changeUserInfo())

        if (authUpdated) {
            showMessage({
              message: "CONFIRMACIÓN",
              description: "Se han actualizado las credenciales!",
              type: "success",
            });
            
            props.passedNavgation.navigate('Profile')
        } else {
            showMessage({
              message: "ERROR",
              description: "Ocurrió un error, intenta más tarde",
              type: "danger",
            });
        }
    }


    return(
        <View style={EditProfileStyles.mainView}>
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
            <Button title='CAMBIAR' color='#B1B2FF' onPress={handleUpdateUserInfo}/>
        </View>
    </View> 
    )
}

export default Bottom;