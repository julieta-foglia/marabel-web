import {
  ApolloClient,
  createHttpLink,
  DefaultOptions,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const httpLink = createHttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/lxeukizmc9ta/environments/master",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer N390hQR6IiYxAauwrrGpGnIW9t1bDZQasZtt7_uhnLw`,
    },
  };
});

export const ApolloClientApp = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: defaultOptions,
});
