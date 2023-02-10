import { useState } from 'react'
import { RatingCard } from './components/ratingCard/RatingCard'

export function App() {
  const [cardSubmitted, setCardSubmitted] = useState(false)

  const handleSubmit = (rate: number) => {
    if (!rate) { return }

    setCardSubmitted(true)
  };

  return (
    cardSubmitted == true ? <></> : <RatingCard handleSubmit={handleSubmit} />
  )
}