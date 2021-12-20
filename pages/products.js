import { Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import Game from '../components/products/Game'
import Dapp from '../components/products/Dapp'
import Ecosystem from '../components/products/Ecosystem'

const products = () => {
    return (
        <VStack p={{base: '5', md: '10', lg: '20'}} bgColor="#f7fafc">
            <Heading fontSize={{base: 'lg', md: '2xl', lg: '3xl'}}>Lunar System Products</Heading>
            <Text fontSize={{base: 'lg', md: '2xl'}} pb={{base: '10', md: '0'}}></Text>
            <Game />
            <Dapp />
            <Ecosystem />
        </VStack>
    )
}

export default products
