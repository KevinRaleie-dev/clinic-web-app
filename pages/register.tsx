import React from 'react';
import { Grid, Box, Container, Heading, Input, Stack, HStack, Button, Checkbox, Text, Divider, Flex, Spacer, Image } from '@chakra-ui/react'
import NextLink from 'next/link';
import { schema } from '../validation';
import { useFormik } from 'formik';
import { NextPage } from 'next';
import FormError from '../components/FormError';
import { Layout } from '../components/Layout';
import { IAuthProps } from '../interfaces/auth';
import { useRegisterMutation } from '../src/generated/graphql';
import { convertArrayToObject } from '../utils/toObject';
import {useRouter} from 'next/router';


const Register: NextPage = () => {
    const [register] = useRegisterMutation();

    const router = useRouter(); 

    const formik = useFormik<IAuthProps>({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: ''
        },
        validationSchema: schema, 
        onSubmit: async ({email, firstName, lastName, password}, {setErrors, resetForm}) => {
            const response = await register({
                variables: {
                  email,
                  firstName: firstName!,
                  lastName: lastName!,
                  password  
                },
            });

            if(response.data?.registerUser.errors) {
                setErrors(convertArrayToObject(response.data.registerUser.errors));
            }
            else if(response.data?.registerUser.user) {

                // navigate to the login page
                router.push('/login');
            }
        }
    })

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
                                <form onSubmit={formik.handleSubmit}>
                                    <Stack spacing={3} mt={5}>
                                            <Input name="email" 
                                            placeholder="Email address" 
                                            value={formik.values.email} 
                                            onChange={formik.handleChange('email')} 
                                            onBlur={formik.handleBlur('email')} />
                                            {formik.errors.email && formik.touched.email ? <FormError>{formik.errors.email}</FormError> : null}
                                        <HStack>
                                            <Stack>
                                                <Input name="firstName" 
                                                placeholder="First name"
                                                value={formik.values.firstName} 
                                                onChange={formik.handleChange('firstName')}
                                                onBlur={formik.handleBlur('firstName')} 
                                             />
                                                {formik.errors.firstName && formik.touched.firstName ? <FormError>{formik.errors.firstName}</FormError> : null}
                                            </Stack>
                                            
                                            <Stack>
                                                <Input name="lastName" 
                                                placeholder="Last name"
                                                value={formik.values.lastName} 
                                                onChange={formik.handleChange('lastName')}
                                                onBlur={formik.handleBlur('lastName')} 
                                                />                                        
                                                {formik.errors.lastName && formik.touched.lastName ? <FormError>{formik.errors.lastName}</FormError> : null}
                                            </Stack>
                                        </HStack>
                                            <Input name="password" 
                                            placeholder="Password" 
                                            type="password"
                                            value={formik.values.password} 
                                            onChange={formik.handleChange('password')}
                                            onBlur={formik.handleBlur('password')} 
                                            />
                                            {formik.errors.password && formik.touched.password ? <FormError>{formik.errors.password}</FormError> : null}
                                        <Checkbox size="sm" colorScheme="blue">
                                            <Text fontSize="sm" color="gray.500">
                                                I agree to the Terms & Conditions.
                                            </Text>
                                        </Checkbox>
                                        <Button
                                        type="submit"
                                        isLoading={formik.isSubmitting}
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
                                </form>
                </Container>
            </Box>
        </Grid>
    );
}

export default Register;