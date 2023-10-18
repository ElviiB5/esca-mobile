import React from 'react';
import { ScrollView, View } from 'react-native';
import Top from './Top/Top';
import Bottom from './Bottom/Bottom';

const EditProfile = ({navigation}) => {
    return(
        <ScrollView>
            <Top passedNavgation={navigation} />
            <View style={{
                marginTop: -2,
                borderBottomColor: '#AAC4FF',
                borderBottomWidth: 2,
                marginBottom: -10}}></View>
            <Bottom passedNavgation={navigation}/>
        </ScrollView> 
    )
    }

    export default EditProfile;