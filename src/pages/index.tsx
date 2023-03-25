import React from 'react'

import {
  Button,
  Container,
  Description,
  SideContainer,
  Title
} from '@/styles/pages/home'
import BirthdayCard from '@/components/BirthdayCard'

const Home: React.FC = () => {
  return (
    <Container>
      <SideContainer>
        <Title>Parabéns para você!!!</Title>
        <Description>
          Em comemoração ao seu grande dia desenvolvi um pequeno jogo para que
          se divirta um pouco.
        </Description>
        <Button href="/game">Jogue agora</Button>
      </SideContainer>
      <SideContainer>
        <BirthdayCard />
      </SideContainer>
    </Container>
  )
}

export default Home
