import React from 'react'
import { useDispatch } from 'react-redux'
import { addToDb, } from '../actions/demon'
import AddDemonForm from '../components/demon/AddDemonForm'
import AddDemonFormExplained from '../components/demon/AddDemonFormExplained'
import ArrowNavigation from '../components/navigation/ArrowNavigation'
import { AddDemonContainer, Item } from '../styled/AddDemonContainer'

const AddDemonPage = ({ history }) => {
  const dispatch = useDispatch()

  const handleAddDemon = demon => {
    dispatch(addToDb(demon))
    history.push("/demons")
  }

  return (
    <>
      <ArrowNavigation />
      <AddDemonContainer>
        <Item>
          <h3>Demon components</h3>
          <AddDemonFormExplained />
        </Item>
        <Item>
          <h3>Add your demon</h3>
          <AddDemonForm handleAddDemon={handleAddDemon} />
        </Item>
      </AddDemonContainer>
    </>
  )
}

export default AddDemonPage