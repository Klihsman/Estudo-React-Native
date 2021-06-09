/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Square from './Square';

export default props => {
    return (
        <View style={style.FlexV3}>
            <Square />
            <Square color="#f00"/>
            <Square color="#0f0"/>
            <Square color="#f0f"/>
        </View>
    );
};

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 300,
        width: '100%',
        backgroundColor: '#000',
    },
});
