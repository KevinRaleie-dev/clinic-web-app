import React from 'react';
import { Grid, Box, Container, Heading, Input, Stack, HStack, Button, Checkbox, Text, Divider, Flex, Spacer, Image } from '@chakra-ui/react'
import NextLink from 'next/link';
import { schema } from '../utils/validation';
import { useFormik } from 'formik';
import { NextPage } from 'next';
import FormError from '../components/FormError';
import { Layout } from '../components/Layout';
import { IAuthProps } from '../interfaces/auth';
import { useRegisterMutation } from '../src/generated/graphql';
import { convertArrayToObject } from '../utils/toObject';
import {useRouter} from 'next/router';
import Logo from '../components/Logo';
import { theme } from '../theme/theme';


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
        onSubmit: async ({email, firstName, lastName, password}, {setErrors}) => {
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
            <Box w="80%" h="100vh" bg={theme.secondaryColor}>
                <Flex>
                    <Box p={5}>
                        <Logo link="/" textColor="white" textSize="md"/>
                    </Box>
                </Flex>
            </Box>
            <Box w="100%" h="100vh">
                <Flex>
                    <Spacer />
                </Flex>
                <Container centerContent={true} mt={20}>
                        <Heading>
                            Create Account
                        </Heading>
                        <Text mt={5} fontSize='sm' color='gray.500'>
                            Join us. Become part of a network of health professionals and practices.
                        </Text>
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
                                        colorScheme="gray.700"
                                        color='white'
                                        bg={theme.buttons.primary}
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