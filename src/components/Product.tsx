import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';

const Product: FC<ProductType> = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={item.id}
      style={styles.miniatureProductContainer}
      onPress={() => {
        navigation.navigate('Details' as never, item as never);
      }}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  miniatureProductContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
});

export default Product;
