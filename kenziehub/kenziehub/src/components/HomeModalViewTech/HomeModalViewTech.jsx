import React from 'react'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import './styles.css'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledButtonDisabled, StyledButtonNegative } from '../../styles/buttons'

const HomeModalViewTech = ( data ) => {
    const { showViewModal, setShowViewModal, updateTech, viewModalData, setViewModalData, deleteTech } = useContext(ModalContext)

    const viewTechSchema = yup.object().shape({
        status: yup.string().required('Selecione o status')
    })
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(viewTechSchema),
      })
    async function submit ( event, data ) {
        event.preventDefault()
    }      
      
  return (
    <div className='modalTechView'>
        <div className='container'>
            <div className='modalHeader'>
                <h2>Tecnologia Detalhes</h2>
                <button className='closeBtn' onClick={() => {setShowViewModal(false)}}>X</button>
            </div>
            <form className='formView' onSubmit={submit} action="submit" noValidate >
            <label className='title5' htmlFor="">Nome do projeto</label>
            <span className='title3 inputs'>{viewModalData.title}</span>
            <label className='title5' htmlFor="status">Status</label>
            <select className='inputs title3' name='status' {...register('status')} >
                <option>Selecione o status</option>
                <option value="Iniciante">
                    Iniciante
                </option>
                <option value="Intermediário">
                    Intermediário
                </option>
                <option value="Avançado">
                    Avançado
                </option>
            </select>
                <div className='buttonsContainer'>
                    <StyledButtonNegative type='submit' onClick={handleSubmit(updateTech)} >Salvar Alterações</StyledButtonNegative>   
                    <button className='deleteBtn' onClick={() => (deleteTech())}>Excluir</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default HomeModalViewTech