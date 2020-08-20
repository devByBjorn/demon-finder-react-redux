import React from 'react'
import { useSelector } from 'react-redux'
import DemonRow from './DemonRow'

const DemonList = () => {
  const demons = useSelector(state => state.demons)

  return (
    <div >
      {demons.map(demon => (
        <DemonRow key={demon.title} demon={demon} />
      ))}
    </div>
  )
}

export default DemonList