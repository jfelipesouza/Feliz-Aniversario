import React, { useState } from 'react'
import {
  BackOutsideCard,
  Container,
  FrontOutsideCard,
  InsideCard,
  OutsideCard
} from './styled'

type BirthdayCardProps = {}

const BirthdayCard: React.FC<BirthdayCardProps> = () => {
  const [flip, setFlip] = useState<Boolean>(false)

  return (
    <Container
      onMouseOver={() => setFlip(true)}
      onMouseOut={() => setFlip(false)}
    >
      <OutsideCard flip={flip}>
        <FrontOutsideCard>Feliz aniversario</FrontOutsideCard>
        <BackOutsideCard>Feliz aniversario</BackOutsideCard>
      </OutsideCard>
      <InsideCard>
        <p>Wishing you a very happy birthday filled with love and laughter</p>
      </InsideCard>
      Final
    </Container>
  )
}

export default BirthdayCard
