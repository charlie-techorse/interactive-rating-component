import './card.css'

export function Card() {
  return <div className='card'>
    <div className='card__img'><img src="/icon-star.svg" alt="" /></div>
    <h1 className='card__title'>How did we do?</h1>
    <p className='card__description'>
      Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
    </p>
    <div className='card__rating'>
      <p className='card__rating'>1</p>
      <p className='card__rating'>2</p>
      <p className='card__rating'>3</p>
      <p className='card__rating'>4</p>
      <p className='card__rating'>5</p>
    </div>
    <button className='card__button'>Submit</button>
  </div>
}