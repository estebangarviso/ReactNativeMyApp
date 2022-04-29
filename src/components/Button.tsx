import {TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';
type Props = {
  onPress: () => void;
  children: React.ReactNode;
};
const Button: FC<Props> = ({children, ...otherProps}) => {
  return (
    <TouchableOpacity style={styles.button} {...otherProps} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c3c3c3',
    height: 30,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Button;
