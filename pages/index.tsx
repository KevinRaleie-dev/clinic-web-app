import { NextPage } from "next";
import { Nav } from "../components/Nav";
import { SEO } from "../shared/SEO";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { theme } from "../theme/theme";

const Home: NextPage = () => {

    return (
        <>
            <SEO title="Wellness | Modern health, simplified." />
            <Nav />
            <main>
                <Box
                width='100%'
                height='90vh'
                position='relative'
                >
                    <Image
                    width='100%'
                    height='100%'
                    objectFit='cover'
                    src='/nurse.jpg'
                    />

                    <Grid
                    position='absolute'
                    top="8px"
                    left="16px"
                    mt="15%"
                    ml="5%"
                    templateColumns="repeat(1, 1fr)" gap={0}>
                        <Box w="100%" h="10">
                            <Text color='white' fontSize='5xl' fontWeight='bold'>
                                Modern Clinics.
                            </Text>
                            <Text color='white' fontSize='5xl' fontWeight='bold'>
                                Modern Health Care.
                            </Text>
                            <Text color='white' my={3} fontSize='xl'>
                                Book same day appointments, hassle free.
                            </Text>
                            <Text color='green.500' fontSize='lg'>
                                <a href="#learn-more">Learn more </a>
                            </Text>
                        </Box>
                    </Grid>
                </Box>
                <Box
                width='100%'
                height='90vh'
                bgColor={theme.backgroundColor}
                >
                
                </Box>
                <Box
                id="learn-more"
                >
                    heloo
                </Box>
            </main>
        </>
    )
}

export default Home;