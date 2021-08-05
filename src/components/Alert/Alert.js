import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const Alert = () => {
  const {globalState, hideAlert} = useContext(GlobalContext)

  return (
    <div 
      className={`alert alert-danger alert-dismissible`}
      role="alert"
    >
      <ul className="m-0">
        {globalState.alert.map((itemText, index) => <li className="text-dark" key={index}>{itemText}</li>)}
      </ul>

      <button type="button" onClick={hideAlert} className="btn-close" aria-label="Close"></button>
    </div>
  )
}

export default Alert