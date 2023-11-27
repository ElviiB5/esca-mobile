import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import PoliticalPartyChoice from './PoliticalPartyChoice/PoliticalPartyChoice';
import { commonStyles } from '../commonStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getPartiesFetch } from '../../fetches/PoliticalParties/PoliticalParties';
import LottieView from "lottie-react-native";
import FlashMessage from 'react-native-flash-message';

const Vote = () => {
    const { token, rol } = useSelector(state => state.authReducer);
    const { parties } = useSelector(state => state.partiesReducer);
    const { isLoading } = useSelector(state => state.basicReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPartiesFetch(token))
    }, [])

    return (
        <>
        {isLoading ? 
        <LottieView source={require("../../assets/loader.json")} autoPlay loop />
        :
        <View style={{ marginBottom: 65 }}>
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
                data={parties}
                renderItem={({ item }) => <PoliticalPartyChoice key={item.politicalPartyId} name={item.politicalPartyName} candidate={item.politicianName} />}
            />
            <FlashMessage position="top" />
        </View>
        }
    </>
    )
}

export default Vote;