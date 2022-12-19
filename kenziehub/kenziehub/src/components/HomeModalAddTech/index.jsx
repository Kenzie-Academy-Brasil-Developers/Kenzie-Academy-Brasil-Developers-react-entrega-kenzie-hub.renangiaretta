import React from 'react'
import './styles.css'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledButtonPrimary } from '../../styles/buttons'

const HomeModalAddTech = ( data ) => {
    const  { showAddModal, setShowAddModal, addTech }  = useContext(ModalContext)

    const addTechSchema = yup.object().shape({
        title: yup.string().required('É necessário digitar a tecnologia.'),
        status: yup.string()
    })
    const { register, handleSubmit, formState: { errors }  } = useForm({
        resolver: yupResolver(addTechSchema),
          defaultValues: {
          title: ``,
          status: '',
       }
      })


    function closeModal () {
        setShowAddModal(false)
    }

  return (
    
    <div className='modalTechChange'>
        <div className='container'>
          <div className='modalHeader title1'>
            <span>Cadastrar Tecnologia</span>
            <button className='closeBtn' onClick={closeModal}>X</button>
          </div>
            <form className='formAdd' action="submit">
              <label htmlFor="title">Nome</label>
              <input name='title' type="text" placeholder='TITULO' {...register('title')} />
              {errors.title?.message && <p className='error' aria-errormessage=''>{errors.title.message}</p>}
              <label htmlFor="status">Selecione o Status</label>
              <select name="status" id="" {...register('status')}>
                <option value="">Selecione o status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <StyledButtonPrimary className='title1' onClick={handleSubmit(addTech)} type='submit' >Cadastrar Tecnologia</StyledButtonPrimary>
            </form>
        </div>
    </div>
  )
}

export default HomeModalAddTech