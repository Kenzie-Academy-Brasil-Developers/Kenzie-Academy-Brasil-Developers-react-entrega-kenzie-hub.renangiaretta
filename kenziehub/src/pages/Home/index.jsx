import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import HomeMessage from '../../components/HomeMessage'
import HomeUserCard from '../../components/HomeUserCard'
import { StyledHome } from './style'

const Home = () => {
  return (
    <StyledHome>
      <HomeHeader/>
      <HomeUserCard/>
      <HomeMessage/>
    </StyledHome>
  )
}

export default Home