import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import PoliticalPartyHeader from './PoliticalPartyHeader/PoliticalPartyHeader';
import PoliticalPartyData from './PoliticalPartyData/PoliticalPartyData';
import PoliticalPartyJson from '../../jsons/PoliticalParty.json'
import { getPartyInfo } from '../../fetches/PoliticalParties/PoliticalParties';
import { useDispatch, useSelector } from 'react-redux';
import LottieView from "lottie-react-native";

const PoliticalPartyInfo = ({ route, navigation }) => {
    const { isLoading } = useSelector(state => state.basicReducer);
    const { token, rol } = useSelector(state => state.authReducer);
    const { 
        currentPartyName, 
        currentCandidateName, 
        currentProposals, 
        currentPositions, 
        currentLogo,
        currentAddress,
        currentWebsite,
        currentPhone } = useSelector(state => state.partiesReducer);

    console.log("currentProposals",currentProposals)

    const { partyName } = route.params

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPartyInfo(token, partyName))
    }, [])

    return (
        <>
        {isLoading ? 
        <LottieView source={require("../../assets/loader.json")} autoPlay loop />
        :
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
                    address={currentAddress}
                    phone={currentPhone}
                    website={currentWebsite}
                    platforms={currentProposals}
                    positions={currentPositions}
                />
            </View>

        </View>
        }
    </>
    )
}

export default PoliticalPartyInfo;