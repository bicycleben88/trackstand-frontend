import {ApolloClient, ApolloLink, InMemoryCache} from '@apollo/client';
import {onError} from '@apollo/link-error';
import {createUploadLink} from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import {getDataFromTree} from '@apollo/react-ssr';

function createClient({headers, initialState}) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({graphQLErrors, networkError}) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({message, locations, path}) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
        }
        if (networkError) {
          console.log(
            `[Network error]: ${networkError}. Can't reach the backend`,
          );
        }
      }),
      createUploadLink({
        uri:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api/graphql'
            : undefined,
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      }),
    ]),
    cache: new InMemoryCache(),
  }).restore(initialState || {});
}

export default withApollo(createClient, {getDataFromTree});
