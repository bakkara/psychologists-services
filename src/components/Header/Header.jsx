import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/catalog'>Psycolojists</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
    </div>
  )
}

export default Header
