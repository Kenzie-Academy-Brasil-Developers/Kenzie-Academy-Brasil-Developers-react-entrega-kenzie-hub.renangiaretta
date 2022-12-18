import React from 'react'
import { StyledButtonExit } from '../../styles/buttons'
import Logo from '../Logo/Logo'
import { StyledHeader } from './styles'
import { Link } from 'react-router-dom'


const HomeHeader = () => {
    function exit () {
        localStorage.clear()
    }


  return (
    <StyledHeader>
        <Logo/>
        <Link to='/'>
        <StyledButtonExit onClick={exit}>SAIR</StyledButtonExit>
        </Link>
    
    </StyledHeader>
  )
}

export default HomeHeader