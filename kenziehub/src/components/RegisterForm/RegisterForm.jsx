import React, { useEffect } from 'react'
import { StyledRegisterForm } from './styles'
import './../../styles/typography.css'
import { StyledButtonNegative } from '../../styles/buttons'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api'
import axios from 'axios'




const RegisterForm = () => {

  const registerSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório').min(3, 'O nome deve ter ao menos 3 caracteres').max(50, 'O nome deve ter no máximo 50 caracteres'),
    email: yup.string().required('O email é obrigatório.').email('É necessário fornecer um e-mail válido.'),
    password: yup.string().required('A senha é obrigatória')
    .matches(/(?=.*?[A-Z])/, 'At least one upper case English letter')
    .matches(/(?=.*?[a-z])/, 'At least one lower case English letter')
    .matches(/(?=.*?[0-9])/, 'At least one digit')
    .matches(/(?=.*?[#?!@$%^&*-])/, 'At least one special character')
    .matches(/.{8,}/, 'Minimum eight in length.'),
    modulo: yup.string().required('Escolha o módulo')
    
    })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
	  defaultValues: {
		  name: '',
   }
  })
  const submit = (data) => {
    console.log(data)
    // const registerUser = data => api.post('/users', data).then(() => {
    //   console.log('talkei')
    // }).catch(() => {
    //   console.log('bad request')
    // })

    async function registerUser (data) {
      const response =  await api.post('/users', data).then(() => {
        console.log('talkei')
      }).catch(() => {
        console.log('badre quest')
      })
      // console.log(response)
      return response
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //   async function registerUser(){
    //     const response = await api.post('/users', data: {
    //       name: 'lifa',
          
    //     })
    //     console.log(response)
    //   }
    //   registerUser()
    // }, [])
    console.log(registerUser())
  return registerUser
} 

  return (
    <StyledRegisterForm className='formContainer'>
        <form onSubmit={handleSubmit(submit)} action="submit" noValidate>

            <div className='titleContainer'>
            <h2 className='title1'>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa</p>
            </div>

            <label className='title2' htmlFor="name">Nome</label>
            <input name='name' type="text" placeholder='Digite aqui seu nome'  {...register('name')} />
            {errors.name?.message && <p aria-errormessage=''>{errors.name.message}</p>}
						<label className='title2' htmlFor="email">E-mail</label>
						<input name='email' type="text" placeholder='Digite aqui seu e-mail' {...register('email')} />
            {errors.email?.message && <p>{errors.email.message}</p>}
						<label className='title2' htmlFor="password">Senha</label>
            <input name='password' type="text" placeholder='Digite aqui sua senha' {...register('password')} />
            {errors.password?.message && <p>{errors.password.message}</p>}
						{/* <label className='title2' htmlFor="passwordVerification">Confirmar senha</label> */}
            {/* <input name='passwordVerification' type="text" placeholder='Digite novamente sua senha' {...register('confirmPassword')} /> */}
            {/* {errors.passwordVerification?.message && <p>{errors.passwordVerification.message}</p>} */}
						<label className='title2' htmlFor="bio">Bio</label>
            <input name='bio' type="text" placeholder='Fale sobre você'  {...register('bio')} />
            {errors.bio?.message && <p>{errors.bio.message}</p>}
						<label className='title2' htmlFor="contact">Contato</label>
            <input name='contact' type="text" placeholder='Opção de contato' {...register('contact')}/>
            {errors.contact?.message && <p>{errors.contact.message}</p>}
						<select name="course_module" id=""  {...register('course_module')} >
						{errors.course_module?.message && <p>{errors.course_module.message}</p>}
                <option value="">Selecione o módulo</option>
								<option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
								<option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
            <StyledButtonNegative type='submit'>Cadastrar</StyledButtonNegative>
            </form>
    </StyledRegisterForm>
  )
}

export default RegisterForm