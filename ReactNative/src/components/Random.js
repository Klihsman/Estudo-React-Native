/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';

import Style from './styles';

export default (props) => {

    function Generate(max, min){
        const randomNumber = parseInt(Math.random() * (max - min), 10) + min;
        return randomNumber;
    }

    return (
        <Text style={Style.txtB}>O valor aleatório entre {props.min} e {props.max} é: {Generate(props.max, props.min)}</Text>
    );
};
