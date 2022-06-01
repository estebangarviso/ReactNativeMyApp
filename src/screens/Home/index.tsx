import {AxiosError, AxiosResponse} from 'axios';
import React, {FC, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import CharacterItem from '../../components/CharacterItem';
import Loader from '../../components/Loading';
import PaginationButtons from '../../components/PaginationButtons';
import APP_ENV from '../../config/env';
const axios = require('axios').default;

const HomeScreen: FC = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageInfo, setPageInfo] = useState<CharacterResponseInfo>({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`${APP_ENV.API_URL}character?page=${page}`)
      .then((response: AxiosResponse<CharacterResponse>) => {
        setPageInfo(response.data.info);
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        setLoading(false);
        throw err;
      });
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {loading ? (
          <Loader />
        ) : (
          <>
            {characters?.map(character => (
              <CharacterItem key={character.id} character={character} />
            ))}
            <PaginationButtons
              page={page}
              setPage={setPage}
              pageInfo={pageInfo}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
