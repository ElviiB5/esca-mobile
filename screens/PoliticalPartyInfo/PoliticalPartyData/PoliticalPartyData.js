import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { partyInfo } from '../styles/PoliticalPartyInfo';
import PoliticalPartyPlatform from '../PoliticalPartyPlatform/PoliticalPartyPlatform';
import { commonStyles } from '../../commonStyles';

const PoliticalPartyData = ({...props}) => {
    const address = props.address
    const platforms = props.platforms

    return (
        <ScrollView style={partyInfo.topContainer}>
            <View style={partyInfo.dataContainer}>
                <Text style={partyInfo.purpleTextTitle}>Sobre el partido político</Text>

                <View style={{ marginTop: 10 }}>
                    <Text style={partyInfo.normalAlignText}>
                        <Text style={partyInfo.blueText}>Fecha de registro: </Text>
                        {props.register}
                    </Text>
                    <Text style={partyInfo.normalAlignText}>
                        <Text style={partyInfo.blueText}>Domicilio: </Text>
                        Calle {address.street}, No. {address.number}, Col. {address.neighborhood}, CP: {address.zipCode}
                    </Text>
                    <Text style={partyInfo.normalAlignText}>
                        <Text style={partyInfo.blueText}>Teléfono: </Text>
                        {props.phone}
                    </Text>
                    <Text style={partyInfo.normalAlignText}>
                        <Text style={partyInfo.blueText}>Sitio web: </Text>
                        {props.webSite}
                    </Text>
                </View>
                
                <View style={{
                    marginTop: 20,
                    borderBottomColor: '#AAC4FF',
                    borderBottomWidth: 2,}}></View>

                <Text style={partyInfo.purpleTextTitle}>Sus propuestas</Text>
                {platforms.map((platform) => {
                    return(<PoliticalPartyPlatform key={platform.platformid} name={platform.name} description={platform.description} />)
                })}
            </View>
        </ScrollView>
    )
}

export default PoliticalPartyData;