/* eslint-disable prettier/prettier */
import React from 'react';
import {Button} from 'react-native';

export default props => {
    function generateNumber (min, max){
        const randomNumber = parseInt(Math.random() * (max - min), 10) + min;
        return randomNumber;
    }

    return (
        <Button
            title="Execute"
            onPress={
                function(){
                const n = generateNumber(props.min, props.max);
                props.funtion(n);
            }}
        />
    );
};
