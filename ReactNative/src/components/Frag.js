/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Style from './styles';

export default props => {
  return (
    <View>
      <Text style={Style.txtB}>{props.main}</Text>
      <Text>{props.secondary}</Text>
    </View>
  );
};
