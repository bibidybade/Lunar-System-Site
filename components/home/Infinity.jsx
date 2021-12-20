import React from 'react'
import { VStack, HStack, Box, Stack, Heading, Text } from '@chakra-ui/layout'
import Image from "next/image";
import Infinitymaincard from "../../public/assets/images/arenafight.png"
import Infinitymaincard2 from "../../public/assets/images/map.png"
import { Button } from '@chakra-ui/react'

const Infinity = () => {
    return (
        <VStack w="full">
            <VStack w={{ base: '100%', md: '70%', lg: '90%' }} pt="16" color="white" alignItems={{ base: 'center', md: 'flex-start' }} px={{ base: '10', md: '0' }}>
                <Stack direction={['column', 'row']} alignItems="center">
                    <HStack flex="1">
                        <Image src={Infinitymaincard} />
                    </HStack>
                    <VStack flex="1" pl={{ base: '0', md: '20' }} alignItems={{ base: 'center', md: 'flex-start' }} py="10" spacing="5" pb="20" data-aos="zoom-out-right">
                        <Heading fontSize={{ base: 'lg', md: '3xl' }}>The Arena</Heading>
                        <Text fontSize={{base: 'md', lg: 'xl'}}>Become the greatest Battler on Punkon in this strategy based trading card game.
                            Build and customize your deck to find the play style that best suits you.
                        </Text>
                        <Text pb="4" fontSize={{base: 'md', lg: 'xl'}}>Chop and choose from the 12 different elements on Punkon to craft the Ultimate Deck!</Text>
                        <Button bg="purple" _hover={{ bg: '#301934' }} borderRadius="full" px="16" size='lg'><a href="https://discord.gg/battlepunkarena">Join The Discord</a></Button>
                    </VStack>
                </Stack>
                <Stack direction={['column', 'row']} alignItems="center">
                    <VStack flex="1" pr={{ base: '0', md: '20' }} alignItems={{ base: 'center', md: 'flex-start' }} py="10" spacing="5">
                        <Heading fontSize={{ base: 'lg', md: '3xl' }}>Planet Punkon</Heading>
                        <Text fontSize={{base: 'md', lg: 'xl'}}>Own Your Very Own Plots of Land on the Planet Punkon. Farm for Battlebucks, Breed Your Punkies, and Uncover rare hidden treasures on your piece of the metaverse. </Text>
                        <Button bg="purple" _hover={{ bg: '#301934' }} borderRadius="full" px="16" size='lg'><a href="https://info-51.gitbook.io/battlepunk-arena/">Learn more</a></Button>
                    </VStack>
                    <HStack flex="1">
                        <Image src={Infinitymaincard2} />
                    </HStack>
                </Stack>
            </VStack>
        </VStack>
    )
}

export default Infinity
