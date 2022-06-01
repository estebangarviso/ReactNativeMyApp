import {SENTRY_DSN, API_URL, GRAPHQL_URL} from '@env';

const development = {
  SENTRY_DSN,
  API_URL,
  GRAPHQL_URL,
};

const production = {
  SENTRY_DSN,
  API_URL,
  GRAPHQL_URL,
};

export default __DEV__ ? development : production;
