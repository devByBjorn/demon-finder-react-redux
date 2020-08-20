import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToDb, populateDbData } from '../actions/demon'
import AddDemonForm from '../components/demon/AddDemonForm'
import AddDemonFormExplained from '../components/demon/AddDemonFormExplained'
import MyDemonsNavigation from '../components/navigation/MyDemonsNavigation'
import { AddDemonContainer, Item } from '../styled/AddDemonContainer'

const AddDemonPage = ({ history }) => {
  const dispatch = useDispatch()

  const handleAddDemon = demon => {
    dispatch(addToDb(demon))
    history.push("/demons")
  }

  return (
    <>
      <MyDemonsNavigation />
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