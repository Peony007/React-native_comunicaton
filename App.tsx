import React from 'react';

import { Text, View } from 'react-native';
interface Props {};

const App:React.FC<Props> = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Hello World</Text>
    </View>
  );
}

export default App;