/* eslint-disable @next/next/no-page-custom-font */
import { CssBaseline, ThemeProvider } from "@mui/material"
import Head from "next/head"
import BottomNav from "../components/BottomNav"
import Footer from "../components/Footer"
import darkTheme from "../shared/themes/dark"
import { WrapperComponent } from "./styles"
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Combo&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>
    <ThemeProvider theme={darkTheme}>
      <BottomNav />
      <WrapperComponent>
        <Component {...pageProps} />
      </WrapperComponent>
      <Footer />
    <CssBaseline />
    </ThemeProvider>
    </>
    ) 
}

export default MyApp
 