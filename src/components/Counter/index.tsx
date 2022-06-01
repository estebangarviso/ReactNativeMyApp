import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../Button';

const Counter: FC = () => {
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
    <View>
      <Text>Home</Text>
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

export default Counter;
