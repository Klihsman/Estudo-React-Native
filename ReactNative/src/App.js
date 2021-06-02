/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';

// import First from './components/first';
// import MinMax from './components/MinMax';
import Random from './components/Random';

const App = function () {
  return (
    <View style={style.App}>
      {/* <MinMax min={3} max={20} /> */}
      <Random min={3} max={20} />
      <Random min={3} max={20} />
      <Random min={3} max={20} />
      <Random min={3} max={20} />
      <Random min={3} max={20} />
      <Random min={3} max={20} />
      {/* <First /> */}
    </View>);
};
export default App;

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
