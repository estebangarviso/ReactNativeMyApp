import {Route} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Title from '../../components/Title';

const DetailsScreen: FC<{route: Route<string, ProductInterface>}> = ({
  route,
}) => {
  const {name} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Title>{name}</Title>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default DetailsScreen;
