/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Style from './styles';

export default props => {
    const [ name, setName] = useState('test');

    return (
        <View style={Style.txtB}>
            <TextInput
                placeholder="Digite seu nome"
                value={name}
                onChangeText={ nameE => setName(nameE)}
            />
        </View>
    );
};
