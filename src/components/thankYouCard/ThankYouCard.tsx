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
    </>
  } />
}