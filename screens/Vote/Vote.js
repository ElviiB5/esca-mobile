import React from 'react';
import { FlatList, Text, View } from 'react-native';
import PoliticalPartyChoice from './PoliticalPartyChoice/PoliticalPartyChoice';
import PoliticalPartiesJson from '../../jsons/PoliticalParties.json'
import { commonStyles } from '../commonStyles';

const Vote = () => {
    return (
        <View>
            <View style={{ 
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: -2,
            }}>
                <Text style={commonStyles.pinkTitle}>¿Ya tienes tu elección?</Text>
            </View>

            <FlatList 
                data={PoliticalPartiesJson}
                renderItem={({ item }) => <PoliticalPartyChoice name={item.name} candidate={item.presidentialCandidate} />}
                keyExtractor={item => item.politcalPartyId}
            />
        </View>
    )
}

export default Vote;