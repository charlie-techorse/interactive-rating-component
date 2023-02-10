import './card.css'

export function Card() {
  return <div className='card'>
    <div className='card__img'><img src="/icon-star.svg" alt="" /></div>
    <h1 className='card__title'>How did we do?</h1>
    <p className='card__description'>
      Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
    </p>
    <div className='card__ratings'>
      {[1, 2, 3, 4, 5].map((rate: number) => (
        <div className='card__rating' key={rate}>
          <p>{rate}</p>
        </div>
      ))}
    </div>
    <button className='card__button'>Submit</button>
  </div>
}