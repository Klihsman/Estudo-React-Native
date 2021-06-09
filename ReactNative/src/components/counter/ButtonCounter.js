/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default props => {
    return (
        <View style={style.ButtonsContainer}>
            <Button title="+" onPress={props.inc}/>
            <Button title="-" onPress={props.dec}/>
        </View>
    );
};

const style = StyleSheet.create({
    ButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
    },
});
