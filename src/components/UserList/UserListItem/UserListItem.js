import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import Button from "../../Button/Button";

const UserListItem = (props) => {
  const {toggleEditUser, removalUser} = useContext(GlobalContext)

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col">
          <div className="row">
            <div className="col">{props.fullName}</div>
            <div className="col-2">{props.age + ' лет'}</div>
            <div className="col-3">{props.gender}</div>
            <div className="col-3">{props.cityResidence}</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-grid gap-2 d-md-flex">
            <Button type="btn-warning" buttonHandler={() => toggleEditUser(props.id)} text="Редактировать" />
            <Button type="btn-danger" buttonHandler={() => removalUser(props.id)} text="Удалить" />
          </div>
        </div>
      </div>
    </li>
  )
}

export default UserListItem



