import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { inputStyle } from './styles/InputStyle';

const Input = ({...props}) => {
    return (
        <View>
            <Text style={inputStyle.header} >{props.header}</Text>
            <TextInput 
                style={inputStyle.textInput}
                placeholder={props.placeHolder}
                placeholderTextColor={"#B1B2FF"}
            />
        </View>
    )
}

export default Input;