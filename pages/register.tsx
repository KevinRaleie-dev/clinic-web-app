import React from 'react';
import { Grid, Box, Image, Container, Heading, FormControl, FormLabel, Input, Stack, HStack, Button, Checkbox, Text, Divider, Flex, Spacer, VStack } from '@chakra-ui/react'
import NextLink from 'next/link';
import { schema } from '../validation';
import { Formik, Form } from 'formik';
import { IRegisterForm } from '../interfaces/register';
import { NextPage } from 'next';
import FormError from '../components/FormError';


const Register: NextPage = () => {

    const initialValues: IRegisterForm = {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    }

    return (
        <Grid templateColumns="repeat(2, 1fr)"> 
            <Box w="100%" h="100vh">
               <Image 
               src="/doctor.png"
               alt="docter image"
               objectFit="cover"
               width="100%"
               height="100vh"
               />
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
                                        bg="#3B28CC"
                                        >
                                            Sign Up
                                        </Button>
                                        <Divider />
                                        <Box justifyContent="center" alignItems="center" display="flex" flexDirection="row">
                                            <Text color="gray.500" fontSize="sm">Already have an account? </Text>
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