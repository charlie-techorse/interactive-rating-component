import './card.css'

export function Card() {
  return <div className='card'>
    <div className='card__img'><img src="/icon-star.svg" alt="" /></div>
    <div className='card__content'>
      <div className='card__content-wrapper'>
        <h1 className='card__content-title'>How did we do?</h1>
        <p className='card__content-description'>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <div className='card__content-rating'>
          <p className='card__content-rating'>1</p>
          <p className='card__content-rating'>2</p>
          <p className='card__content-rating'>3</p>
          <p className='card__content-rating'>4</p>
          <p className='card__content-rating'>5</p>
        </div>
        <button className='card__content-button'>Submit</button>
      </div>
    </div>
  </div>
}