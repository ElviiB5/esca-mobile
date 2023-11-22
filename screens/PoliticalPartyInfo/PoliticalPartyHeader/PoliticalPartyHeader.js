import React, { useState } from 'react';
import { Button, Image, Text, View, Modal } from 'react-native';
import { commonStyles } from '../../commonStyles';
import { partyInfo } from '../styles/PoliticalPartyInfo';
import { useSelector } from 'react-redux';

const PoliticalPartyHeader = ({...props}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const { currentPositions } = useSelector(state => state.partiesReducer);

    return (
        <View style={partyInfo.animationView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                    <View style={partyInfo.modalView}>
                        <Text style={partyInfo.normalText}>
                            <Text style={partyInfo.normalText}>Puestos que ha tenido:</Text>
                            {currentPositions.map((position) => {
                                return (
                                    <Text style={partyInfo.blueText}> {position.positionName}</Text>
                                )
                            })}
                        </Text>
                        <Button title='Cerrar'
                            onPress={() => setModalVisible(false)}>
                        </Button>
                    </View>
            </Modal>
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
                <Button title='Saber más sobre el candidato' onPress={() => setModalVisible(true)} color='#B1B2FF' />
            </View>
        </View>
    )
}

export default PoliticalPartyHeader;