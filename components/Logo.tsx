import React from 'react'
import { Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props {
    textColor: string;
    textSize: string;
    mr?: number;
    link: string;
}

const Logo:React.FC<Props> = ({link, textColor, textSize, mr}) => {
    return (        
        <NextLink href={link}>
            <Heading _hover={{cursor: 'pointer'}} color={textColor} size={textSize} mr={mr}>
                Wellness<span style={{color: 'black'}}>Health</span>
            </Heading>
        </NextLink>
    );
}

export default Logo
