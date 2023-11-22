import React from 'react';
import { Text, View } from 'react-native';
import { partyInfo } from '../styles/PoliticalPartyInfo';

const PoliticalPartyPlatform = ({...props}) => {
    return (
        <View>
            <View style={{ marginTop: 10 }}>
                <Text style={partyInfo.normalAlignText}>
                    + {props.description}
                </Text>
            </View>
        </View>
    )
}

export default PoliticalPartyPlatform;