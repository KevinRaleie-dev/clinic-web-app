import { Text } from '@chakra-ui/react'
import React from 'react'

interface IFormErrorProps {
    children: React.ReactNode;
}

const FormError = ({children}: IFormErrorProps) => {
    return (
        <Text fontSize="xs" color="gray.500">
            {children}
        </Text>
    )
}

export default FormError
