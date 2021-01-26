import React from 'react';
import { NextPage } from 'next';
import { Box, Button, Container, Divider, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
import { useFormik } from 'formik';
import { IAuthProps } from '../interfaces/auth';
import NextLink from 'next/link';

const Login: NextPage = () => {
    const formik = useFormik<IAuthProps>({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
        }
    })
    return (
        <>
            <Box
            flexDirection="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={10}
            >
                <Heading color="#2E5EAA" size="md" p={2} >
                    <NextLink href="/">
                        Wellness.
                    </NextLink>
                </Heading>
            </Box>
            <Container>
                
            </Container>
            <Layout mw="500px" mt={5} padding={2} >
                <Box>
                    <Text fontSize="4xl" fontWeight="600" align="center">
                        Welcome back.
                    </Text>
                    <Text color="gray.500" align="center">
                        Start booking appointments now.
                    </Text>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={3} mt={10}>
                            <Input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Email address"
                            />
                            <Input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder="Password"
                            />
                            <Text _hover={{cursor: 'pointer'}} fontSize="sm" fontWeight="bold" color="blue.800">Forgot your password?</Text>
                            <Button
                            type="submit"
                            isLoading={formik.isSubmitting}
                            loadingText="Logging in..."
                            mb={5}
                            colorScheme="blue"
                            bg="#2E5EAA"
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                    <Divider />
                    <Box justifyContent="center" alignItems="center" display="flex" flexDirection="row">
                        <Text color="gray.500" fontSize="sm" mr={2}>Don't have an account? </Text>
                        <NextLink href="/register">
                            <a>
                                <Text color="blue.800" fontWeight="bold">Create one.</Text>
                            </a>
                        </NextLink>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}

export default Login;
