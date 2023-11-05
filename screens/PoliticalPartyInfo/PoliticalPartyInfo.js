import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import PoliticalPartyHeader from './PoliticalPartyHeader/PoliticalPartyHeader';
import PoliticalPartyData from './PoliticalPartyData/PoliticalPartyData';
import PoliticalPartyJson from '../../jsons/PoliticalParty.json'
import { getPartyInfo } from '../../fetches/PoliticalParties/PoliticalParties';
import { useDispatch, useSelector } from 'react-redux';

const PoliticalPartyInfo = ({ route, navigation }) => {
    const { token, rol } = useSelector(state => state.authReducer);
    const { 
        currentPartyName, 
        currentCandidateName, 
        currentProposals, 
        currentLogo,
        currentMunicipality,
        currentState,
        currentStreet,
        currentNumber,
        currentNeighbor,
        currentZipCode,
        currentLatitude,
        currentLongitude,
        currentWebsite,
        currentPhone } = useSelector(state => state.partiesReducer);

    const { partyName } = route.params

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPartyInfo(token, partyName))
    }, [])

    return (
        <View>
            <PoliticalPartyHeader 
                name={currentPartyName} 
                logo={currentLogo}
                candidate={currentCandidateName} 
            />
            
            <View style={{
                marginTop: 5,
                borderBottomColor: '#AAC4FF',
                borderBottomWidth: 2,
                marginBottom: -15}}></View>
            
            <View style={{ marginTop: 20 }}>
                <PoliticalPartyData
                    register={PoliticalPartyJson.registerDate}
                    municipality={currentMunicipality}
                    state={currentState}
                    street={currentStreet}
                    number={currentNumber}
                    neighbor={currentNeighbor}
                    zipCode={currentZipCode}
                    latitud={currentLatitude}
                    longitud={currentLongitude}
                    phone={currentPhone}
                    website={currentWebsite}
                    platforms={PoliticalPartyJson.platforms} //currentProposals???
                />
            </View>

        </View>
    )
}

export default PoliticalPartyInfo;