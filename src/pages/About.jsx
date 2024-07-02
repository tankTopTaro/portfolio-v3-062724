import { Box, Container, Typography } from "@mui/material"
import UnderConstruction from "../components/UnderConstruction"
import profile from '../images/profile.png'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

function About() {
  const container = useRef()
  const tl = gsap.timeline({repeat:-1, repeatDelay: 1, yoyo: true})
  gsap.defaults({ease: 'none'})

  useGSAP(() => {
    tl.to('.name', {delay: 2, duration: 2, text: 'Kevin Balmores'})
    tl.to('.job', {delay: 1, duration: 2, text: 'Full Stack Web Developer | Programmer'})
  }, {scope: container})
  return (
    <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'row'}}>
      <Box ref={container} sx={{ width: '50vw',  alignContent: 'center'}}>
        <Typography variant='h1' color='textPrimary' className="name">
          01001011011001
        </Typography>
        <Typography variant="h4" color='textPrimary' className="job">
          0100011001110101011011000110110000100
        </Typography>
        <br/>
        <Typography color='textPrimary'>A computer enthusiast and skilled coder who is highly motivated to solve challenging problems.</Typography>
        <Typography color='textPrimary'>I have a solid grasp of programming fundamentals. I am dedicated to meeting deadlines & delivering results, 
          and I am eager to apply my expertise to innovative projects and contribute to their advancement.</Typography>
        <br/>
        <Typography variant="h5" color='textPrimary'>Skills</Typography>
        <Typography color='textPrimary'>&emsp;Strong analytical and problem-solving abilities.</Typography>
        <Typography color='textPrimary'>&emsp;Extensive experience in software development and debugging.</Typography>
        <Typography color='textPrimary'>&emsp;Ability to quickly adapt to new technologies and programming frameworks.</Typography>
        <br/>
        <Typography variant="h5" color='textPrimary'>Experience</Typography>
        <Typography color='textPrimary' variant="h6"> &emsp;Kodego Full Stack Web Development Bootcamp</Typography>
        <Typography color='textPrimary'>&emsp;&emsp;January 2023 - June 2023</Typography>
        <Typography color='textPrimary'>&emsp;&emsp;Collaborated with other learners to create websites.</Typography>
        <Typography color='textPrimary'>&emsp;&emsp;Also helped fellow learners debug some issues.</Typography>
      </Box>
      
      <Box sx={{ width: '50vw'}}>
        <Box component='img' src={profile} alt='chichi' sx={{ height: '95vh', objectFit: 'cover', display: { xs: 'none', xl: 'block'}}}/>
      </Box>
    </Container>
  )
}

export default About