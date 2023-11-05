import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';
import Input from '../../../common/Input/Input';
import { EditProfileStyles } from '../styles/EditProfileStyle';

const Top = (props) => {
    const [userValues, setUserValues] = useState({
        username: '',
        password: '',
        repeatPassword: '',
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

    return (
        <View >
            <View style={EditProfileStyles.mainView}>
                <View style={EditProfileStyles.titleView}>
                    <Text style={EditProfileStyles.title}>Editar perfil</Text>
                </View>
                <View style={EditProfileStyles.inputs}>
                    <Input 
                    style={EditProfileStyles.textInput} 
                    header="Username" 
                    placeHolder="Username"
                    isLogged={true}  
                    onChange={(event) => {
                    setUserValues({ ...userValues, 'username': event.nativeEvent.text })}
                    }
                    value={userValues.username}
                    /> 
                </View>  
                <View style={EditProfileStyles.inputs}>
                    <Input 
                        style={EditProfileStyles.textInput} 
                        header="New Password" 
                        placeHolder="New Password"
                        isLogged={true} 
                        onChange={(event) => {
                            setUserValues({ ...userValues, 'password': event.nativeEvent.text })}
                        }
                        value={userValues.password}
                    /> 
                </View> 
                <View style={EditProfileStyles.inputs}>
                    <Input 
                        style={EditProfileStyles.textInput} 
                        header="Confirma Password" 
                        placeHolder="Confirma Password"
                        isLogged={true} 
                        onChange={(event) => {
                            setUserValues({ ...userValues, 'repeatPassword': event.nativeEvent.text })}
                        }
                        value={userValues.repeatPassword}
                    /> 
                </View>
                <View style={EditProfileStyles.button}>
                    <Button title='CAMBIAR' color='#B1B2FF' onPress={() => props.passedNavgation.navigate('Profile')}/>
                </View>
            </View>            
        </View> 
            
    )
}

export default Top;