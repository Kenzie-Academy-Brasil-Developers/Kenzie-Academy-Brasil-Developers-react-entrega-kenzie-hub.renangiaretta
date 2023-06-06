import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ModalProvider } from "./ModalContext";
import { toast } from 'react-toastify'


export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [ user, setUser ]  = useState(null)
    const [ loading, setLoading ] = useState(true)

    const reload = useEffect(() => {
        async function loadUser () {
            const token = localStorage.getItem('@TOKEN')

            if(!token) {
                setLoading(false)
                return
            }
            try {
                const { data } = await api.get('/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        loadUser()
    }, [user])

    async function login ( data ) {
        try {
                const response =  await api.post('/sessions', data)
                const { token, user: userResponse, } = response.data
                const module = userResponse.course_module
                const userName = userResponse.name
                localStorage.setItem('@TOKEN', token)
                localStorage.setItem('@MODULE', module)
                localStorage.setItem('@USERNAME', userName)
                setUser(userResponse)
                toast.success('Login realizado com sucesso!')
                navigate('/home')
            } catch (error) {
                toast.error('Dados inválidos!')
                console.error(error)
            }
        
    }
    return (
        <AuthContext.Provider value={{ login, user, loading, setLoading, reload }}>
            {children}
            <ModalProvider reload={reload}/>
        </AuthContext.Provider>
    )
}