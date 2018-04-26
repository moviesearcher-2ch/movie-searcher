import {combineReducers} from 'redux'
import Fetcher from './Fetcher'
import LocalStorage from './LocalStore'

export default combineReducers({
  fetcher: Fetcher,
  storage: LocalStorage
})