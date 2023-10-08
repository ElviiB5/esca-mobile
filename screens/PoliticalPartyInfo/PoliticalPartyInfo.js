import React from 'react';
import { Text, View } from 'react-native';
import PoliticalPartyHeader from './PoliticalPartyHeader/PoliticalPartyHeader';
import PoliticalPartyData from './PoliticalPartyData/PoliticalPartyData';
import PoliticalPartyJson from '../../jsons/PoliticalParty.json'

const PoliticalPartyInfo = () => {
    return (
        <View>
            <PoliticalPartyHeader 
                name={PoliticalPartyJson.name} 
                candidate={PoliticalPartyJson.presidentialCandidate} 
            />
            
            <View style={{
                marginTop: 20,
                borderBottomColor: '#AAC4FF',
                borderBottomWidth: 2,
                marginBottom: -30}}></View>

            <PoliticalPartyData
                register={PoliticalPartyJson.registerDate}
                address={PoliticalPartyJson.address}
                phone={PoliticalPartyJson.phone}
                webSite={PoliticalPartyJson.webSite}
                platforms={PoliticalPartyJson.platforms}
            />
        </View>
    )
}

export default PoliticalPartyInfo;