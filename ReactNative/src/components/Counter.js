/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, Text} from 'react-native';

import Style from './styles';

export default props => {
    const [number, setNumber] = useState(props.initial);

    const inc = () => setNumber(number + props.step);
    const dec = () => setNumber(number - props.step);

    return (
    <>
        <Text style={Style.txtB}>{number}</Text>
        <Button title="+" onPress={inc}/>
        <Button title="-" onPress={dec}/>
    </>
    );
};
