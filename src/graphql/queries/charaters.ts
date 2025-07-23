import { gql } from 'graphql-request';

export const GET_CHARACTERS = gql`
  query ($first: Int) {
    allPeople(first: $first) {
      people {
        id
        name
        birthYear
        gender
      }
    }
  }
`;

export const GET_PEOPLE = gql`
  query Characters($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      people {
        id
        name
        gender
        birthYear
      }
    }
  }
`;
