import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editInDb, populateDbData } from '../actions/demon'
import AddDemonForm from '../components/demon/AddDemonForm'
import ArrowNavigation from '../components/navigation/ArrowNavigation'

const EditDemonPage = ({ match, history }) => {
  const id = match.params.id
  const demon = useSelector(state => state.demons.find(demon => demon.id === id))
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(populateDbData())
    }
  }, [])

  const handleEdit = demon => {
    dispatch(editInDb(id, demon))
    history.push("/demons")
  }

  return (
    <>
      <ArrowNavigation />
      <AddDemonForm
        demon={demon}
        handleAddDemon={handleEdit}
      />
    </>
  )
}

export default EditDemonPage