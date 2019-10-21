import React from 'react';
import {View} from 'react-native';
import Calculator from './src/components/Calculator';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFE'}}>
      <Calculator />
    </View>
  );
};

export default App;
