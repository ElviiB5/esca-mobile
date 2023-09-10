import React from 'react';
import { Button, Text, View } from 'react-native';
import { commonStyles } from '../../commonStyles';
import { partyInfo } from '../styles/PoliticalPartyInfo';

const PoliticalPartyHeader = ({...props}) => {
    return (
        <View style={commonStyles.animationView}>
            <View style={{ 
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: -10
            }}>
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