import React, { useState } from 'react'
import {
  Container,
  InsideCard,
  InsideCardTitle,
  OutsideCard,
  OutsideCardContent,
  OutsideCardTitle
} from './styled'

type BirthdayCardProps = {}

const BirthdayCard: React.FC<BirthdayCardProps> = () => {
  const [flip, setFlip] = useState<Boolean>(false)
  const [flipText, setFlipText] = useState(false)

  const mouseEntry = () => {
    setFlip(true)
    setFlipText(true)
  }
  const mouseOut = () => {
    setFlip(false)
    setFlipText(false)
  }

  return (
    <Container onMouseOver={mouseEntry} onMouseOut={mouseOut}>
      <OutsideCard flip={flip}>
        <OutsideCardContent>
          <OutsideCardTitle flip={flipText}>
            Feliz aniversário!!
          </OutsideCardTitle>
          <img src="desenho.svg" alt="desenho" className="image" />
        </OutsideCardContent>
      </OutsideCard>
      <InsideCard flip={flip}>
        <InsideCardTitle>Feliz aniversário!!</InsideCardTitle>
        <p>Minha amada,</p>
        <p>
          Te desejo um excelente aniversário e que seu dia seja tão fantástico
          quanto você. Você é um brilhante raio de sol em minha vida, espero que
          aproveite muito seu dia especial,corra como o vento em seu evento e
          que hoje seja memorável para você.
        </p>
      </InsideCard>
    </Container>
  )
}

export default BirthdayCard
