import React from 'react';
import { NextPage } from 'next';
import { Box, Button, Container, Divider, Input, Stack, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
import { useFormik } from 'formik';
import { IAuthProps } from '../interfaces/auth';
import NextLink from 'next/link';
import { useRouter } from "next/router";
import { useLoginMutation } from '../src/generated/graphql';
import { convertArrayToObject } from '../utils/toObject';
import FormError from '../components/FormError';
import Logo from '../components/Logo';
import { theme } from '../theme/theme';

const Login: NextPage = () => {
    const router = useRouter(); 
    const [login] = useLoginMutation();

    const formik = useFormik<IAuthProps>({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values, actions) => {
            const response = await login({
                variables: {
                    email: values.email,
                    password: values.password
                }
            });

            if (response.data?.loginUser.errors) {
                actions.setErrors(convertArrayToObject(response.data.loginUser.errors));
            }

            if (response.data?.loginUser.user) {
                // take me to the home page
                router.push('/dashboard');
            }
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
                <Logo link="/" textColor={theme.primaryColor} textSize="md"/>
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
                            {formik.errors.email && formik.touched.email ? <FormError>{formik.errors.email}</FormError> : ''}
                            <Input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder="Password"
                            />
                            {formik.errors.password && formik.touched.password ? <FormError>{formik.errors.password}</FormError> : ''}
                            <Text _hover={{cursor: 'pointer'}} fontSize="sm" fontWeight="bold" color="blue.800">Forgot your password?</Text>
                            <Button
                            type="submit"
                            isLoading={formik.isSubmitting}
                            loadingText="Logging in..."
                            mb={5}
                            color="white"
                            colorScheme="gray.700"
                            bg={theme.buttons.primary}
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
