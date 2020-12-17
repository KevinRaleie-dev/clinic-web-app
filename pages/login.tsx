import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const Login: NextPage = () => {
    return (
        <Container>
            <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            >
                <Text>

                </Text>
                <Heading>
                    Welcome back
                </Heading>
            </Box>
        </Container>
    )
}

export default Login;
