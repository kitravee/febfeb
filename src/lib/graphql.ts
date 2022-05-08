import { GraphQLClient } from 'graphql-request';

import { ENV } from '@/config/environment';

export const gqlClient = new GraphQLClient(
  ENV.GRAPH_CMS_API_ENDPOINT as string,
);
