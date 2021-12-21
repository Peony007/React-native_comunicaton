import React , {useState} from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { color } from 'styled-system';
// export const MessageItem = (props: any) => {

interface Props {
  // first: String,
  // second: String,
  // third: String,
  name: String,
}

const getFullName = (first:string, second:string, third:string) => {
  return first + "" + second + "" + third ;
}

const CatOne: React.FC<Props> = ({name}) => {
  // const [isHungry, setIsHungry] = useState(true);
  const [isCat, setIsCat] = useState(true);
  return(
  <View>
    <Text>Hello {name}</Text>
    <Button 
      onPress={() => {
        setIsCat(false);
      }}
      disabled={!isCat}
      title={isCat? "Hello, Cat" : "Good buy"}
    />
  </View>
  )
}

const App: React.FC<Props> = (props:any) => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Text
        style={{
          paddingTop: 30,
        }}
      >Hello CatOne</Text>
      <View style={{padding: 10}}>
        <TextInput 
          style={{height: 30}}
          placeholder="Type"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Text>
          {text.split(' ').map((word) => word).join(' ')}
        </Text>
      </View>
      <View>
        <CatOne name="Cat" />
        <Text>Hello, I am a {getFullName("Caesar", "Kezar", "Help")} </Text>
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