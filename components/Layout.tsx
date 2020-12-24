import { Box } from '@chakra-ui/react'
import React from 'react'

type LayoutProps = {
    children: React.ReactNode;
    mw: string; //max width
    mt: number; //margin top
    padding: number; //padding
}

export const Layout = ({children, mw, mt, padding}: LayoutProps) => {
    return (
        <Box
        mt={mt}
        maxWidth={mw}
        mx='auto'
        width='100%'
        p={padding}
        >
            {children}
        </Box>
    )
}
