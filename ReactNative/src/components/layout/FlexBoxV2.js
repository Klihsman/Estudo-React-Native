/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Square from './Square';

export default props => {
    return (
        <View style={style.FlexV2}>
            <Square />
            <Square color="#f00"/>
            <Square color="#0f0"/>
            <Square color="#f0f"/>
        </View>
    );
};

const style = StyleSheet.create({
    FlexV2: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
    },
});
