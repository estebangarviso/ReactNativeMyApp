import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {FC} from 'react';
import Button from '../Button';

const PaginationButtons: FC<PagginationButtonsProps> = ({
  page,
  setPage,
  pageInfo,
}) => {
  const pages = pageInfo?.pages;
  const handlePrevious = () => page > 1 ?? setPage(page - 1);
  const handleNext = () => page <= pages ?? setPage(page + 1);

  return (
    <View style={styles.row}>
      <Button color="#22d3ee" onPress={handlePrevious} style={styles.button}>
        <Icon name="chevron-left" size={18} color="white" />
      </Button>
      <Text>
        {page} of {pages}
      </Text>
      <Button color="#22d3ee" onPress={handleNext} style={styles.button}>
        <Icon name="chevron-right" size={18} color="white" />
      </Button>
    </View>
  );
};

export default PaginationButtons;

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
