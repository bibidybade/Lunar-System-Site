import React from 'react'
import { Heading, VStack, Text, Button, HStack, Box, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Image from "next/image";
import Rugger from "../../public/assets/images/rugger1.png";
import Marketplaceimg from "../../public/assets/images/amlogo1.png"
import bifrostlogo from "../../public/assets/images/bblogo1.png"
import bifrost from "../../public/assets/images/blizard1.png"



const Dapp = () => {
    return (
        <VStack w="full" alignItems="flex-start" pt="14">
            <Heading fontSize="2xl" mb={{base: '3', md: '7'}}>Dapp</Heading>
            <Flex flexFlow="row wrap" justifyContent="flex-start" w="full" margin="auto">
                <Flex boxShadow='lg' py="5" px="5" bgColor="white" borderRadius="lg" w={{ base: '100%', md: '49%' }} mb="5" alignItems="flex-end">
                    <VStack alignItems="flex-start" flex="2">
                        <Box w="120px">
                            <Image
                                boxSize="100"
                                src={Marketplaceimg}
                                alt="Picture of the author"
                            />
                        </Box>
                        <Heading fontSize="xl">Arena Market</Heading>
                        <Text fontSize="lg" py="2">A decentralized marketplace where you can bring your game items and spoils of battle to trade with players all across the globe.</Text>
                        <Button variant='ghost' color="blue">Learn More<ArrowForwardIcon ml="3" /> </Button>
                    </VStack>
                    <VStack flex="1">
                        <Image src={Rugger} alt="Picture of the author" />
                    </VStack>
                </Flex>
                <Flex boxShadow='lg' py="5" px="5" bgColor="white" borderRadius="lg" w={{ base: '100%', md: '49%' }} ml="auto" mb="5" alignItems="flex-end">
                    <VStack alignItems="flex-start" flex="2">
                        <Box w="150px">
                            <Image
                                boxSize="100"
                                src={bifrostlogo}
                                alt="Picture of the author"
                            />
                        </Box>
                        <Heading fontSize="xl">Bifröst Bridge</Heading>
                        <Text fontSize="lg" py="2">Bridge your digital assets for ingame use. NFTs and Legacy Tokens!</Text>
                        <Button variant='ghost' color="blue">Visit <ArrowForwardIcon ml="3" /> </Button>
                    </VStack>
                    <VStack flex="1">
                        <Image src={bifrost} alt="Picture of the author" />
                    </VStack>
                </Flex>
            </Flex>
        </VStack>
    )
}

export default Dapp
