import React from 'react';
import { Grid, Box, Container, Heading, Input, Stack, HStack, Button, Checkbox, Text, Divider, Flex, Spacer, Image } from '@chakra-ui/react'
import NextLink from 'next/link';
import { schema } from '../validation';
import { Formik, Form } from 'formik';
import { IRegisterForm } from '../interfaces/register';
import { NextPage } from 'next';
import FormError from '../components/FormError';
import { Layout } from '../components/Layout';


const Register: NextPage = () => {

    const initialValues: IRegisterForm = {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    }

    return (
        <Grid templateColumns="repeat(2, 1fr)"> 
            <Box w="100%" h="100vh" bg='#3B28CC'>
                <Flex>
                    <Box p={5}>
                        <NextLink href="/">
                            <Heading size='md' color='white'>Wellness</Heading>
                        </NextLink>
                    </Box>
                </Flex>
                <Layout mt={20} mw='600px' padding={5}>
                    <Text color='white' fontSize='4xl' fontWeight='700'>Health & wellness, simplified.</Text>
                    <Text color='white' fontSize='sm'>
                        Discover medical facilities and general practitioners all in one place. Book and manage your appointments, profile etc all a few taps away.
                    </Text>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Image 
                            src='/medicine.svg'
                            width='500px'
                            height='500px'
                        />
                    </Box>
                </Layout>
            </Box>
            <Box w="100%" h="100vh">
                <Flex>
                    <Spacer />
                    <Box p={5}>
                        <Heading>
                            👩🏽‍⚕️
                        </Heading>
                    </Box>
                </Flex>
                <Container centerContent={true} mt={20}>
                        <Heading mb={5}>🏥</Heading>
                        <Heading>
                            Create Account
                        </Heading>
                        <Formik
                        initialValues={initialValues}
                        onSubmit={ async (values, actions) => {
                            await new Promise((r) => setTimeout(r, 3000));
                            console.log(values);
                            actions.setSubmitting(false);
                        }}
                        validationSchema={schema}
                        >
                            {({errors, touched, isSubmitting, handleBlur, handleChange, values}) => (
                                <Form>
                                    <Stack spacing={3} mt={5}>
                                            <Input name="email" 
                                            placeholder="Email address" 
                                            value={values.email} 
                                            onChange={handleChange('email')} 
                                            onBlur={handleBlur('email')} />
                                            {errors.email && touched.email ? <FormError>{errors.email}</FormError> : null}
                                        <HStack>
                                            <Stack>
                                                <Input name="firstName" 
                                                placeholder="First name"
                                                value={values.firstName} 
                                                onChange={handleChange('firstName')}
                                                onBlur={handleBlur('firstName')} 
                                             />
                                                {errors.firstName && touched.firstName ? <FormError>{errors.firstName}</FormError> : null}
                                            </Stack>
                                            
                                            <Stack>
                                                <Input name="lastName" 
                                                placeholder="Last name"
                                                value={values.lastName} 
                                                onChange={handleChange('lastName')}
                                                onBlur={handleBlur('lastName')} 
                                                />                                        
                                                {errors.lastName && touched.lastName ? <FormError>{errors.lastName}</FormError> : null}
                                            </Stack>
                                        </HStack>
                                            <Input name="password" 
                                            placeholder="Password" 
                                            type="password"
                                            value={values.password} 
                                            onChange={handleChange('password')}
                                            onBlur={handleBlur('password')} 
                                            />
                                            {errors.password && touched.password ? <FormError>{errors.password}</FormError> : null}
                                        <Checkbox size="sm" colorScheme="blue">
                                            <Text fontSize="sm" color="gray.500">
                                                I agree to the Terms & Conditions.
                                            </Text>
                                        </Checkbox>
                                        <Button
                                        type="submit"
                                        isLoading={isSubmitting}
                                        loadingText="Signing up..."
                                        mb={5}
                                        colorScheme="blue"
                                        bg="#2E5EAA"
                                        >
                                            Sign Up
                                        </Button>
                                        <Divider />
                                        <Box justifyContent="center" alignItems="center" display="flex" flexDirection="row">
                                            <Text color="gray.500" fontSize="sm" mr={2}>Already have an account? </Text>
                                            <NextLink href="/login">
                                                <a>
                                                    <Text color="blue.800" fontWeight="bold">Sign In.</Text>
                                                </a>
                                            </NextLink>
                                        </Box>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                </Container>
            </Box>
        </Grid>
    );
}

export default Register;