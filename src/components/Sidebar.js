import React, { useState } from 'react'
import Modal from 'react-modal'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Sidebar() {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  const toggleModal = () =>{
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <>
        <aside className='sidebar'>
          <div className='logo'>
            <Link to='/'>Brand<b>Colors</b></Link>
          </div>
          <div className='description'>
            <p>The biggest collection of offical brand color codes around. Curated by @brandcolors and friends.</p>
          </div>
          <nav className='menu'>
            <ul>
              <li>
                <a onClick={toggleModal}>About brand colors</a>
              </li>
            </ul>
          </nav>
        </aside>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button onClick={toggleModal} className='modal-close-btn'>
          <GrClose />
        </button>

        <h3>About BrandColors</h3>
        <p>
          BrandColors was created by DesignBombs. The goal was to crate a helpful reference for the brand color codes.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews.
        </p>

      </Modal>
    </>
  )
}

export default Sidebar