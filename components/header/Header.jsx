import { HStack, Box, Spacer } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png'
import Link from 'next/link'

const Header = () => {
    return (
        <HStack borderBottom="1px" borderColor="gray" bgColor="white" px={{ base: '5', md: '20', lg: '72' }} py="2" alignItems="center" justifyContent="space-between">
            <Box w='50px' h="50px">
                <Link href="/">
                    <Image src={logo} alt='logo' />
                </Link>
            </Box>
            <HStack fontWeight="bold" spacing="8" className="headerlink">
                <Link href="/products">
                    <a style={{ fontSize: '20px' }}>Products</a>
                </Link>
                <Link href="/team" >
                    <a style={{ fontSize: '20px' }}>Team</a>
                </Link>
            </HStack>
        </HStack>
    )
}

export default Header
