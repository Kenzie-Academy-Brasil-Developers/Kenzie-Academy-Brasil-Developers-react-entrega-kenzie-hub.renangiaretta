import React from 'react'
import { StyledHomeUserCard } from './styles'

const HomeUserCard = () => {
    const userName = localStorage.getItem('@USERNAME')
    const courseModule = localStorage.getItem('@MODULE')
  return (
    <StyledHomeUserCard>
        <h2 className='title1'>Olá, {userName}</h2>
        <h3 className='title3'>{courseModule}</h3>
    </StyledHomeUserCard>
  )
}

export default HomeUserCard