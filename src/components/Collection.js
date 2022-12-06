import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Brand from './Brand'
import MainContext from '../MainContext'
import LazyLoad from 'react-lazyload'
import Download from './Download'
import { GrLinkPrevious } from 'react-icons/gr'
import Loader from './Loader'

function Collection(props) {

  const { slugs } = useParams()
  const {setSelectedBrands, selectedBrands, brands } = useContext(MainContext)
  const clearSelectedBrands = () => {
    setSelectedBrands([])
  }
  
  useEffect(() => {
    setSelectedBrands(slugs.split(','))
  }, [])
  
  return (
    <main className='content'>
        <header className='header'>
            <Link to="/" onClick={clearSelectedBrands}>
                <a className='back-btn'>
                    <GrLinkPrevious />
                    All Brands
                </a>
            </Link>
            {selectedBrands.length !== 0 && (
                <Download />
            )}
        </header>
        <section className='brands'>
            {selectedBrands.map((slug, i) => {
                let brand = brands.find(brand => brand.slug === slug)
                return (
                    <LazyLoad key={i} once={true} overflow={true} placeholder={<Loader />}>
                        <Brand brand={brand} />
                    </LazyLoad>
                )
            })}
        </section>
    </main>
  )
}

export default Collection