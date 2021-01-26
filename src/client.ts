import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const error = onError(({graphQLErrors, networkError}) => {

    if(graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => 
            console.log(`[GraphQL Error]: Message: ${message} \n Locations: ${locations} \n Path: ${path}`)
        );
    }

    if(networkError) {
        console.log(`[Network Error]: ${networkError}`);
    }
});

const httplink = createHttpLink({
    uri: process.env.NEXT_APP_BACKEND_URI || 'http://localhost:4000/graphql',
});

export const client = new ApolloClient({
    link: error.concat(httplink),
    cache: new InMemoryCache(),
    credentials: 'include'
});