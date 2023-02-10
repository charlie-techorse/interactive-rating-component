import { useState } from 'react'
import { Card } from './components/Card'

export function App() {
  const [cardSubmitted, setCardSubmitted] = useState(false)

  const handleSubmit = (rate: number) => {
    if (!rate) { return }

    setCardSubmitted(true)
  };

  return (
    cardSubmitted == true ? <></> : <Card handleSubmit={handleSubmit} />
  )
}