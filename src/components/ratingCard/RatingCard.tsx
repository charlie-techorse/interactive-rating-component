import { useState } from 'react'
import { Card } from '../card/Card';
import './ratingCard.css'

export function RatingCard({ rating, handleSubmit, handleRating }: { rating: number, handleSubmit: Function, handleRating: Function }) {
  return <Card children={
    <>
      <div className='rating_card__img'><img src="/icon-star.svg" alt="" /></div>
      <h1 className='rating_card__title'>How did we do?</h1>
      <p className='rating_card__description'>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
      <div className='rating_card__ratings'>
        {[1, 2, 3, 4, 5].map((rate: number) => (
          <button
            type="button"
            onClick={() => handleRating(rate)}
            className={`rating_card__rating ${rating == rate ? "active" : ""}`}
            key={rate}>
            <p>{rate}</p>
          </button>
        ))}
      </div>
      <button onClick={() => handleSubmit(rating)} className='rating_card__button'>Submit</button>
    </>
  } />
}