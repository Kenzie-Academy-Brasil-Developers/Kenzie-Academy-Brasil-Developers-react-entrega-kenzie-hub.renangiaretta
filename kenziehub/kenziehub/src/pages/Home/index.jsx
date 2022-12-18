import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import HomeTechs from '../../components/HomeTechs'
import HomeUserCard from '../../components/HomeUserCard'
import { StyledHome } from './style'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'





const Home = () => {
  const { user, loading } = useContext(AuthContext)

  if(loading) {
    return null
  }

  return (
    (user ? (
    <StyledHome>
      <HomeHeader/>
      <HomeUserCard/>
      <HomeTechs/>
    </StyledHome>
    ) : <Navigate to='/'/> )
  )
}

export default Home