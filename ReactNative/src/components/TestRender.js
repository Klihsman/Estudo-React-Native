/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import Style from './styles';

export default ({num = 0}) => {
        return (
            <View>
                <Text style={Style.txtB}> O Resultado é:</Text>
                {num % 2 === 0
                    ? <Text style={Style.txtB}> Par </Text>
                    : <Text style={Style.txtB}> Impar </Text>
                }
            </View>
        );
};
