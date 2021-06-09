/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import Style from './styles';

import If from './If';

export default props => {
    const user = props.user || {};

    return (
        <>
            <If test={user && user.name && user.email}>
                <Text style={Style.txtB} >Usuário logado é:</Text>
                <Text style={Style.txtB}>
                    {user.name} - {user.email}
                </Text>
            </If>
        </>
    );
};
