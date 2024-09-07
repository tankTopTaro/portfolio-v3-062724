import { Box, Container, ImageList, ImageListItem, Typography } from "@mui/material"
import Showcase from "../components/Showcase"
import template from "../assets/template.png"
import tictactoe from "../assets/tictactoe.png"
import weather from "../assets/weather.png"
import pokedex from "../assets/pokedex.png"
import goshop from "../assets/goshop.png"
import gallery from "../assets/gallery.png"

/* eslint-disable no-unused-vars */
const workList = [
  {id: 0, title: 'Go Shop', path: goshop, link: 'https://main.d2bczkn7m106ta.amplifyapp.com/', repo: 'https://github.com/tankTopTaro/Mini-Project-2-Shop-App' },
  {id: 1, title: 'MUI Homepage Template', path: template, link: 'https://homepage-template-030724.netlify.app/', repo: 'https://github.com/tankTopTaro/homepage-template-030724'},
  {id: 2, title: 'Pokedex', path: pokedex, link:'https://pokedexv5.d2pp0or97l5961.amplifyapp.com', featured: true, repo: 'https://github.com/tankTopTaro/Pokedex'},
  {id: 3, title: 'Gallery', path: gallery, link: 'https://main.dg5ukfoehm2he.amplifyapp.com/', featured: true, repo: 'https://github.com/tankTopTaro/dailyUI-003'},
  {id: 4, title: 'React Tic Tac Toe', path: tictactoe, link: 'https://tictactoe-030424.netlify.app/', repo: 'https://github.com/tankTopTaro/react-tictactoe-030424'},
  {id: 5, title: 'Weather App', path: weather, link: 'https://weather-app-pwa-022724.netlify.app/', repo: 'https://github.com/tankTopTaro/weather-app-pwa-022724'},
]

function Work() {
  return (
    <Container maxWidth={false}>
        <Showcase workList={workList} />
    </Container>
  )
}

export default Work