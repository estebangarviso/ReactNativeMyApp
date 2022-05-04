import {TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';

const Button: FC<ButtonType> = ({
  children,
  screenName,
  onPress,
  ...otherProps
}) => {
  const navigation = useNavigation();
  console.log(navigation);
  const handlePress = () =>
    screenName
      ? navigation.navigate(screenName as never)
      : onPress && onPress();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      {...otherProps}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#93FF33',
    height: 30,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Button;
