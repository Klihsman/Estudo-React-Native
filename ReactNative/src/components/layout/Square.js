/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';

export default props => {
    const size = 50;
    return (
        <View style={{
            height: size,
            width: size,
            backgroundColor: props.color || '#000'}}
        />
    );
};
