import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { commonStyles } from '../commonStyles';
import { party } from './styles/PoliticalParty';

const PoliticalParty = ({...props}) => {
    const handleEdit = () => {
        props.navigation.navigate('PoliticalPartyInfo', {
            partyName: props.partyName
        })
    }
    
    const handleMore = () => {
        props.navigation.navigate('PoliticalPartyInfo', {
            partyName: props.partyName
        })
    }

    return (
        <View style={commonStyles.animationView}>
            <View style={party.imageContainter}>
                <Image
                    source={require('../../assets/purple-icon.jpg')}
                    style={{width: 250, height: 100}}
                />
            </View>
            <View style={party.textContainer}>
                <Text style={party.normalText}>
                    <Text style={party.purpleText}>Nombre: </Text>
                    {props.partyName}
                </Text>
            </View>
            <View style={party.textContainer}>
                <Text style={party.normalText}>
                    <Text style={party.purpleText}>Candidato a la presidencia: </Text>
                    {props.candidate}
                </Text>
            </View>
            <View style={party.button}>
                <Button 
                    title='Saber más sobre el partido' 
                    color='#B1B2FF' 
                    onPress={handleMore} 
                />
            </View>
            {props.rol === "Administrador" && 
                <View style={{ width: 300, marginTop: 6 }}>
                    <Button 
                        title='Editar' 
                        color='#FBECB2' 
                        onPress={() => props.navigation.navigate('Edit_PoliticalParties')} 
                    />
                </View>
            }
        </View>
    )
}

export default PoliticalParty;