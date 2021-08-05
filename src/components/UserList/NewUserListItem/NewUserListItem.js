import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import Button from "../../Button/Button";

const NewUserListItem = () => {
  const {changeHandlerAddUser, addNewUser, сancelNewUser} = useContext(GlobalContext)

  return (
    <li className="list-group-item pb-3">
      <div className="row align-items-end">
        <div className="col">
          <form>
            <div className="row">
              <div className="col">
                <label htmlFor="fullName" className="form-label">Введите полное имя</label>
                <input type="text" name="fullName" onChange={changeHandlerAddUser} className="form-control"  id="fullName" placeholder="Полное имя" />
              </div>
              <div className="col-2">
                <label htmlFor="age" className="form-label">Введите возраст</label>
                <input type="text" name="age" className="form-control" onChange={changeHandlerAddUser} id="age" placeholder="Возраст" />
              </div>
              <div className="col-3">
                <label htmlFor="gender" className="form-label">Укажите пол</label>
                <select name="gender" className="form-select" onChange={changeHandlerAddUser} id="gender" required>
                  <option>Мужской</option>
                  <option>Женский</option>
                </select>
              </div>
              <div className="col-3">
                <label htmlFor="cityResidence" className="form-label">Город проживания</label>
                <input type="text" onChange={changeHandlerAddUser} name="cityResidence" className="form-control" id="cityResidence" placeholder="Город проживания" />
              </div>
            </div>
          </form>
        </div>
        <div className="col-auto">
          <div className="d-grid gap-2 d-md-flex">
            <Button type="btn-success" buttonHandler={addNewUser} text="Сохранить" />
            <Button type="btn-danger" buttonHandler={сancelNewUser} text="Отмена" />
          </div>
        </div>
      </div>
    </li>
  )
}

export default NewUserListItem