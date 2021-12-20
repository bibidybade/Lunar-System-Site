import React from 'react'
import { Flex, Box, Text, VStack, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import builderscardimg1 from "../../public/assets/images/lunaspell1.png";
import builderscardimg2 from "../../public/assets/images/yuepic1.png";
import builderscardimg3 from "../../public/assets/images/captainfly3.png";

const NationBuildersCards = () => {
    const CardsArray = [
        {
            cardimg: builderscardimg1,
            cardheading: 'Prioritization of the people',
            carddecs: 'We build all of our products with the end user in mind and keep close communication with our community on how we can adapt and upgrade our ecosystem.'
        },
        {
            cardimg: builderscardimg2,
            cardheading: 'Products by the people',
            carddecs: 'The products of the lunar system are the result of countless iterations of trial and feedback from the people. We can truly say that our products are built by the people that will use them.'
        },
        {
            cardimg: builderscardimg3,
            cardheading: 'Power for the people',
            carddecs: 'We give our community real ownership over their digital assets and data.'
        },
    ]
    return (
        <Flex flexWrap="wrap" w="full" margin="auto" pt="6">
            {CardsArray.map((data, index) =>
                <Box w={{base: '100%', md: '48%', lg: '30%'}} margin="auto" key={index} my={{base: '1', md: '2', lg: '5'}} bgColor="white" py="8" px="3" borderRadius="lg" boxShadow='xl' textAlign="center">
                    <HStack px="5">
                        <Image src={data.cardimg} alt="Picture of the author" />
                    </HStack>
                    <Heading my="5" fontSize="xl">{data.cardheading}</Heading>
                    <Text>{data.carddecs}</Text>
                </Box>
            )}
        </Flex>
    )
}

export default NationBuildersCards
