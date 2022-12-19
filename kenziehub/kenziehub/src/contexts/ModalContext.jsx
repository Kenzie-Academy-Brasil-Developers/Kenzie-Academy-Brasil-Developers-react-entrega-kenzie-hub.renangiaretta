import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";


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
        const response = await api.post('/users/techs', data)
        setShowAddModal(false)
        } catch (error) {
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
            const response = await api.put(`/users/techs/${techId}`, data)
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
            const response = await api.delete(`/users/techs/${techId}`)
        } catch (error) {
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