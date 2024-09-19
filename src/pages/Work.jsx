import { Box, Container, ImageList, ImageListItem, Link, Typography } from "@mui/material"
import Showcase from "../components/Showcase"
import pokedex from "../assets/pokedex.png"
import sunnyside from "../assets/sunnyside.png"
import bento from "../assets/bento.png"
import goshop from "../assets/goshop.png"

/* eslint-disable no-unused-vars */
const workList = [
  {id: 0, title: 'Pokedex', path: pokedex, link:'https://pokedexv5.d2pp0or97l5961.amplifyapp.com', repo: 'https://github.com/tankTopTaro/Pokedex', featured: true},
  {id: 1, title: 'Agency Landing Page', path: sunnyside, link:'https://agency-landing-page-fementor.netlify.app/', repo: 'https://github.com/tankTopTaro/Agency-landing-page'},
  {id: 2, title: 'Bento Grid', path: bento, link:'https://bento-grid-fementor.netlify.app/', repo: 'https://github.com/tankTopTaro/Bento-Grid'},
  {id: 3, title: 'Go Shop', path: goshop, link: 'https://main.d2bczkn7m106ta.amplifyapp.com/', repo: 'https://github.com/tankTopTaro/Mini-Project-2-Shop-App', featured: true },
]

function Work() {
  return (
    <Container maxWidth={false}>
        <Showcase workList={workList} />
        <Typography variant="h4" color='textPrimary' sx={{ marginTop: '4rem', textAlign: 'center'}}>
          More Projects to come. For now visit my <Link href='https://github.com/tankTopTaro?tab=repositories' underline='none' color='#FCE00C' target='_blank'>Github Page</Link> to see what other things i created.
        </Typography>
    </Container>
  )
}

export default Work