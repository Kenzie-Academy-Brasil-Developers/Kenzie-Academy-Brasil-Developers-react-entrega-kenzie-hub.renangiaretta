import React from 'react'
import Logo from '../../components/Logo/Logo'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { StyledRegister } from './style'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <StyledRegister>
      <header className='registerHeader'>
        <div className='logoContainer'>
          <Logo/>
        </div>
        <div className='buttonContainer'>
          <Link to='/'>
            <button className='toLoginButton'>Voltar</button>
          </Link>
        </div>
      </header>
        <RegisterForm/>
    </StyledRegister>
  )
}


export default Register