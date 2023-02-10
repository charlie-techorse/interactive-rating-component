import { useState } from 'react'
import './card.css'

export function Card() {
  const [rating, setRating] = useState<number>(0)
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = () => {
    if (!rating) { return }
    console.log('d')
  };

  return <div className='card'>
    <div className='card__img'><img src="/icon-star.svg" alt="" /></div>
    <h1 className='card__title'>How did we do?</h1>
    <p className='card__description'>
      Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
    </p>
    <div className='card__ratings'>
      {[1, 2, 3, 4, 5].map((rate: number) => (
        <button
          type="button"
          onClick={() => handleRating(rate)}
          className={`card__rating ${rating == rate ? "active" : ""}`}
          key={rate}>
          <p>{rate}</p>
        </button>
      ))}
    </div>
    <button onClick={() => handleSubmit()} className='card__button'>Submit</button>
  </div>
}