import React , {useState} from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { color } from 'styled-system';

  interface Props {
  }

const App: React.FC<Props> = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <View>
        <Text>Hello, I am a  </Text>
        <Image
          source={require("../assets/images/p_cat2.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          paddingLeft: 20,
          borderWidth: 1,
          color: "black",
        }}
        defaultValue="Hello, Cat"
      />
    </ScrollView>
  );
}

export default App;