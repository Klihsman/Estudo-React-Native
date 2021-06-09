/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text} from 'react-native';
import Style from '../styles';

import CounterDisplay from './CounterDisplay';
import ButtonCounter from './ButtonCounter';

export default props => {
    const [num, setNum] = useState(0);

    const inc = () => setNum(num + 1);
    const dec = () => setNum(num - 1);

    return (
        <>
        <Text style={Style.txtB}>
            CounterV2
         </Text>
         <CounterDisplay  num={num}/>
         <ButtonCounter inc={inc} dec={dec} />
        </>
    );
};
