import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;

const CharacterItem: FC<{character: CharacterProps}> = ({character}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={character.id}
      style={styles.container}
      onPress={() => {
        navigation.navigate('Details' as never, character as never);
      }}>
      <Image style={styles.image} source={{uri: character.image}} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.others}>Gender: {character.gender}</Text>
      <Text style={styles.others}>Species: {character.species}</Text>
      <Text style={styles.others}>Type: {character.type}</Text>
      <Text style={character.status === 'Alive' ? styles.alive : styles.dead}>
        {character.status}
      </Text>
    </TouchableOpacity>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  container: {maxWidth: '100%', paddingVertical: 20},
  image: {
    width: width * 0.9,
    height: 300,
    borderRadius: 5,
  },
  name: {marginTop: 8, fontSize: 18, fontWeight: '800'},
  others: {marginTop: 2, fontSize: 15, fontWeight: '500'},
  alive: {
    marginTop: 2,
    fontSize: 15,
    fontWeight: '500',
    color: 'green',
  },
  dead: {
    marginTop: 2,
    fontSize: 15,
    fontWeight: '500',
    color: 'red',
  },
});
