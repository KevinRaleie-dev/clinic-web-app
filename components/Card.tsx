import React from 'react';
import { Box } from '@chakra-ui/react';

interface CardProps {
    children?: React.ReactNode,
    maxWidth?: string,
    borderWidth?: string,
    borderRadius?: string,
    overflow?: string,
    pd?: string | number
}

const Card = ({ children, maxWidth, borderWidth, borderRadius, overflow, pd}: CardProps) => {
    return (
        <Box
            maxW={maxWidth}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            overflow={overflow}
            padding={pd}
        >
            {children}    
        </Box>
    )
}

export default Card;
