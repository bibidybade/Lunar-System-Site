import React from 'react'
import { Flex, Box, Text, VStack, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import products1 from "../../public/assets/images/balogo.png";
import products2 from "../../public/assets/images/amlogo.png";
import products3 from "../../public/assets/images/bblogo.png";

const Products = () => {
    const CardsArray = [
        {
            cardimg: products1,
            cardheading: 'Battlepunk Arena',
            carddecs: 'Build your deck of formidable but adorable Punkies in the Ultimate metaverse trading card game!'
        },
        {
            cardimg: products2,
            cardheading: 'Arena Market',
            carddecs: 'A decentralized marketplace where you can bring your game items and spoils of battle to trade with players all across the globe.'
        },
        {
            cardimg: products3,
            cardheading: 'Bifröst Bridge',
            carddecs: 'Bridge your digital assets for ingame use. NFTs and Legacy Tokens!'
        }
    ]
    return (
        <HStack flexFlow="row wrap" justifyContent="space-evenly" w="full" margin="auto" alignItems="center">
            {CardsArray.map((data, index) =>
                <Box h={{base: 'auto', md: '350px'}} px="3" borderRadius="lg" boxShadow='2xl' w={{base: '100%', md: '48%', lg: '28%'}} key={index} my="5" py="8" px="3" borderRadius="lg" textAlign="center" alignItems="center" justifyContent="center">
                    <HStack px="5" h="100px" pb="100px">
                        <Image src={data.cardimg} alt="Picture of the author" />
                    </HStack>
                    <Heading my="5" mt="10" fontSize="xl">{data.cardheading}</Heading>
                    <Text>{data.carddecs}</Text>
                </Box>
            )}
        </HStack>
    )
}

export default Products
