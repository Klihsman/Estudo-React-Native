/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Mega from './components/mega/Mega';
// import FlexBoxV4 from './components/layout/FlexBoxV4';
// import FlexBoxV3 from './components/layout/FlexBoxV3';
// import FlexBoxV2 from './components/layout/FlexBoxV2';
// import FlexBox from './components/layout/FlexBox';
// import TypePlease from './components/TypePlease';
// import ListProductsV2 from './components/products/ListProductsV2';
// import ListProducts from './components/products/ListProducts';
// import UserLogged from './components/UserLogged';
// import TestRender from './components/TestRender';
// import CounterV2 from './components/counter/CounterV2';
// import Family from './components/relationship/Family';
// import Member from './components/relationship/Member';
// import Father from './components/indirect/Father';
// import Father from './components/direct/Father';
// import Counter from './components/Counter';
// import First from './components/first';
// import MinMax from './components/MinMax';
// import Random from './components/Random';
// import Titulo from './components/Frag';
// import Button from './components/Button';

const App = function () {
  return (
    <SafeAreaView style={style.App}>
      <Mega qtdNumber={3} />
      {/* <FlexBoxV4 /> */}
      {/* <FlexBoxV3 /> */}
      {/* <FlexBoxV2 /> */}
      {/* <FlexBox /> */}
      {/* <TypePlease /> */}
      {/* <ListProductsV2 /> */}
      {/* <ListProducts /> */}
      {/* <UserLogged user={{name: 'Klihsman', email:'klihsman@gmail.com'}}/> */}
      {/* <TestRender num={7} /> */}
      {/* <CounterV2 /> */}
      {/* <Family>
        <Member name="Klihsman" surName="Freitas"/>
        <Member name="Kirlley" surName="Freitas"/>
      </Family>
      <Family>
        <Member name="João" surName="Freitas"/>
        <Member name="José" surName="Freitas"/>
      </Family> */}
      {/* <Father /> */}
      {/* <Father /> */}
      {/* <Counter initial={100} step={2}/> */}
      {/* <Button /> */}
      {/* <Titulo main="I'm Here" secondary="I'm Here too"/> */}
      {/* <MinMax min={3} max={20} /> */}
      {/* <Random min={3} max={20} /> */}
      {/* <First /> */}
    </SafeAreaView>);
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
