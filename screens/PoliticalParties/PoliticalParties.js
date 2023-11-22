import React, { useEffect, useState } from 'react';
import { Text, ScrollView, FlatList, View, Button } from 'react-native';
import PoliticalParty from '../PoliticalParty/PoliticalParty';
import { commonStyles } from '../commonStyles';

import { useDispatch, useSelector } from 'react-redux';
import { getPartiesFetch } from '../../fetches/PoliticalParties/PoliticalParties';
import LottieView from "lottie-react-native";

const PoliticalParties = ({navigation}) => {
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
        <ScrollView style={commonStyles.topContainer}>
            {rol === "Administrador" && 
                <View style={{ width: 340, marginTop: 10 }}>
                    <Button 
                        title='Crear Partido Político' 
                        color='#E95793' 
                        onPress={() => navigation.navigate('CreateParty')} 
                    />
                </View>
            }

            <View style={{ 
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: -10
            }}>
                <Text style={commonStyles.pinkTitle}>Partidos políticos</Text>
            </View>

            <View>
                <View style={{ marginBottom: 5 }}>
                    <Text style={commonStyles.footer}>Panorama completo de los partidos políticos participantes en las elecciones presidenciales de México</Text>
                </View>

                {parties.map((party) => {
                    return (
                        <PoliticalParty 
                            key={party.politicalPartyId}
                            partyName={party.politicalPartyName} 
                            partyId={party.politicalPartyId}
                            candidate={party.politicianName}
                            logo={party.logoImgPath}
                            navigation={navigation}
                            rol={rol} />
                    )
                })}
            </View>
        </ScrollView>
        }
    </>
    )
}

export default PoliticalParties