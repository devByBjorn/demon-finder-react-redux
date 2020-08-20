const initState = []

const demonsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DEMON':
      return [
        ...state,
        action.demon
      ]
    case 'EDIT_DEMON':
      return state.map(demon => demon.id === action.demon
        ? { ...demon, ...action.updates }
        : demon
      )
    case 'DELETE_DEMON':
      return state.filter(({ id }) => id !== action.id)
    case 'POPULATE_DEMONS':
      return action.demons
    default:
      return state
  }
}

export default demonsReducer