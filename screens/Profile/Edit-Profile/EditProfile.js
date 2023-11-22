import React from 'react';
import { ScrollView, View } from 'react-native';
import Top from './Top/Top';

const EditProfile = ({route, navigation}) => {
    return(
        <ScrollView>
            <Top passedNavgation={navigation} />
            <View style={{
                marginTop: -2,
                borderBottomColor: '#AAC4FF',
                borderBottomWidth: 2,
                marginBottom: -10}}></View>
        </ScrollView> 
    )
}

export default EditProfile;