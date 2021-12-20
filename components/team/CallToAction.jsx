import React from 'react'
import { Stack, Box, Heading, Text, VStack } from '@chakra-ui/layout'
import CalltoActionbg from '../../public/assets/images/calltoaction-bg.svg'
import { Container } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'


const CallToAction = () => {
    return (
        <>
            <Container maxW='full' bgImage={CalltoActionbg}
                backgroundSize='100%'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                py={[8, 8, 10]}>
                <Stack borderRadius='22' textAlign={{base:'center', md:'left'}} mx='auto' w={{ base: '96%', md: '96%', lg: '86%' }} p={[4, 8, 20]} direction={['column', 'row']} spacing='24px' justifyContent='space-between' boxShadow='0 8px 30px rgb(222 230 241 / 80%)'>
                    <Box>
                        <Heading as='h5' fontSize={{ base: '2xl', md: 'xl', lg: '4xl' }} color='#1d273d'>Want to join the Lunar System Crew?</Heading>
                    </Box>
                    <Box >
                        <Button fontSize={{base:'sm',md:'lg'}} px='9' size='lg'  borderRadius='40' bg='#4c98ff' color='white'>See Career Opportunities</Button>
                    </Box>

                </Stack>
            </Container>
        </>
    )
}

export default CallToAction
