import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  addDemon,
  addToDb,
  deleteDemon,
  deleteFromDb,
  editDemon,
  editInDb,
  populateDemons,
  populateDbData,
} from '../../actions/demon'
import database from '../../firebase/firebase'
import demons from '../fixtures/demons'

const uid = 'ksjgksjgasdfsdf-a535a356'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach(done => {
  const data = {}

  demons.forEach(({
    id,
    title,
    cause,
    manage,
  }) => {
    data[id] = { title, cause, manage }
  })

  database
    .ref(`users/${uid}/demons`)
    .set(data)
    .then(() => done())
})

// ADD
test('should add trade to firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const data = {
    title: 'Demon 1',
    cause: 'Becuase',
    manage: 'How I will manage this demon',
  }

  store.dispatch(addToDb(data))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_DEMON',
        trade: {
          id: expect.any(String),
          ...data,
        }
      })
      return database
        .ref(`users/${id}/demons/${actions[0].demon.id}`)
        .once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(data)
      done()
    }, 3000)
})