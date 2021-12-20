import React from 'react'
import { Grid, GridItem } from '@chakra-ui/layout'
import Image from 'next/image'
import { Stack } from '@chakra-ui/layout'
const TeamGallery = () => {
    return (
        <Stack w={{ base: '90%', md: '90%', lg: '96%' }} mx='auto'>
            <Grid

                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={3} boxShadow='0 8px 30px rgb(222 230 241 / 80%)'  >
                    <Image src={GalleryImg1} borderRadius='full'  />
                    {/* <div style={{ borderRadius: '5px', overflow: 'hidden', width: '50px' }}>
                        <Image src={GalleryImg1} layout="fill" objectFit="cover" />
                    </div> */}
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} boxShadow='0 8px 30px rgb(222 230 241 / 80%)' >
                    <Image src={GalleryImg2} />
                </GridItem>
                <GridItem colSpan={1} boxShadow='0 8px 30px rgb(222 230 241 / 80%)'  >
                    <Image src={GalleryImg3} />
                </GridItem>
                <GridItem colSpan={1} boxShadow='0 8px 30px rgb(222 230 241 / 80%)' >
                    <Image src={GalleryImg4} />
                </GridItem>
                <GridItem colSpan={1} boxShadow='0 8px 30px rgb(222 230 241 / 80%)' >
                    <Image src={GalleryImg4} />
                </GridItem>
            </Grid>

        </Stack>
    )
}

export default TeamGallery
