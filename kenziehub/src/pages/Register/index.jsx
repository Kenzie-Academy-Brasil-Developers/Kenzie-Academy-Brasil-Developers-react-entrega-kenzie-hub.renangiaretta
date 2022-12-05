import React from 'react'
import Logo from '../../components/Logo/Logo'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { StyledRegister } from './style'

const Register = () => {
  return (
    <StyledRegister>
      <Logo/>
        <RegisterForm/>
    </StyledRegister>
  )
}

export default Register