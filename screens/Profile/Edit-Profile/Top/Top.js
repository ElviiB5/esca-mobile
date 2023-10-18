import React, {useState} from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import EditProfileStyles from '../styles/EditProfileStyle'
import Input from '../../../common/Input/Input';

const Top = (navigation) => {
    const [userValues, setUserValues] = useState({
        username: '',
        password: '',
        repeatPassword: ''
    })
    return (
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
                    setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
                    }
                    value={userValues.dni}
                    /> 
                </View>  
                    <View style={EditProfileStyles.inputs}>
                        <Input 
                            style={EditProfileStyles.textInput} 
                            header="New Password" 
                            placeHolder="New Password"
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
                            header="Confirma Password" 
                            placeHolder="Confirma Password"
                            isLogged={true} 
                            onChange={(event) => {
                                setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
                            }
                            value={userValues.dni}
                        /> 
                    </View>
                    <View style={EditProfileStyles.button}>
                        <Button title='CAMBIAR' color='#B1B2FF' onPress={() => navigation.navigate('Profile')}/>
                    </View>
            </View> 
    )
}

export default Top;