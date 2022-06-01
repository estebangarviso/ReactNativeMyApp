import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';

const Button: FC<
  {
    screenName?: string;
    backgroundColor?: string;
  } & TouchableOpacityProps
> = ({children, screenName, backgroundColor, onPress, ...otherProps}) => {
  const navigation = useNavigation();
  const handlePress = () =>
    screenName ? navigation.navigate(screenName as never) : onPress;
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundColor || '#16a34a'}]}
      onPress={handlePress}
      {...otherProps}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
