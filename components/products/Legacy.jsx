import React from 'react'
import { Heading, VStack, Text, Button, HStack, Box, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Image from "next/image";
import Stakinglogo from "../../public/assets/images/Staking.png"
import Stakingimg from "../../public/assets/images/Stakingimg.png"
import Bridgen from "../../public/assets/images/builderscardimg4.jpg"
import RoninWalletimg from "../../public/assets/images/4.jpg"
import RoninWallet from "../../public/assets/images/RoninWallet.png"
import Bridge from "../../public/assets/images/Bridge.png"
import RoninExplorer from "../../public/assets/images/RoninExplorer.png"
import RoninExplorerimg from "../../public/assets/images/RoninExplorerimg.png"
import Purchase from "../../public/assets/images/Purchase.png"
import Purchaseimg from "../../public/assets/images/Purchaseimg.png"


const Ecosystem = () => {
    return (
        <VStack w="full" alignItems="flex-start" pt="14">
            <Heading fontSize="2xl" mb={{base: '3', md: '7'}}>Ronin Ecosystem</Heading>
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
                        <Heading fontSize="xl">Ronin Wallet</Heading>
                        <Text fontSize="lg" py="2">A place to stash your digital items & currencies. Built for your grandma too.</Text>
                        <Button variant='ghost' color="blue">Visit <ArrowForwardIcon ml="3" /> </Button>
                    </VStack>
                    <VStack flex="1">
                        <Image src={RoninWalletimg} alt="Picture of the author" />
                    </VStack>
                </Flex>
                <Flex boxShadow='lg' py="5" px="5" bgColor="white" borderRadius="lg" w={{ base: '100%', md: '49%' }} ml="auto" mb="5" alignItems="flex-end">
                    <VStack alignItems="flex-start" flex="2">
                        <Box w="60px">
                            <Image
                                src={Bridge}
                                alt="Picture of the author"
                            />
                        </Box>
                        <Heading fontSize="xl">Bridge</Heading>
                        <Text fontSize="lg" py="2">Transfer your assets between Ronin and Ethereum network.</Text>
                        <Button variant='ghost' color="blue">Visit <ArrowForwardIcon ml="3" /> </Button>
                    </VStack>
                    <VStack flex="1">
                        <Image src={Bridgen} alt="Picture of the author" />
                    </VStack>
                </Flex>
                <Flex boxShadow='lg' py="5" px="5" bgColor="white" borderRadius="lg" w={{ base: '100%', md: '49%' }} mb="5" alignItems="flex-end">
                    <VStack alignItems="flex-start" flex="2">
                        <Box w="60px">
                            <Image
                                boxSize="100"
                                src={RoninExplorer}
                                alt="Picture of the author"
                            />
                        </Box>
                        <Heading fontSize="xl">The Ronin Explorer</Heading>
                        <Text fontSize="lg" py="2">Track transaction activity on Ronin Network.</Text>
                        <Button variant='ghost' color="blue">Visit <ArrowForwardIcon ml="3" /> </Button>
                    </VStack>
                    <VStack flex="1">
                        <Image src={RoninExplorerimg} alt="Picture of the author" />
                    </VStack>
                </Flex>
                <Flex boxShadow='lg' py="5" px="5" bgColor="white" borderRadius="lg" w={{ base: '100%', md: '49%' }} ml="auto" mb="5" alignItems="flex-end">
                    <VStack alignItems="flex-start" flex="2">
                        <Box w="60px">
                            <Image
                                boxSize="100"
                                src={Purchase}
                                alt="Picture of the author"
                            />
                        </Box>
                        <Heading fontSize="xl">Purchase</Heading>
                        <Text fontSize="lg" py="2">Purchase crypto on Ronin with fiat.</Text>
                        <Button variant='ghost' color="blue">Visit <ArrowForwardIcon ml="3" /> </Button>
                    </VStack>
                    <VStack flex="1">
                        <Image src={Purchaseimg} alt="Picture of the author" />
                    </VStack>
                </Flex>
                <Flex boxShadow='lg' py="5" px="5" bgColor="white" borderRadius="lg" w={{ base: '100%', md: '49%' }} mb="5" alignItems="flex-end">
                    <VStack alignItems="flex-start" flex="2">
                        <Box w="60px">
                            <Image
                                boxSize="100"
                                src={Stakinglogo}
                                alt="Picture of the author"
                            />
                        </Box>
                        <Heading fontSize="xl">Staking</Heading>
                        <Text fontSize="lg" py="2">Lock up AXS tokens and earn rewards.</Text>
                        <Button variant='ghost' color="blue">Visit <ArrowForwardIcon ml="3" /> </Button>
                    </VStack>
                    <VStack flex="1">
                        <Image src={Stakingimg} alt="Picture of the author" />
                    </VStack>
                </Flex>
            </Flex>
        </VStack>
    )
}

export default Ecosystem
