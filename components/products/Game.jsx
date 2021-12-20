import React from 'react'
import { Heading, VStack, Text, Button, HStack, Box } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Image from "next/image";
import AxieInfinityG1 from "../../public/assets/images/guerilla1.png";
import Infinitylogo from "../../public/assets/images/balogo1.png";

const Game = () => {
    return (
        <VStack w="full" alignItems="flex-start">
            <Heading fontSize="2xl" mb={{base: '3', md: '7'}}>Game</Heading>
            <HStack boxShadow='lg' py="5" px="5" bgColor="white" borderRadius="lg" w={{ base: '100%', md: '50%' }} alignItems="flex-end">
                <VStack alignItems="flex-start" flex="2">
                    <Box w="100px">
                        <Image
                            boxSize="100"
                            src={Infinitylogo}
                            alt="Picture of the author"
                        />
                    </Box>
                    <Heading fontSize="xl">Battlepunk Arena</Heading>
                    <Text fontSize="lg" py="2">Battle to Earn in the ultimate metaverse trading card game!</Text>
                    <Button variant='ghost' color="blue">Visit <ArrowForwardIcon ml="3" /> </Button>
                </VStack>
                <VStack flex="1">
                    <Image src={AxieInfinityG1} alt="Picture of the author" />
                </VStack>
            </HStack>
        </VStack>
    )
}

export default Game
