import { useState } from 'react'
import { createContext } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'


export const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
    const [ showAddModal, setShowAddModal ] = useState(false)
    const [ showViewModal, setShowViewModal ] = useState(false)
    const [ viewModalData, setViewModalData ] = useState({})
    const [ test, setTest ] = useState(true)

    async function addTech ( data ) {
        try {
            const token = localStorage.getItem('@TOKEN')
        api.defaults.headers.common.authorization = `Bearer ${token}`
        await api.post('/users/techs', data)
        setShowAddModal(false)
        toast.success('Tecnologia adicionada com sucesso!')
        } catch (error) {
            toast.error('Não foi possível adicionar a tecnologia... Tente novamente.')
            console.error(error)
        }finally{
        }
    }

    async function updateTech ( data ) {
        try {
            console.log(data)
            setTest(false)
            const token = localStorage.getItem('@TOKEN')
            const techId = viewModalData.id
            api.defaults.headers.common.authorization = `Bearer ${token}`
            await api.put(`/users/techs/${techId}`, data)
            toast.success('Tecnologia atualizada com sucesso!')
        } catch (error) {
            console.error(error)
        } finally {
            setShowViewModal(false)
            setTimeout(() => {
                setTest(true)
                    setTest(true)
                }, 1000);
        }
    }

    async function deleteTech () {
        try {
            const token = localStorage.getItem('@TOKEN')
            const techId = viewModalData.id
            api.defaults.headers.common.authorization = `Bearer ${token}`
            await api.delete(`/users/techs/${techId}`)
            toast.success('Tecnologia removida com sucesso!')
        } catch (error) {
            toast.error('Não foi possível remover a tecnologia... Tente novamente.')
            console.error(error)
        } finally {
            setShowViewModal(false)
        }
    }


    return (
        <ModalContext.Provider value={{ showAddModal, setShowAddModal, addTech, showViewModal, setShowViewModal, updateTech, viewModalData, setViewModalData, deleteTech, test, setTest }}>
            {children}
        </ModalContext.Provider>
    )
}