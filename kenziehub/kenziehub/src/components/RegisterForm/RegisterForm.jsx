import { StyledRegisterForm } from './styles'
import { StyledButtonNegative } from '../../styles/buttons'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {

  const registerSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório').min(3, 'O nome deve ter ao menos 3 caracteres').max(50, 'O nome deve ter no máximo 50 caracteres.'),
    email: yup.string().required('O email é obrigatório.').email('É necessário fornecer um e-mail válido.'),
    password: yup.string().required('A senha é obrigatória.')
    .matches(/(?=.*?[A-Z])/, 'É necessário ter ao menos uma letra maiúscula.')
    .matches(/(?=.*?[a-z])/, 'É necessárioter ao menos uma letra minúscula.')
    .matches(/(?=.*?[0-9])/, 'É necessário ter ao menos um número.')
    .matches(/(?=.*?[#?!@$%^&*-])/, 'É necessário ter ao menos um caractere especial')
    .matches(/.{8,}/, 'Deve ter ao menos 8 dígitos.'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "A senha não confere.").required('A confirmação de senha é obrigatória.'),
    course_module: yup.string().required('Escolha o módulo')
    })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
	  defaultValues: {
		  name: 'João do Caminhão',
   }
  })
  
  const navigate = useNavigate()

  const submit = async (data) => {

    const response =  await api.post('/users', data).then(() => {
      navigate('/')

    }).catch((error) => {
    })
    return response

} 

  return (
    <StyledRegisterForm className='formContainer'>
        <form onSubmit={handleSubmit(submit)} action="submit" noValidate>

            <div className='titleContainer'>
            <h2 className='title1'>Crie sua conta</h2>
            <p>Rápido e grátis, vamos nessa</p>
            </div>

            <label className='title2' htmlFor="name">Nome</label>
            <input className='title4' name='name' type="text" placeholder='Digite aqui seu nome'  {...register('name')} />
            {errors.name?.message && <p className='error' aria-errormessage=''>{errors.name.message}</p>}
						<label className='title2' htmlFor="email">E-mail</label>
						<input className='title4' name='email' type="text" placeholder='Digite aqui seu e-mail' {...register('email')} />
            {errors.email?.message && <p className='error' >{errors.email.message}</p>}
						<label className='title2' htmlFor="password">Senha</label>
            <input className='title4' name='password' type="text" placeholder='Digite aqui sua senha' {...register('password')} />
            {errors.password?.message && <p className='error' >{errors.password.message}</p>}
						<label className='title2' htmlFor="confirmPassword">Confirmar senha</label>
            <input className='title4' name='confirmPassword' type="text" placeholder='Digite novamente sua senha' {...register('confirmPassword')} />
            {errors.confirmPassword?.message && <p className='error' >{errors.confirmPassword.message}</p>}
						<label className='title2' htmlFor="bio">Bio</label>
            <input className='title4' name='bio' type="text" placeholder='Fale sobre você'  {...register('bio')} />
            {errors.bio?.message && <p className='error' >{errors.bio.message}</p>}
						<label className='title2' htmlFor="contact">Contato</label>
            <input className='title4' name='contact' type="text" placeholder='Opção de contato' {...register('contact')}/>
            {errors.contact?.message && <p className='error' >{errors.contact.message}</p>}
						<select name="course_module" id=""  {...register('course_module')} >
						{errors.course_module?.message && <p className='error' >{errors.course_module.message}</p>}
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