import { Container } from "@mui/material"
import UnderConstruction from "../components/UnderConstruction"

/* eslint-disable no-unused-vars */
const workList = [
  {id: 0, title: 'MUI Homepage Template', link: 'https://homepage-template-030724.netlify.app/'},
  {id: 1, title: 'React Tic Tac Toe', link: 'https://tictactoe-030424.netlify.app/'},
  {id: 2, title: 'Weather App', link: 'https://weather-app-pwa-022724.netlify.app/'},
]

function Work() {

  return (
    <Container maxWidth={false}>
      
        <UnderConstruction />
      
    </Container>
  )
}

export default Work