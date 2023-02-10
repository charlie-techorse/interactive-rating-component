import { useState } from 'react'
import { RatingCard } from './components/ratingCard/RatingCard'
import { ThankYouCard } from './components/thankYouCard/ThankYouCard';

export function App() {
  const [cardSubmitted, setCardSubmitted] = useState(false)

  const handleSubmit = (rate: number) => {
    if (!rate) { return }

    setCardSubmitted(true)
  };

  return (
    cardSubmitted == true ? <ThankYouCard /> : <RatingCard handleSubmit={handleSubmit} />
  )
}