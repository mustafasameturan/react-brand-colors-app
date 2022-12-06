import React from 'react'
import { useContext } from 'react'
import { getContrastYIQ } from '../helpers'
import MainContext from '../MainContext'
import ClipboardButton from 'react-clipboard.js'
import { TiTick } from 'react-icons/ti'

function Brand({brand}) {

  const {selectedBrands, setSelectedBrands, setCopied} = useContext(MainContext)
  const toggleSelected = () => {
    if(selectedBrands.includes(brand.slug)){
      setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
    }
    else{
      setSelectedBrands([...selectedBrands, brand.slug])
    }
  }

  const setColor = (color) => {
    setCopied(color)
  }

  return (
    <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
        {selectedBrands.includes(brand.slug) && (
          <span>
            <TiTick />
          </span>
        )}
        <h5 onClick={toggleSelected}>{brand.title}</h5>
        <div className='brand-colors'>
            {brand.colors.map((color, i) => (
                <ClipboardButton key={i} data-clipboard-text={color} onSuccess={() => setColor(color)} component="span" style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}> 
                   #{color}
                </ClipboardButton>
            ))}
        </div>
    </div>
  )
}

export default Brand