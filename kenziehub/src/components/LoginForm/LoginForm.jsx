import React from 'react'
import { StyledButtonDisabled, StyledButtonPrimary } from '../../styles/buttons'
import { StyledLoginForm } from './styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {

  const loginSchema = yup.object().shape({
    email: yup.string().required('Preencha o e-mail.').email('É necessário fornecer um e-mail válido.'),
    password: yup.string().required('Preencha a senha.')
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
	  defaultValues: {
      email: '',
		  password: '',
   }
  })

  const navigate = useNavigate()

  const submit = async (data) => {
    const response =  await api.post('/sessions', data).then((res) => {
      localStorage.setItem('@TOKEN', JSON.stringify(res.data.token))
      localStorage.setItem('@MODULE', JSON.stringify(res.data.user.course_module))
      localStorage.setItem('@USERNAME', JSON.stringify(res.data.user.name))
      navigate('/home')
    }).catch((error) => {
    })
    return response
} 
  return (
    <StyledLoginForm>
        <form onSubmit={handleSubmit(submit)} action="submit" noValidate>

            <div className='titleContainer'>
            <h2 className='title1'>Login</h2>
            </div>

            <label className='title2' htmlFor="email"  >E-mail</label>
            <input className='title4' name='email' type="text" placeholder='Digite aqui seu e-mail' {...register('email')} />
            {errors.email?.message && <p className='error' aria-errormessage=''>{errors.email.message}</p>}
            <label className='title2' htmlFor="password">Senha</label>
            <input className='title4' name='password' type="text" placeholder='Digite aqui sua senha' {...register('password')} />
            {errors.password?.message && <p className='error' aria-errormessage=''>{errors.password.message}</p>}
            <StyledButtonPrimary className='title1' type='submit'>Login</StyledButtonPrimary>
            <p className='title2'>Ainda não possui uma conta?</p>
            <Link to='/register'>
            <StyledButtonDisabled >Cadastre-se</StyledButtonDisabled>
            </Link>
        </form>
                
    </StyledLoginForm>
  )
}

export default LoginForm