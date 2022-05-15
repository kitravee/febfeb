import { GraphQLClient } from 'graphql-request';

export const gqlClient = new GraphQLClient(
  process.env.GRAPH_CMS_API_ENDPOINT as string,
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  },
);
