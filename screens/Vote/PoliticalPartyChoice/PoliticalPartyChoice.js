import React from 'react';
import { Button, Text, View } from 'react-native';
import { partyVote } from '../styles/Vote';
import { commonStyles } from '../../commonStyles';

const PoliticalPartyChoice = ({...props}) => {
    const handleVote = () => {
        console.log("Vote for", props.name)
    }

    return (
        <View style={commonStyles.animationView}>
            <Text style={partyVote.blueTextTitle}>{props.name}</Text>
            <Text style={partyVote.normalAlignText}>
                <Text style={partyVote.blueText}>Candidato presidencial: </Text>
                {props.candidate}
            </Text> 
            <View style={partyVote.button}>
                <Button title='Votar' color='#B1B2FF' />
            </View>
        </View>
    )
}

export default PoliticalPartyChoice;