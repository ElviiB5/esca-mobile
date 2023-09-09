import React from 'react';
import { Text, ScrollView, FlatList, View } from 'react-native';
import PoliticalParty from '../PoliticalParty/PoliticalParty';
import { commonStyles } from '../commonStyles';

const PoliticalPartiesJson = [
    {
        politcalPartyId: 1,
        name: "Nombre del partido político 1",
        description: "Este es un ejemplo de la descripción del partido político, esta va a mostrar sólo una parte de su descripción...",
        presidentialCandidate: "Nombre del Candidato",
        registerDate: "09 de Septiembre del 2023",
        address: "Calle Esta es la calle, No. ###, Col. Esta es la colonia, CP: ######",
        phone: "##########",
        webSite: "https://este-es-el-sitio-web.com"
    },
    {
        politcalPartyId: 2,
        name: "Nombre del partido político 2",
        description: "Este es un ejemplo de la descripción del partido político, esta va a mostrar sólo una parte de su descripción...",
        presidentialCandidate: "Nombre del Candidato",
        registerDate: "09 de Septiembre del 2023",
        address: "Calle Esta es la calle, No. ###, Col. Esta es la colonia, CP: ######",
        phone: "##########",
        webSite: "https://este-es-el-sitio-web.com"
    },
    {
        politcalPartyId: 3,
        name: "Nombre del partido político 3",
        description: "Este es un ejemplo de la descripción del partido político, esta va a mostrar sólo una parte de su descripción...",
        presidentialCandidate: "Nombre del Candidato",
        registerDate: "09 de Septiembre del 2023",
        address: "Calle Esta es la calle, No. ###, Col. Esta es la colonia, CP: ######",
        phone: "##########",
        webSite: "https://este-es-el-sitio-web.com"
    },
    {
        politcalPartyId: 4,
        name: "Nombre del partido político 4",
        description: "Este es un ejemplo de la descripción del partido político, esta va a mostrar sólo una parte de su descripción...",
        presidentialCandidate: "Nombre del Candidato",
        registerDate: "09 de Septiembre del 2023",
        address: "Calle Esta es la calle, No. ###, Col. Esta es la colonia, CP: ######",
        phone: "##########",
        webSite: "https://este-es-el-sitio-web.com"
    },
    {
        politcalPartyId: 5,
        name: "Nombre del partido político 5",
        description: "Este es un ejemplo de la descripción del partido político, esta va a mostrar sólo una parte de su descripción...",
        presidentialCandidate: "Nombre del Candidato",
        registerDate: "09 de Septiembre del 2023",
        address: "Calle Esta es la calle, No. ###, Col. Esta es la colonia, CP: ######",
        phone: "##########",
        webSite: "https://este-es-el-sitio-web.com"
    },
    {
        politcalPartyId: 6,
        name: "Nombre del partido político 6",
        description: "Este es un ejemplo de la descripción del partido político, esta va a mostrar sólo una parte de su descripción...",
        presidentialCandidate: "Nombre del Candidato",
        registerDate: "09 de Septiembre del 2023",
        address: "Calle Esta es la calle, No. ###, Col. Esta es la colonia, CP: ######",
        phone: "##########",
        webSite: "https://este-es-el-sitio-web.com"
    }
]

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