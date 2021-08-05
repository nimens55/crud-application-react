import React from 'react'
import { useContext } from 'react'
import UserListItem from './UserListItem/UserListItem'
import NewUserListItem from './NewUserListItem/NewUserListItem'
import EditUserListItem from './EditUserListItem/EditUserListItem'
import Alert from '../Alert/Alert'
import { GlobalContext } from '../../context/GlobalContext'

const UserList = () => {
  const {globalState} = useContext(GlobalContext)

  return (
    <React.Fragment>
      {globalState.alert ? <Alert /> :null}
    
      <ul className="list-group">
        {globalState.newItemUser.isNewUser ? <NewUserListItem /> : null}
        
        {globalState.users.map(user => {
          return globalState.editItemUser.idEditUser === user.id 
            ? <EditUserListItem
                id={globalState.editItemUser.editUser.id}
                fullName={globalState.editItemUser.editUser.fullName}
                age={globalState.editItemUser.editUser.age}
                gender={globalState.editItemUser.editUser.gender}
                cityResidence={globalState.editItemUser.editUser.cityResidence}
                key={globalState.editItemUser.editUser.id}
              />
            : <UserListItem 
                id={user.id}
                fullName={user.fullName}
                age={user.age}
                gender={user.gender}
                cityResidence={user.cityResidence}
                key={user.id}
              />
          }
        )}
      </ul>
    </React.Fragment>
  )
}

export default UserList