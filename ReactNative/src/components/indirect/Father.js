/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text} from 'react-native';
import styles from '../styles';

import Son from './Son';

export default props => {
    const [number, setNumber] = useState(0);

    function exibitionNumber(num){
        setNumber(num);
    }

    return (
        <>
            <Text style={styles.txtB}>{number}</Text>
            <Son
                min={4}
                max={60}
                funtion={exibitionNumber}
            />
        </>
    );
};
