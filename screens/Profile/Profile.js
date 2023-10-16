import React from 'react';
import { Text, View, Button } from 'react-native';
import { profile } from './styles/Profile';
import { commonStyles } from '../commonStyles';
import ProfileJson from '../../jsons/Profile.json'

const Profile = ({navigation}) => {
    const address = ProfileJson.address

    return (
        <View>
            <View>        
                <View style={commonStyles.animationView}>
                    <Text style={commonStyles.purpleTitle}>{ProfileJson.firstname}</Text>
                    <Text style={profile.contactText}>DNI:</Text>
                    <Text style={commonStyles.normalText}>{ProfileJson.DNI}</Text>
                    <Text style={profile.contactText}>Nombres:</Text>
                    <Text style={commonStyles.normalText}>{ProfileJson.firstname}</Text>
                    <Text style={profile.contactText}>Apellidos:</Text>
                    <Text style={commonStyles.normalText}>{ProfileJson.lastname}</Text>
                    <Text style={profile.contactText}>Fecha de nacimiento:</Text>
                    <Text style={commonStyles.normalText}>{ProfileJson.bornDate}</Text>
                    <Text style={profile.contactText}>Sexo:</Text>
                    <Text style={commonStyles.normalText}>{ProfileJson.gender}</Text>
                    <Text style={profile.contactText}>Estado:</Text>
                    <Text style={commonStyles.normalText}>{ProfileJson.state}</Text>
                    <Text style={profile.contactText}>Dirección:</Text>
                    <Text style={commonStyles.normalText}>Municipio: {address.municipality}, 
                                                    Calle: {address.street}, Número: {address.number}, 
                                                    Colonia: {address.neighborhood}, CP: {address.zipCode}
                </Text>
                </View>                                        
            </View>

            <View style={commonStyles.animationView}>
                <View>
                    <Text style={profile.contactText}>Nombre de usuario: <Text style={commonStyles.normalText}>Username</Text></Text>
                </View>
            </View>
            <View style={profile.button}>
                <Button title='EDITAR' color='#B1B2FF' onPress={() => navigation.navigate('EditProfile')} />
            </View>
        </View>
    )
}
    
    export default Profile;