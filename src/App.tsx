import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import MateriFlexBox from './pages/Flexbox';
import PositionReactNative from './pages/PositionReactNative';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import BasicJavascript from './pages/BasicJavascript';
import ReactNativeSVG from './pages/ReactNativeSVG';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import Luas from './pages/LuasSegitiga';
import LocalAPI from './pages/LocalAPI'

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <MateriFlexBox /> */}
        {/* <PropsDinamis />
        <StateDinamis /> */}
        {/* <StylingComponent /> */}
        {/* <PositionReactNative /> */}
        {/* <Communication /> */}
        {/* <BasicJavascript /> */}
        {/* <ReactNativeSVG /> */}
        {/* <CallAPIVanilla /> */}
        {/* <Luas /> */}
        {/* <CallAPIAxios /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  );
};

export default App;