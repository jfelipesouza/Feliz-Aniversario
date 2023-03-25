import {} from './styles'
export interface CardProps {
  id: string
  flipped?: boolean
  back: string
  handleClick?: (id: string) => void
}

export const GameCard: React.FC<CardProps> = ({
  flipped = false,
  back,
  handleClick,
  id
}) => {
  const cardContentClassNames = ['card__content']
  flipped && cardContentClassNames.push('card__content--flipped')

  const handleClickFn = (id: string) => {
    if (handleClick) {
      handleClick(id)
    }
  }

  return (
    <div className="card" onClick={() => handleClickFn(id)}>
      <div className={cardContentClassNames.join(' ')}>
        <div className="card__face card__face--front">?</div>
        <div className="card__face card__face--back">{back}</div>
      </div>
    </div>
  )
}
