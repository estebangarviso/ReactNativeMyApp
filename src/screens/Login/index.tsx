import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Title from '../../components/Title';
import Button from '../../components/Button';

const LoginScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Login</Title>
      <Button screenName={'Home'}>
        <Text>Go to home</Text>
      </Button>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
