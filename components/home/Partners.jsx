import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Image from "next/image";
import partners1 from "../../public/assets/images/partners1.jpg";

const Partners = () => {
    return (
        <SimpleGrid columns={[2, 2, 3, 4]} spacing='40px'>
            <Box>
                <Image src={partners1} alt="Picture of the author" />
            </Box>
            <Box>
                <Image src={partners1} alt="Picture of the author" />
            </Box>
            <Box>
                <Image src={partners1} alt="Picture of the author" />
            </Box>
            <Box>
                <Image src={partners1} alt="Picture of the author" />
            </Box>
            <Box>
                <Image src={partners1} alt="Picture of the author" />
            </Box>
            <Box>
                <Image src={partners1} alt="Picture of the author" />
            </Box>
            <Box>
                <Image src={partners1} alt="Picture of the author" />
            </Box>
            <Box>
                <Image src={partners1} alt="Picture of the author" />
            </Box>
        </SimpleGrid>
    )
}

export default Partners
