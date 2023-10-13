import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { commonStyles } from '../../commonStyles';
import { partyInfo } from '../styles/PoliticalPartyInfo';

const PoliticalPartyHeader = ({...props}) => {
    return (
        <View style={partyInfo.animationView}>
            <View style={{ 
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: -10
            }}>
                <View style={partyInfo.imageContainter}>
                    <Image
                        source={require('../../../assets/purple-icon.jpg')}
                        style={{width: 280, height: 100}}
                    />
                </View>
                <Text style={commonStyles.pinkTitle}>{props.name}</Text>
                <Text style={partyInfo.normalText}>
                    <Text style={partyInfo.blueText}>Candidato presidencial: </Text>
                    {props.candidate}
                </Text>
            </View>
            <View style={partyInfo.button}>
                <Button title='Saber más sobre el candidato' color='#B1B2FF' />
            </View>
        </View>
    )
}

export default PoliticalPartyHeader;