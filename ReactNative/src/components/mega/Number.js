/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Style from '../styles';

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[Style.txtB, style.Num]}>
                {num}
             </Text>
        </View>
    );
};

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
        backgroundColor: '#000',
    },
    Num:{
        color: '#fff',
    },
});
