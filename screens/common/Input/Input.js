import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { inputStyle } from './styles/InputStyle';

const Input = ({header, placeHolder, onChange, value}) => {
    return (
        <View>
            <Text style={inputStyle.header} >{header}</Text>
            <TextInput 
                style={inputStyle.textInput}
                placeholder={placeHolder}
                placeholderTextColor={"#B1B2FF"}
                onChange={onChange}
                value={value}
            />
        </View>
    )
}

export default Input;