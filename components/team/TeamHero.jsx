import React from 'react'
import { Heading, Text, VStack } from '@chakra-ui/layout'
import { StackDivider } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { Button, ButtonGroup } from '@chakra-ui/react'

const TeamHero = () => {
    return (

        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
        >
            <Box py={{ base: '12', md: '12', lg: '20' }} w={{ base: '90%', md: '90%', lg: '70%' }} mx='auto' color='#1d273d'>
                <Heading textAlign='center' as='h1' fontSize={{ base: '2xl', md: 'xl', lg: '4xl' }}>The future of work is fun!
                </Heading>
                <Text pt='3'>We believe that fun, beautiful games will become a source of income for anyone, anywhere.
                </Text>
                <Text  py='5'>This future is already here; it’s just not evenly distributed yet. We need more adventurers, builders, thinkers, and missionaries to bring it to the entire planet.</Text>
                <Heading textAlign='center' as='h2' fontSize='2xl'>Prologue</Heading>
                <Text py='5'>We built Axie Infinity and grew it to be the #1 Blockchain game. It’s now time to make it one of the biggest virtual worlds of all time, period.
                </Text>
                <Text pb='10'>More and more game developers are becoming interested in using Blockchain technology to empower their players. This is a massive opportunity that we’re best positioned to capture with our Ronin side chain — a tool that allows game developers to deliver the benefits of blockchain to their players without any of the complications.
                </Text>
                <Box textAlign='center'>
                    <Button px='9' size='lg' fontSize={{base:'sm',md:'lg'}}  borderRadius='40' bg='#4c98ff' color='white'>Open Positions</Button>
                </Box>
            </Box>

        </VStack>

        

    )
}

export default TeamHero