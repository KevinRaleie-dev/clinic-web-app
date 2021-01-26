import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../src/client';

const App = ({Component, pageProps}: any) => {
    
    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                <Component {...pageProps}/>
            </ChakraProvider>
        </ApolloProvider>
    );
}

export default App;