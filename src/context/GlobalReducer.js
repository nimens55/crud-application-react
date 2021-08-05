import { TOGGLE_ADD_USER, CHANGE_HANDLER_ADD_USER, ADD_USER, CANCEL_ADD_USER, TOGGLE_EDIT_USER, CHANGE_HANDLER_EDIT_USER, SAVE_EDIT_USER, CANCEL_EDIT_USER, REMOVAL_USER, SHOW_ALERT, HIDE_ALERT } from './type/types'

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_ADD_USER: 
      return {
        ...state,
        newItemUser: {...state.newItemUser, isNewUser: action.payload}
      }
    case CHANGE_HANDLER_ADD_USER: 
      return {
        ...state,
        newItemUser: action.payload
      }
    case ADD_USER: 
      return {
        ...state, 
        users: action.payload
      }
    case CANCEL_ADD_USER: 
      return {
        ...state, 
        newItemUser: action.payload
      }
    case TOGGLE_EDIT_USER:
      return {
        ...state, 
        editItemUser: action.payload
      }
    case CHANGE_HANDLER_EDIT_USER:
      return {
        ...state, 
        editItemUser: action.payload
      }
    case SAVE_EDIT_USER:
      return {
        ...state, 
        users: action.payload,
      }
    case CANCEL_EDIT_USER:
      return {
        ...state, 
        editItemUser: action.payload
      }
    case REMOVAL_USER:
      return {
        ...state, 
        users: action.payload
      }
    case SHOW_ALERT:
      return {
        ...state, 
        alert: action.payload
      }
    case HIDE_ALERT:
      return {
        ...state, 
        alert: null
      }
    default:
      return state;
  }
}

export default GlobalReducer