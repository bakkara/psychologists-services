import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '../Container.styled'

const Header = () => {
  return (
    <Container>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/catalog'>Psycolojists</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
    </Container>
  )
}

export default Header
