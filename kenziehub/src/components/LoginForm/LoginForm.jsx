import React from 'react'
import { StyledButtonDisabled, StyledButtonPrimary } from '../../styles/buttons'
import { StyledLoginForm } from './styles'

const LoginForm = () => {
  



  return (
    <StyledLoginForm>
        <form action="submit">

            <div className='titleContainer'>
            <h2 className='title1'>Login</h2>
            </div>

            <label className='title2' htmlFor="email">E-mail</label>
            <input name='email' type="text" placeholder='Digite aqui seu e-mail'/>
            <label className='title2' htmlFor="senha">Senha</label>
            <input name='senha' type="text" placeholder='Digite aqui sua senha'/>
            <StyledButtonPrimary>Cadastrar</StyledButtonPrimary>
            <p className='title2'>Ainda não possui uma conta?</p>
            <StyledButtonDisabled>Cadastre-se</StyledButtonDisabled>
        </form>
                
    </StyledLoginForm>
  )
}

export default LoginForm