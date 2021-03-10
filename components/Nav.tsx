import React from "react";
import { Flex, Box, Heading, Spacer, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import { NavLink } from "../shared/NavLink";
import Logo from "./Logo";
import {theme} from '../theme/theme';

export const Nav: React.FC<{}> = () => {

    return(
        <Flex p={4} position="sticky" top={0} zIndex={1} backgroundColor='white' opacity={0.8}>
            <Box p="2">
                <HStack spacing="50px">
                 <Logo link="/" textColor={theme.primaryColor} textSize="md" mr={5}/>
                 <NavLink text="Services" /> 
                 <NavLink text="Locations" /> 
                 <NavLink text="Contact Support" /> 
                 <NavLink text="Pricing" /> 
                </HStack>
            </Box>
            <Spacer />
            <Box>
                <Button color='white' colorScheme='black' backgroundColor={theme.buttons.primary} mr="4">
                Book Appointment
                </Button>
                <Menu>
                    <MenuButton>
                        <Button colorScheme='gray'>
                        ::: Menu
                        </Button>
                    </MenuButton>
                    <MenuList>
                        <NextLink href="/login">
                            <MenuItem>
                                <Text>Login</Text>
                            </MenuItem>
                        </NextLink>
                        <NextLink href="/register">
                            <MenuItem>
                                <Text>Sign Up</Text>
                            </MenuItem>
                        </NextLink>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}