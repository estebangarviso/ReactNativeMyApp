import React, {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../../components/Button';
import Product from '../../components/Product';
import Title from '../../components/Title';

const HomeScreen: FC = () => {
  const [data, setData] = useState([
    {name: 'Zapatos', id: 1},
    {name: 'Camisas', id: 2},
    {name: 'Telefonos', id: 3},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Title>Bienvenido</Title>
      {data.map(item => (
        <Product key={item.id} item={item} />
      ))}
      <Button screenName={'Login'}>
        <Text>Go to login</Text>
      </Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
