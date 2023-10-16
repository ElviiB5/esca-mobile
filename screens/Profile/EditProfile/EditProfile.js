import React, { useState } from 'react';
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import Input from '../../common/Input/Input';
import EvilIcons from '@expo/vector-icons/EvilIcons'
// import RNPickerSelect from 'react-native-picker-select';
// import { EditProfileStyles } from './styles/EditProfile';
// import { commonStyles } from '../../commonStyles';

const EditProfile = ({navigation}) => {
    <ScrollView>
            <View style={signUpStyle.mainView}>
                <View style={signUpStyle.titleView}>
                    <EvilIcons name='arrow-right' size={52} color={"#B1B2FF"}/>
                    <Text style={signUpStyle.title}>Editar perfil</Text>
                </View>
                <View style={signUpStyle.inputs}>
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Username" 
                        placeHolder="Username" 
                        onChange={(event) => {
                            setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
                        }
                        value={userValues.dni}
                    /> 
                </View>  
                <View style={signUpStyle.inputs}>
                    <Input 
                        style={signUpStyle.textInput} 
                        header="New Password" 
                        placeHolder="New Password" 
                        onChange={(event) => {
                            setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
                        }
                        value={userValues.dni}
                    /> 
                </View>
                <View style={signUpStyle.inputs}>
                    <Input 
                        style={signUpStyle.textInput} 
                        header="Confirma Password" 
                        placeHolder="Confirma Password" 
                        onChange={(event) => {
                            setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
                        }
                        value={userValues.dni}
                    /> 
                </View>
                <View style={profile.button}>
                    <Button title='CAMBIAR' color='#B1B2FF' onPress={() => navigation.goBack}/>
                </View>
            </View>      
    </ScrollView> 
    }

    export default EditProfile;