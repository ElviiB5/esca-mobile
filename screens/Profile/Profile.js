import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { profile } from './styles/Profile';
import { commonStyles } from '../commonStyles';
import ProfileJson from '../../jsons/Profile.json'
import { useDispatch, useSelector } from 'react-redux';
import { getProfileInfo, logout } from '../../fetches/Auth/Auth';
import LottieView from "lottie-react-native";

const Profile = ({navigation}) => {
    const { isLoading } = useSelector(state => state.basicReducer);
    const { 
        dni, 
        userName, 
        fullName,
        genderName,
        birth,
        municipality,
        state,
        street,
        number,
        neighbor,
        zipCode,
        latitude,
        longitude,
        token, 
        rol } = useSelector(state => state.authReducer);

    const userInfo = { 
        dni, 
        userName, 
        fullName,
        genderName,
        birth,
        municipality,
        state,
        street,
        number,
        neighbor,
        zipCode,
        latitude,
        longitude,
        token, 
        rol 
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfileInfo(token, dni))
    }, [])

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
        {isLoading ? 
        <LottieView source={require("../../assets/loader.json")} autoPlay loop />
        :
        <View>
            <View>        
                <View style={commonStyles.animationView}>
                    <Text style={commonStyles.purpleTitle}>{fullName}</Text>
                    <Text style={profile.contactText}>DNI:</Text>
                    <Text style={commonStyles.normalText}>{dni}</Text>
                    <Text style={profile.contactText}>Fecha de nacimiento:</Text>
                    <Text style={commonStyles.normalText}>{birth}</Text>
                    <Text style={profile.contactText}>Sexo:</Text>
                    <Text style={commonStyles.normalText}>{genderName}</Text>
                    <Text style={profile.contactText}>Estado:</Text>
                    <Text style={commonStyles.normalText}>{ProfileJson.state}</Text>
                    <Text style={profile.contactText}>Dirección:</Text>
                    <Text style={commonStyles.normalText}>Municipio: {municipality}, 
                                                    Calle: {street}, Número: {number}, 
                                                    Colonia: {neighbor}, CP: {zipCode}
                </Text>
                </View>                                        
            </View>

            <View style={commonStyles.animationView}>
                <View>
                    <Text style={profile.contactText}>Nombre de usuario: 
                        <Text style={commonStyles.normalText}>{userName}</Text>
                    </Text>
                </View>
            </View>
            <View style={profile.button}>
                <Button title='EDITAR' color='#B1B2FF' onPress={() => navigation.navigate('EditProfile', userInfo)} />
            </View>
            <View style={profile.button}>
                <Button title='Cerrar Sesión' color='#B1B2FF' onPress={handleLogout} />
            </View>
        </View>
        }
    </>
    )
}
    
    export default Profile;