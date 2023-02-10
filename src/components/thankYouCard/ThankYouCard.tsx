import { useState } from 'react'
import { Card } from '../card/Card';
import './thankYouCard.css'

export function ThankYouCard({ rated }: { rated: number }) {
  return <Card children={
    <>
      <div className='thank_you_card__img'><img src="/illustration-thank-you.svg" alt="" /></div>
      <div className='thank_you_card__rated'>
        <p>You selected {rated} out of 5</p>
      </div>
      <h1 className='thank_you_card__thanks'>Thank you!</h1>
      <p className='thank_you_card__description'>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p>
    </>
  } />
}