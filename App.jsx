import React from 'react';
import { Text, View } from 'react-native';

export const App = () => (
  <View
    style={{
      alignItems: 'center',
      backgroundColor: 'green',
      height: 128,
      justifyContent: 'center',
      width: 128,
    }}
  >
    <Text style={{ color: 'white' }}>Hello World</Text>
  </View>
);

export default App;
