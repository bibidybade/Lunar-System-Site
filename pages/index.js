import { Text, VStack, Box, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import heroimg from "../public/assets/images/mizukigame2.png";
import Infinitylogo from "../public/assets/images/battlepunklogo.png";
import Infinity from "../components/home/Infinity";
import NationBuildersCards from "../components/home/NationBuildersCards";
import Products from "../components/home/Products";
import mainhero from "../public/assets/images/herobg.png";
import builderbg from "../public/assets/images/calltoaction-bg.png";
import ifinitybg from "../public/assets/images/infinity.jpg";

export default function Home() {
  const stylingone = {
    backgroundImage: `url(${mainhero.src})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "inherit",
    marginTop: "28px",
    overflowX: "hidden",
  };

  const stylingbuilders = {
    backgroundImage: `url(${builderbg.src})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // paddingTop: '120px',
    // marginTop: "120px",
    paddingTop: "80px",
    paddingBottom: "80px",
    backgroundPosition: "inherit",
    // marginTop: "28px",
    // overflowX: "hidden",
  };

  const stylingifinity = {
    backgroundImage: `url(${ifinitybg.src})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "inherit",
    // position: "absolute",
    // marginTop: "28px",
    // overflowX: "hidden",
  };
  return (
    <>
      <div style={stylingone}>
        <Stack
          py={{ base: "10", md: "28" }}
          direction={["column-reverse", "row"]}
          alignItems="center"
        >
          <VStack
            w={{ base: "100%", md: "60%" }}
            px={{ base: "7", md: "14", lg: "16", xl: "20" }}
            alignItems={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}>
              Gamefi For The Blockchain Generation.
            </Heading>
            <Text>
              Pioneers of the Blockchain Generation, putting the tools of blockchain into the hands of those that will use it best by Building the community-owned
              ecosystems that will drive the day-to day interactions of the
              future.
            </Text>
            <Text>
              “Blockchain is not the future, it is the present.” – C.Z.
              Binance
            </Text>
          </VStack>
          <VStack w={{ base: "90%", md: "30%" }} pb={{ base: "10", md: "0" }}>
            <Image src={heroimg} alt="Mizuki Playing a Game." />
          </VStack>
        </Stack>
      </div>
      <div style={stylingbuilders}>
        <VStack py="20" px={{ base: "7", md: "20", lg: "36" }}>
          <VStack w={{ base: "95%", md: "70%" }} textAlign="center">
            <Heading fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}>
              Of the People, By the People, For the People.
            </Heading>
          </VStack>
          <NationBuildersCards />
        </VStack>
      </div>
      <VStack py="20" px={{ base: "7", md: "10", lg: "10" }}>
        <Heading fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}>
          Products
        </Heading>
        <Products />
      </VStack>
      <div>
        <div style={stylingifinity}>
          <VStack py="20" px={{ base: "0", md: "10", lg: "10" }}>
            <VStack
              w={{ base: "100%", md: "100%", lg: "70%" }}
              color="white"
              textAlign="center"
            >
              <Box w="300px" mb="5">
                <Image
                  boxSize="100"
                  src={Infinitylogo}
                  alt="Picture of the author"
                />
              </Box>
              <Text>
                Battlepunk Arena is the Ultimate Metaverse trading card game.
              </Text>
              <Text lineHeight={{ base: "10", md: "1" }}>
                Build your army of adorable punkies and dominate your opponents
                in the arena,
              </Text>
              <Text>
                Or cultivate your land as a landlord on the planet Punkon.
              </Text>
            </VStack>
            <Infinity />
          </VStack>
        </div>
      </div>
      {/* <VStack py="20" px={{ base: "7", md: "10", lg: "10" }}>
        <Heading fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}>
          Partners
        </Heading>
        <Partners />
      </VStack> */}
    </>
  );
}
