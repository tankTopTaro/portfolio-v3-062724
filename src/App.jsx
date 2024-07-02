import "@fontsource/orbitron"
import { Box, Container, ThemeProvider, createTheme } from '@mui/material'
import ButtonAppBar from './components/ButtonAppBar'
import { Outlet } from 'react-router-dom'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './App.css'
import { MotionPathPlugin } from "gsap/all"
import { TextPlugin } from "gsap/all"

gsap.registerPlugin(useGSAP, MotionPathPlugin, TextPlugin)

const theme = createTheme({
  typography: {
    fontFamily: "Orbitron"
  }, 
  palette: {
    text: {
      primary: "#FCFCFC"
    } 
  }
})

function App() {
  const container = useRef()

  let b1 = "linear-gradient(127deg, rgba(163,150,152,1) 30%, rgba(161,57,56,1) 70%), linear-gradient(336deg, rgba(54,35,84,1) 30%, rgba(100,61,164,1) 70%), linear-gradient(217deg, rgba(62,70,171,1) 30%, rgba(41,48,111,1) 70%), linear-gradient(127deg, rgba(163,150,152,1) 30%, rgba(161,57,56,1) 70%), linear-gradient(336deg, rgba(54,35,84,1) 30%, rgba(100,61,164,1) 70%)"
  let b2 = "linear-gradient(17deg, rgba(54,35,84,1) 30%, rgba(100,61,164,1) 70%), linear-gradient(200deg, rgba(163,150,152,1) 30%, rgba(161,57,56,1) 70%), linear-gradient(336deg, rgba(62,70,171,1) 30%, rgba(41,48,111,1) 70%)"
 
  useGSAP(() => {
    gsap.fromTo('.bg', 
      { width: '100%', height: '100vh', background: b1}, 
      {ease: "none", duration: 10, background: b2, repeat: -1, repeatDelay: 1, yoyo: true})
  }, {scope: container})

  return (
    <ThemeProvider theme={theme} >
        <div ref={container}>
        <Container maxWidth={false} className="bg">
            <ButtonAppBar />
            <Box component='section'>
                <Outlet />
            </Box>
        </Container>
        </div>
    </ThemeProvider>
  )
}

export default App
