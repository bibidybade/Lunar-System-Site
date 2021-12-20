import React from 'react'
import { Box, HStack, SimpleGrid, Text, Heading } from '@chakra-ui/react'
import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png'



const Footer = () => {
    return (
        <HStack bgColor="#3e2b56" p={{ base: '5', md: '10', lg: '20' }} w="full">
            <SimpleGrid columns={[1, 1, 4, 4]} spacing='40px' w="full" color="white">
                <Box>
                    <a href='/'>
                        <Box w='50px' mb="3">
                            <Image src={logo} alt='logo' />
                        </Box>
                    </a>
                    <Heading fontSize="xl">
                        © 2021 Lunar System Co
                    </Heading>
                </Box>
                <Box>
                    <Heading fontSize="xl" pl="3" mb="3">
                        Products
                    </Heading>
                    <UnorderedList spacing="1">
                        <ListItem listStyleType="none" cursor="pointer"><a href="https://battlepunkarena.com/">Battlepunk Arena</a></ListItem>
                        <ListItem listStyleType="none">Arena Market(coming soon)</ListItem>
                        <ListItem listStyleType="none">Bifröst Bridge(coming soon)</ListItem>
                        <ListItem listStyleType="none"><a href="https://open.spotify.com/show/0ZiT36PjRbmxwXhG584gHS?si=rSZVpZZvSCCxNA1AvUF8lw">The Moon is Yours Podcast</a></ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <Heading fontSize="xl" pl="3" mb="3">
                        The Lunar System Co.
                    </Heading>
                    <UnorderedList spacing="1">
                        <ListItem listStyleType="none"><a href="/team">Team</a></ListItem>
                        <ListItem listStyleType="none"><a href="https://medium.com/@lunarsystem">Blog</a></ListItem>
                        <ListItem listStyleType="none"><a href="mailto:careers@lunarsystem.co">Careers</a></ListItem>
                        <ListItem listStyleType="none"><a href="mailto:info@lunarsystem.co">Contact us</a></ListItem>
                        <ListItem listStyleType="none"><a href="/tou">Terms of use</a></ListItem>
                    </UnorderedList>
                </Box>
                <HStack spacing="5" alignItems="flex-start">
                <a href="https://discord.gg/battlepunkarena"><FontAwesomeIcon size={{ base: 'lg', md: '2x' }} icon={faDiscord} /></a>
                <a href="https://twitter.com/BattlepunkNFT"><FontAwesomeIcon size={{ base: 'lg', md: '2x' }} icon={faTwitter} /></a>
                <a href="https://www.instagram.com/lunarsystem.co/"><FontAwesomeIcon size={{ base: 'lg', md: '2x' }} icon={faInstagram} /></a>
                <a href="https://www.youtube.com/channel/UCYs-Wozu2rUT2GmVuByydyw"><FontAwesomeIcon size={{ base: 'lg', md: '2x' }} icon={faYoutube} /></a>
                </HStack>
            </SimpleGrid>
        </HStack>
    )
}

export default Footer
