import React from 'react'
import { Heading, VStack, Text, Button, HStack, Box, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Image from "next/image";
import RoninWalletimg from "../../public/assets/images/miy.png"
import RoninWallet from "../../public/assets/images/moonpurp.png"


const Ecosystem = () => {
    return (
        <VStack w="full" alignItems="flex-start" pt="14">
            <Heading fontSize="2xl" mb={{base: '3', md: '7'}}>Media</Heading>
            <Flex flexFlow="row wrap" justifyContent="flex-start" w="full" margin="auto">
                <Flex boxShadow='lg' py="5" px="5" bgColor="white" borderRadius="lg" w={{ base: '100%', md: '49%' }} mb="5" alignItems="flex-end">
                    <VStack alignItems="flex-start" flex="2">
                        <Box w="60px">
                            <Image
                                boxSize="100"
                                src={RoninWallet}
                                alt="Picture of the author"
                            />
                        </Box>
                        <Heading fontSize="xl">The Moon is Yours Podcast</Heading>
                        <Text fontSize="lg" py="2">Non-Fungible talks about blockchain, Gaming and more!
                        The Moon Is Yours Podcast is the Official podcast brought to you by The Lunar System Company.</Text>
                        <Button variant='ghost' color="blue">Visit <ArrowForwardIcon ml="3" /> </Button>
                    </VStack>
                    <VStack flex="1">
                        <Image src={RoninWalletimg} alt="Picture of the author" />
                    </VStack>
                </Flex>
            </Flex>
        </VStack>
    )
}

export default Ecosystem
