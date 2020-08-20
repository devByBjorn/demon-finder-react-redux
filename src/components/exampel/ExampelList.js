import React from 'react'
import exampelDemons from './exampelDemons'
import DemonRow from '../demon/DemonRow'

const ExampelList = () => {
  const demons = exampelDemons
  return (
    <div >
      {demons.map(demon => (
        <DemonRow key={demon.title} demon={demon} />
      ))}
    </div>
  )
}

export default ExampelList