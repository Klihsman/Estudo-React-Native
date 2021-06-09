/* eslint-disable prettier/prettier */
import React from 'react';
import Son from './Son';

export default props => {
    let x = 13;
    let y = 100;

    return (
       <>
            <Son x={x} y={y}/>
            <Son x={x + 100} y={y + 100}/>
       </>
    );
};
