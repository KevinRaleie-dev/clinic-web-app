import React from "react";
import { Flex, Box, Heading, Spacer, Button, Text, HStack } from "@chakra-ui/react";
import NextLink from 'next/link';
import { NavLink } from "../shared/NavLink";

export const Nav: React.FC<{}> = () => {

    return(
        <Flex p={4} position="sticky" top={0} zIndex={1}>
            <Box p="2">
                <HStack spacing={20}>
                 <Heading color="#2E5EAA" size="md" mr={10}>
                    <NextLink href="/">
                        Wellness
                    </NextLink>
                 </Heading>
                 <NavLink text="Services" /> 
                 <NavLink text="Locations" /> 
                 <NavLink text="Contact Support" /> 
                 <NavLink text="Pricing" /> 
                </HStack>
            </Box>
            <Spacer />
            <Box>
                <Button colorScheme="teal" mr="4">
                Book Appointment
                </Button>
                <NextLink href="/login">
                    <Button variant="outlined">Log in</Button>
                </NextLink>
            </Box>
        </Flex>
    );
}