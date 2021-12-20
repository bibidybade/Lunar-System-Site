import React from 'react'
import { Stack, Box, Heading, Text, VStack } from '@chakra-ui/layout'
import Image from 'next/image'
import TeamMember1 from '../../public/assets/images/captain.png'
import TeamMember2 from '../../public/assets/images/luna.png'
import TeamMember3 from '../../public/assets/images/yue.png'
import TeamMember4 from '../../public/assets/images/mizuki.png'

import { Flex } from '@chakra-ui/layout'
import { Spacer } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'

const TeamSection = () => {
    return (
        <>
            <Stack w={{base:'90%', md:'90%',lg:'96%'}} mx='auto'>
                <VStack>
                    <Heading pb='2'  fontSize={{ base: '2xl', md: 'xl', lg: '4xl' }} as='h2' color='#1d273d'>The Founders
                    </Heading>
                </VStack>
                <Stack direction={['column', 'row']} spacing='24px' py={[2,6,10]} mx='auto' justifyContent='center'>
                    <Box textAlign='center'>
                        <Image src={TeamMember1} />
                        <Heading pt='3' as='h3' fontSize='xl' color='#1d273d'>Apollo (Captain-Moon) Babade
                        </Heading>
                        <Text>CTO</Text>
                    </Box>
                    <Box textAlign='center'>
                        <Image src={TeamMember2} />
                        <Heading pt='3' as='h3' fontSize='xl' color='#1d273d'>Alana (Luna) Gutsaeva
                        </Heading>
                        <Text>Brand Manager</Text>
                    </Box>
                    <Box textAlign='center'>
                        <Image src={TeamMember3} />
                        <Heading pt='3' as='h3' fontSize='xl' color='#1d273d'>Qichen (Yue) Hu
                        </Heading>
                        <Text>Administrative Assistant</Text>
                    </Box>
                    <Box textAlign='center'>
                        <Image src={TeamMember4} />
                        <Heading pt='3' as='h3' fontSize='xl' color='#1d273d'>George (Mizuki) Maragay
                        </Heading>
                        <Text>Head of Merchandising</Text>
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}

export default TeamSection
