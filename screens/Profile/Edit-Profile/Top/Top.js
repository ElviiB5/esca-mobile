import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';
import Input from '../../../common/Input/Input';
import { EditProfileStyles } from '../styles/EditProfileStyle';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage, hideMessage } from "react-native-flash-message";
import { changeAuth } from '../../../../fetches/Auth/Auth';

const Top = ({...props}) => {
    const { token } = useSelector(state => state.authReducer);
    const dispatch = useDispatch()
    const { userName } = useSelector(state => state.authReducer);

    const [userValues, setUserValues] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    })

    const handleChangeAuthCredentials = () => {
        if (userValues.newPassword === userValues.confirmPassword) {
            const { isUserUpdated } = dispatch(changeAuth(userName, userValues.currentPassword, userValues.newPassword, token))
            if (isUserUpdated) {
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
        } else {
            showMessage({
              message: "ERROR",
              description: "Las contraseñas no concuerdan",
              type: "danger",
            });
        }
    }

    const handleButtonClick = () => {
        if (userValues.currentPassword !== "" && userValues.newPassword !== "" && userValues.confirmPassword !== "") {
            handleChangeAuthCredentials()
        } else {
            showMessage({
              message: "ERROR",
              description: "Completa todos los campos",
              type: "danger",
            });
        }
    }

    return (
        <View >
            <View style={EditProfileStyles.mainView}>
                <View style={EditProfileStyles.titleView}>
                    <Text style={EditProfileStyles.title}>Editar perfil</Text>
                </View>
                <View style={EditProfileStyles.titleView}>
                    <Text style={EditProfileStyles.pinkTitle}>{userName}</Text>
                </View>
                <View style={EditProfileStyles.inputs}>
                    <Input 
                        style={EditProfileStyles.textInput} 
                        header="Contraseña actual" 
                        placeHolder="Contraseña actual"
                        isLogged={true} 
                        onChange={(event) => {
                            setUserValues({ ...userValues, 'currentPassword': event.nativeEvent.text })}
                        }
                        value={userValues.currentPassword}
                    /> 
                </View> 
                <View style={EditProfileStyles.inputs}>
                    <Input 
                        style={EditProfileStyles.textInput} 
                        header="Nueva contraseña" 
                        placeHolder="Nueva contraseña"
                        isLogged={true} 
                        onChange={(event) => {
                            setUserValues({ ...userValues, 'newPassword': event.nativeEvent.text })}
                        }
                        value={userValues.newPassword}
                    /> 
                </View> 
                <View style={EditProfileStyles.inputs}>
                    <Input 
                        style={EditProfileStyles.textInput} 
                        header="Confrima contraseña" 
                        placeHolder="Confirma contraseña"
                        isLogged={true} 
                        onChange={(event) => {
                            setUserValues({ ...userValues, 'confirmPassword': event.nativeEvent.text })}
                        }
                        value={userValues.confirmPassword}
                    /> 
                </View>
                <View style={EditProfileStyles.button}>
                    <Button title='CAMBIAR' color='#B1B2FF' onPress={handleButtonClick}/>
                </View>
            </View>            
        </View> 
            
    )
}

export default Top;