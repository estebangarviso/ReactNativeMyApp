import React from 'react';
import {View, Text} from 'react-native';

export const Header = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c3c3c3',
        height: 30,
        width: 100,
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'red',
        }}>
        Header Component
      </Text>
    </View>
  );
};
