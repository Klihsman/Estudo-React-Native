/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, FlatList} from 'react-native';
import Style from '../styles';

import products from './products';

export default props => {

    return (
        <>
            <Text style={Style.txtB}> Lista de produtos </Text>
            <FlatList
                data={products}
                renderItem={({item})=>{
                    return <Text>{item.id}) {item.name} - R$ {item.price}</Text>;
                }}
            />
        </>
    );
};
