// graphql/client.ts
import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://graphql.org/graphql/';

export const gqlClient = new GraphQLClient(endpoint);
