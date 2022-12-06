import React from 'react'
import {getContrastYIQ} from '../helpers'

function Copied({ color }) {
  return (
    <div className='copied' style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
        Copied #{color} the clipboard.
    </div>
  )
}

export default Copied