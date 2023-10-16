import React, { useEffect } from 'react';
import { Text, ScrollView, FlatList, View, Button } from 'react-native';
import PoliticalParty from '../PoliticalParty/PoliticalParty';
import { commonStyles } from '../commonStyles';

import PoliticalPartiesJson from '../../jsons/PoliticalParties.json'
import { useDispatch, useSelector } from 'react-redux';
import { getPartiesFetch } from '../../fetches/PoliticalParties/PoliticalParties';

const PoliticalParties = ({navigation}) => {
    const { token, rol } = useSelector(state => state.authReducer);
    const { parties } = useSelector(state => state.partiesReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPartiesFetch(token))
    }, [])

    console.log("parties",parties)
    return (
        <View style={commonStyles.topContainer}>
            {rol === "Administrador" && 
                <View style={{ width: 340, marginTop: 10 }}>
                    <Button 
                        title='Crear Partido Político' 
                        color='#E95793' 
                        onPress={() => navigation.navigate('PoliticalPartyInfo')} 
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

                <FlatList 
                    data={PoliticalPartiesJson}
                    renderItem={({ item }) => <PoliticalParty 
                                                    name={item.name} 
                                                    description={item.description} 
                                                    candidate={item.presidentialCandidate}
                                                    navigation={navigation}
                                                    rol={rol} />
                    }
                    keyExtractor={item => item.politcalPartyId}
                />
            </View>
        </View>
    )
}

export default PoliticalParties