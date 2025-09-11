import React from 'react'
import Clannad from './Clannad'
import Hornimiya from './Hornimiya'
import Toradora from './Toradora'

function Romanceanime() {
  return (
    <div className='anime'>
        <Clannad/>
        <Toradora/>
        <Hornimiya/>
    </div>
  )
}

export default Romanceanime