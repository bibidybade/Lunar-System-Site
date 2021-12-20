import { ChakraProvider, theme } from '@chakra-ui/react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import '../styles/globals.css'
// import theme from '../styles/theme/Theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
export default MyApp
