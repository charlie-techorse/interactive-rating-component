import { useState } from 'react'
import { RatingCard } from './components/ratingCard/RatingCard'
import { ThankYouCard } from './components/thankYouCard/ThankYouCard';

export function App() {
  const [cardSubmitted, setCardSubmitted] = useState(false)
  const [rating, setRating] = useState<number>(0)

  const handleSubmit = (rate: number) => {
    if (!rate) { return }

    setCardSubmitted(true)
  };

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    cardSubmitted == true ?
      <ThankYouCard rated={rating} /> :
      <RatingCard
        handleSubmit={handleSubmit}
        handleRating={handleRating}
        rating={rating} />
  )
}