import database from '../firebase/firebase'

export const addDemon = demon => ({
  type: 'ADD_DEMON',
  demon,
})

export const addToDb = (data = {}) =>
  (dispatch, getState) => {
    const { title = '', cause = '', manage = '', sins = 0 } = data
    const demon = { title, cause, manage, sins }

    const uid = getState().authState.uid

    return database
      .ref(`users/${uid}/demons`)
      .push(demon)
      .then((ref) => {
        dispatch(addDemon({
          id: ref.key,
          ...demon,
        }))
      })
  }

const deleteDemon = ({ id }) => ({
  type: 'DELETE_DEMON',
  id,
})

export const deleteFromDb = ({ id }) =>
  (dispatch, getState) => {
    const uid = getState().authState.uid

    return database
      .ref(`users/${uid}/demons/${id}`)
      .remove()
      .then(() => dispatch(deleteDemon({ id })))
  }

export const editDemon = (id, updates) => ({
  type: 'EDIT_DEMON',
  id,
  updates,
})

export const editInDb = (id, updates) =>
  (dispatch, getState) => {
    const uid = getState().authState.uid

    return database
      .ref(`users/${uid}/demons/${id}`)
      .update(updates)
      .then(() => dispatch(editDemon(id, updates)))
  }

export const populateDemons = demons => ({
  type: 'POPULATE_DEMONS',
  demons
})

export const populateDbData = () =>
  (dispatch, getState) => {
    const uid = getState().authState.uid

    return database
      .ref(`users/${uid}/demons`)
      .once('value')
      .then((snapshots) => {
        const demons = []

        snapshots.forEach(childSnap => {
          demons.push({
            id: childSnap.key,
            ...childSnap.val(),
          })
        })
        dispatch(populateDemons(demons))
      })
  }