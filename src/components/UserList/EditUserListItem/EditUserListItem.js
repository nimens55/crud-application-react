import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import Button from "../../Button/Button";

const EditUserListItem = (props) => {
  const {changeHandlerEditUser, saveEditUser, сancelEditUser} = useContext(GlobalContext)

  return (
    <li className="list-group-item pb-3">
      <div className="row align-items-end">
        <div className="col">
          <form>
            <div className="row">
              <div className="col">
                <label htmlFor="fullName" className="form-label">Введите полное имя</label>
                <input type="text" name="fullName" className="form-control" onChange={changeHandlerEditUser} id="fullName" placeholder="Полное имя" value={props.fullName} />
              </div>
              <div className="col-2">
                <label htmlFor="age" className="form-label">Введите возраст</label>
                <input type="text" name="age" className="form-control" onChange={changeHandlerEditUser} id="age" placeholder="Возраст" value={props.age} />
              </div>
              <div className="col-3">
                <label htmlFor="gender" className="form-label">Укажите пол</label>
                <select name="gender" className="form-select" onChange={changeHandlerEditUser} id="gender" defaultValue={props.gender}>
                  <option>Мужской</option>
                  <option>Женский</option>
                </select>
              </div>
              <div className="col-3">
                <label htmlFor="cityResidence" className="form-label">Город проживания</label>
                <input type="text" onChange={changeHandlerEditUser} name="cityResidence" className="form-control" id="cityResidence" placeholder="Город проживания" value={props.cityResidence} />
              </div>
            </div>
          </form>
        </div>
        <div className="col-auto">
          <div className="d-grid gap-2 d-md-flex">
            <Button type="btn-success" buttonHandler={saveEditUser} text="Сохранить" />
            <Button type="btn-danger" buttonHandler={сancelEditUser} text="Отмена" />
        </div>
        </div>
      </div>
    </li>
  )
}

export default EditUserListItem