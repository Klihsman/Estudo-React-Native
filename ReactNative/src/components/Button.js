/* eslint-disable prettier/prettier */
import React from 'react';
import {Button} from 'react-native';

export default props => {
  function Execute() {
    console.warn('EXEC!!');
  }
  return <Button title="Execute" onPress={Execute} />;
};
