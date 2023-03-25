import { Grid } from '@/components/Grid'
import { cards } from '@/data'
import React from 'react'

const Game: React.FC = () => {
  return (
    <div className="app">
      <Grid cards={cards} />
    </div>
  )
}

export default Game
