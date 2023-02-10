import { ReactNode } from 'react'
import './card.css'

export function Card({ children }: { children: ReactNode }) {
  return <div className='card'>
    {children}
  </div>
}