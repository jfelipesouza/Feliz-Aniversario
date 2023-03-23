import React from 'react'

import { Container } from '@/styles/pages/home'
import BirthdayCard from '@/components/BirthdayCard'

const Home: React.FC = () => {
  return (
    <Container>
      <BirthdayCard />
    </Container>
  )
}

export default Home
