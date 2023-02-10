import { useState } from 'react'
import { Card } from '../card/Card';
import './thankYouCard.css'

export function ThankYouCard() {
  return <Card children={
    <>
      <div className='thank_you_card__img'><img src="/illustration-thank-you.svg" alt="" /></div>
    </>
  } />
}