import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Logo from '../../components/Logo/Logo'
import { StyledLogin } from './styles'

const Login = () => {
  return (
    <StyledLogin>
        <Logo/>
        <LoginForm/>
    </StyledLogin>
  )
}

export default Login