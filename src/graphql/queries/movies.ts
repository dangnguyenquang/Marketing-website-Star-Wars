import { gql } from 'graphql-request';

export const GET_MOVIES = gql`
  query GetMovies($first: Int) {
    allFilms(first: $first) {
      films {
        id
        title
        releaseDate
        director
        openingCrawl
      }
    }
  }
`;

export const FILMS_QUERY = gql`
  query AllFilms {
    allFilms {
      films {
        id
        title
        releaseDate
        director
        producers
      }
    }
  }
`;

export const GET_FILM_BY_ID = gql`
  query Film($filmId: ID!) {
    film(filmID: $filmId) {
      title
      director
      edited
      episodeID
      openingCrawl
      producers
      releaseDate
      characterConnection {
        characters {
          name
          skinColor
          species {
            name
          }
        }
      }
      planetConnection {
        planets {
          name
        }
      }
      speciesConnection {
        species {
          name
        }
      }
      starshipConnection {
        starships {
          name
        }
      }
      vehicleConnection {
        vehicles {
          name
        }
      }
    }
  }
`;


