import React from 'react';
import { Text, View } from 'react-native';
import PoliticalPartyHeader from './PoliticalPartyHeader/PoliticalPartyHeader';
import PoliticalPartyData from './PoliticalPartyData/PoliticalPartyData';
import PoliticalPartieJson from '../../jsons/PoliticalParty.json'

const PoliticalPartyInfo = () => {
    return (
        <View>
            <PoliticalPartyHeader 
                name={PoliticalPartieJson.name} 
                candidate={PoliticalPartieJson.presidentialCandidate} 
            />
            
            <View style={{
                marginTop: 20,
                borderBottomColor: '#AAC4FF',
                borderBottomWidth: 2,
                marginBottom: -30}}></View>

            <PoliticalPartyData
                register={PoliticalPartieJson.registerDate}
                address={PoliticalPartieJson.address}
                phone={PoliticalPartieJson.phone}
                webSite={PoliticalPartieJson.webSite}
                platforms={PoliticalPartieJson.platforms}
            />
        </View>
    )
}

export default PoliticalPartyInfo;