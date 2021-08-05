import React, { useReducer } from 'react'
import { TOGGLE_ADD_USER, CHANGE_HANDLER_ADD_USER, ADD_USER, CANCEL_ADD_USER, TOGGLE_EDIT_USER, CHANGE_HANDLER_EDIT_USER, SAVE_EDIT_USER, CANCEL_EDIT_USER, REMOVAL_USER, SHOW_ALERT, HIDE_ALERT } from './type/types'
import { GlobalContext } from './GlobalContext'
import GlobalReducer from './GlobalReducer'
import { initialState } from './initialState'
import { validation } from './validation/validation'

const GlobalState = ({children}) => {
  const [globalState, globalDispatch] = useReducer(GlobalReducer, initialState)

  const toggleNewUser = () => {
    сancelEditUser()

    globalDispatch({
      type: TOGGLE_ADD_USER,
      payload: !globalState.newItemUser.isNewUser
    })
  }
  
  const changeHandlerAddUser = (event) => {
    globalDispatch({
      type: CHANGE_HANDLER_ADD_USER,
      payload: {...globalState.newItemUser, newUser: {...globalState.newItemUser.newUser, [event.target.name]: event.target.value}}
    })
  }

  const addNewUser = () => {
    hideAlert()

    const newUser = globalState.newItemUser.newUser
    newUser.id = globalState.users.length + 1
    if (!newUser.gender) newUser.gender = 'Мужской'
    
    const valid = validation(newUser)
    if (valid.length !== 0) {
      showAlert(valid)
      return
    }

    const users = globalState.users
    users.push(newUser)

    globalDispatch({
      type: ADD_USER,
      payload: users
    })

    сancelNewUser()
  }

  const сancelNewUser = () => {
    hideAlert()

    globalDispatch({
      type: CANCEL_ADD_USER,
      payload: {isNewUser: false, newUser: {}}
    })
  }

  const toggleEditUser = (id) => {
    сancelNewUser()
    hideAlert()
    
    const editItemUser = globalState.users.find(item => item.id === id)

    globalDispatch({
      type: TOGGLE_EDIT_USER,
      payload: {idEditUser: id, editUser: editItemUser}
    }) 
  }

  const changeHandlerEditUser = (event) => {
    globalDispatch({
      type: CHANGE_HANDLER_EDIT_USER,
      payload: {...globalState.editItemUser, editUser: {...globalState.editItemUser.editUser, [event.target.name]: event.target.value}}
    })
  }

  const saveEditUser = () => {
    hideAlert()

    const editUser = globalState.editItemUser.editUser
    const editUserIndex = globalState.users.findIndex(item => item.id === editUser.id)
    
    const valid = validation(editUser)
    if (valid.length !== 0) {
      showAlert(valid)
      return
    }
    
    const users = globalState.users
    users.splice(editUserIndex, 1, editUser)
    
    globalDispatch({
      type: SAVE_EDIT_USER,
      payload: users
    })

    сancelEditUser()
  }

  const сancelEditUser = () => {
    hideAlert()

    globalDispatch({
      type: CANCEL_EDIT_USER,
      payload: {idEditUser: 0, editUser: {}}
    })
  }

  const removalUser = (id) => {
    hideAlert()
    
    const users = globalState.users.filter(item => item.id !== id)
    
    globalDispatch({
      type: REMOVAL_USER,
      payload: users
    })
  }

  const showAlert = (errorAlert) => {
    globalDispatch({
      type: SHOW_ALERT,
      payload: errorAlert
    })
  }

  const hideAlert = () => globalDispatch({type: HIDE_ALERT})

  return (
    <GlobalContext.Provider value={{toggleNewUser, changeHandlerAddUser, addNewUser, сancelNewUser, toggleEditUser, changeHandlerEditUser, saveEditUser, сancelEditUser, removalUser, hideAlert, globalState}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState