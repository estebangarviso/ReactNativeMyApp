import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';

const Title: FC = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 37,
    maxWidth: '100%',
  },
});

export default Title;
