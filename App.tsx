import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from './src/components/Button';

const App = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{counter}</Text>
      <Button onPress={increase}>
        <Text>Increase</Text>
      </Button>
      <Button onPress={decrease}>
        <Text>Decrease</Text>
      </Button>
      <Button onPress={reset}>
        <Text>Reset</Text>
      </Button>
    </View>
  );
};

export default App;
