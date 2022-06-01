import React, {FC} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import CharacterItem from '../CharacterItem';
import {CHARACTER_QUERY} from './queries';

const Index: FC<{page: number}> = ({page}) => {
  const {data, loading, error} = useQuery(CHARACTER_QUERY, {
    variables: {page},
  });

  // if (loading)
  //   return <ActivityIndicator size={'large'} style={{padding: 20}} />;

  if (error) {
    throw error;
  }

  const characters: CharacterProps[] | [] = data?.characters?.results
    ? data?.characters?.results
    : [];

  return (
    <View style={styles.container}>
      {characters.map(character => {
        return <CharacterItem character={character} key={character?.id} />;
      })}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
