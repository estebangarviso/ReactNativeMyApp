import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Title from '../../components/Title';

const CheckoutScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Checkout</Title>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
