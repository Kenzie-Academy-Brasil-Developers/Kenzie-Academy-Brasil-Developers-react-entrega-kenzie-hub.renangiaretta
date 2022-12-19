import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { ModalContext } from '../../contexts/ModalContext'
import { StyledButtonExit } from '../../styles/buttons'
import HomeModalAddTech from '../HomeModalAddTech'
import HomeModalViewTech from '../HomeModalViewTech/HomeModalViewTech'
import { StyledHomeTechs } from './styles'


const HomeTechs = () => {
  const { user, loading } = useContext(AuthContext)
  const { showAddModal, setShowAddModal, showViewModal, setShowViewModal, setViewModalData, test, } = useContext(ModalContext)

  if(loading) {
    return null
  }

  const techs = user.techs

  function addTech () {
      setShowAddModal(true)
  }

  function editTech ( item ) {
    setShowViewModal(true)
    setViewModalData({
      title: `${item.title}`,
      id: `${item.id}`
     })
  }
  
  return (
    (test ? <StyledHomeTechs>
      {(showViewModal ? <HomeModalViewTech /> : null )}
      {(showAddModal ? <HomeModalAddTech/> : null)}
    <div className='addTechnologies'>
      <h2>Tecnologias</h2>
      <StyledButtonExit onClick={addTech} >+</StyledButtonExit>
    </div>
    
    <div className='techsContainer'>
      <ul className='ulCards'>
        { (user.techs.length >=  techs.length ? techs.map(
          (item) => 
          <li onClick={() => {editTech(item)}} key={item.id} className='techCard'>
                <h2>{item.title}</h2>
                <h3>{item.status}</h3>
            </li>
          ) : null)
        }
      </ul>
    </div>
</StyledHomeTechs> : null)
    



)
    
}

export default HomeTechs