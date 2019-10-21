import React from 'react';
import {View} from 'react-native';
import Calculator from './src/components/Calculator';

const App = () => {
  return (
    <View style={{flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#00b89C'}}>
      <Calculator />
    </View>
  );
};

export default App;
