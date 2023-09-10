import React from 'react';
import { Text, ScrollView, FlatList, View } from 'react-native';
import PoliticalParty from '../PoliticalParty/PoliticalParty';
import { commonStyles } from '../commonStyles';
import PoliticalPartiesJson from '../../jsons/PoliticalParties.json'

const PoliticalParties = () => {
    console.log("PoliticalPartiesJson",PoliticalPartiesJson)
    return (
        <View style={commonStyles.topContainer}>
            <View style={{ 
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: -10
            }}>
                <Text style={commonStyles.pinkTitle}>Partidos políticos</Text></View>
            <View>
                <View style={{ marginBottom: 5 }}>
                    <Text style={commonStyles.footer}>Panorama completo de los partidos políticos participantes en las elecciones presidenciales de México</Text>
                </View>

                <FlatList 
                    data={PoliticalPartiesJson}
                    renderItem={({ item }) => <PoliticalParty 
                                                    name={item.name} 
                                                    description={item.description} 
                                                    candidate={item.presidentialCandidate} />
                    }
                    keyExtractor={item => item.politcalPartyId}
                />
            </View>
        </View>
    )
}

export default PoliticalParties