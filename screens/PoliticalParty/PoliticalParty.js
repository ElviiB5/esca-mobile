import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { commonStyles } from '../commonStyles';
import { party } from './styles/PoliticalParty';

const PoliticalParty = ({...props}) => {
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
                    {props.name}
                </Text>
            </View>
            <View style={party.textContainer}>
                <Text style={party.normalText}>
                    <Text style={party.purpleText}>Descripción: </Text>
                    {props.description}
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
                    onPress={() => props.navigation.navigate('PoliticalPartyInfo')} 
                />
            </View>
        </View>
    )
}

export default PoliticalParty;