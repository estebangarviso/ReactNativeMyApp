import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../Button';

const AddToCartButtons: FC<AddToCartProps> = ({setCart, cart, character}) => {
  const areIn = cart.includes(character);

  const handleDelete = () => {
    setCart(cart.filter(item => item !== character));
  };
  const handleAdd = () => {
    setCart([...cart, character]);
  };

  return (
    <View style={styles.row}>
      {areIn ? (
        <Button onPress={handleDelete} backgroundColor="#dc2626">
          <Icon name="trash" size={20} color="white" /> Delete
        </Button>
      ) : (
        <Button
          onPress={handleAdd}
          style={styles.button}
          backgroundColor="#16a34a">
          <Icon name="shopping-cart" size={20} color="white" /> Add
        </Button>
      )}
    </View>
  );
};

export default AddToCartButtons;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
