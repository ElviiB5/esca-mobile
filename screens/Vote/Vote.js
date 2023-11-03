import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import PoliticalPartyChoice from './PoliticalPartyChoice/PoliticalPartyChoice';
import { commonStyles } from '../commonStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getPartiesFetch } from '../../fetches/PoliticalParties/PoliticalParties';

const Vote = () => {
    const { token, rol } = useSelector(state => state.authReducer);
    const { parties } = useSelector(state => state.partiesReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPartiesFetch(token))
    }, [])

    return (
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
                renderItem={({ item }) => <PoliticalPartyChoice key={item.politicalPartyId} name={item.politicalPartyName} candidate={item.userId} />}
            />
        </View>
    )
}

export default Vote;