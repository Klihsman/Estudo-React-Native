/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import Style from '../styles';

export default props => {
    return (
        <>
            <Text style={Style.txtB}> {props.x} </Text>
            <Text style={Style.txtB}> {props.y} </Text>
        </>
    );
};
