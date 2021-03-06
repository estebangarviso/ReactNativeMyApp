import {gql} from '@apollo/client';

export const CHARACTER_QUERY = gql`
  query character_query($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        gender
        type
        species
        status
        image
        location {
          name
        }
      }
    }
  }
`;
