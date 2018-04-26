import {REMOVE_FROM_FAVOURITES, SAVE_TO_FAVOURITES} from '../actions/actions'

const checkingLocalStorage = () => {
  return Object.assign({}, ...Object.entries(localStorage)
    .map(([key, value]) => ({[key]: JSON.parse(value)})))
}

const initialState = {
  storeItem: checkingLocalStorage()
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_TO_FAVOURITES:
      return {
        ...state,
        storeItem: {...state.storeItem, [action.payload.id]: action.payload}
      }
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        storeItem: Object.keys(state.storeItem)
          .filter(item => item !== action.payload.key.toString())
          .reduce((object, item) => ({...object, [item]: state.storeItem[item]}), {})
      }
    default:
      return state
  }
}