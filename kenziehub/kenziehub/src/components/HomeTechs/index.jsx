import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { StyledButtonExit } from '../../styles/buttons'
import { StyledHomeTechs } from './styles'

const HomeTechs = () => {
  const { user, loading } = useContext(AuthContext)

  if(loading) {
    return null
  }

  const techs = user.techs
  console.log(techs)


  return (
    <StyledHomeTechs>
        <div className='addTechnologies'>
          <h2>Tecnologias</h2>
          <StyledButtonExit>+</StyledButtonExit>
        </div>
        
        <div className='techsContainer'>
          <ul className='ulCards'>
            {
              techs.map((item) => 
              <li className='techCard'>
                <h2>{item.title}</h2>
                <h3>{item.status}</h3>
              </li>
              )
            }
          </ul>
        </div>
    </StyledHomeTechs>
  )
}

export default HomeTechs