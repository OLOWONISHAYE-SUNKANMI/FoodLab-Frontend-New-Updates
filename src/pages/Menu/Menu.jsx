import React from 'react'
import './Menu.css'
import MenuHeader from '../../components/MenuHeader/MenuHeader'
import Footer from '../../components/Footer/Footer'
import Quickpicks from '../../components/MenuBody/Quickpicks/Quickpicks'

const Menu = () => {
  return (
    <div>
      <MenuHeader />
      <Quickpicks/>
      <Footer />
    </div>
  )
}

export default Menu