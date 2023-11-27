import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { partyVote } from '../styles/Vote';
import { commonStyles } from '../../commonStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setVote } from '../../../fetches/Votes/Votes'
import { showMessage } from "react-native-flash-message";

const PoliticalPartyChoice = ({...props}) => {
    const { token, rol } = useSelector(state => state.authReducer);
    const dispatch = useDispatch()

    const handleVote = async () => {
        const { code, message } = await dispatch(setVote(props.name, token))

        if (code === 1) {
            switch (message) {
                case "Gracias por votar!":
                    showMessage({
                      message: "PERFECTO!",
                      description: "Muchas gracias por votar",
                      type: "sucess",
                    });
                    break;
                case "No existe un periodo electoral activo":
                    showMessage({
                      message: "ADVERTENCIA!",
                      description: "No existe un periodo electoral activo",
                      type: "warning",
                    });
                    break;
                case "Este usuario ya votó.":
                    showMessage({
                      message: "YA VOTASTE!",
                      description: "Ya tienes tu voto registrado, no puedes votar nuevamente",
                      type: "error",
                    });
                    break;
                case "Este usuario no tiene permisos para realizar esta acción":
                    showMessage({
                      message: "AY!",
                      description: "Lo sentimos, pero no tienes permisos para votar",
                      type: "info",
                    });
                    break;
            }
        }
    }

    return (
        <View style={commonStyles.animationView}>
            <View style={partyVote.imageContainter}>
                <Image
                    source={require('../../../assets/purple-icon.jpg')}
                    style={{width: 250, height: 100}}
                />
            </View>
            <Text style={partyVote.blueTextTitle}>{props.name}</Text>
            <Text style={partyVote.normalAlignText}>
                <Text style={partyVote.blueText}>Candidato presidencial: </Text>
                {props.candidate}
            </Text> 
            <View style={partyVote.button}>
                <Button title='Votar' color='#B1B2FF' onPress={handleVote} />
            </View>
        </View>
    )
}

export default PoliticalPartyChoice;