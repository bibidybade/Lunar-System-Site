import React from 'react'

import { Heading, VStack } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
const LifeHere = () => {
    return (
        <VStack py={[12,12,20]} color='#1d273d'  w={{ base: '90%', md: '90%', lg: '70%' }} mx='auto'>
            <Heading as='h2' fontSize={{ base: '2xl', md: 'xl', lg: '4xl' }}>The Lunar System Company.
            </Heading>
            <Text>At The Lunar System Company We aim to put the tools of blockchain in the hands of those who will utilize it to its fullest.
            </Text>
            <Text>Working with a combined team of over 30 people from all across the world, including moderators, animators, designers, developers, marketing specialists and more - The Lunar System crew is extremely diverse.
                At the core of this crew are the founders of the Lunar System.
            </Text>

        </VStack>
    )
}

export default LifeHere
