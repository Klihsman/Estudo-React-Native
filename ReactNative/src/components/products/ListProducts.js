/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import Style from '../styles';

import products from './products';

export default props => {
    function renderList(){
        return products.map(p => {
            return <Text key={p.id}>{p.id} {p.name} custa R$ {p.price} </Text>;
        });
    }

    return (
        <>
            <Text style={Style.txtB}> Lista de produtos </Text>
            {renderList()}
        </>
    );
};
