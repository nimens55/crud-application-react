import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext"
import Button from "./components/Button/Button";
import UserList from "./components/UserList/UserList";

function App() {
  const { toggleNewUser } = useContext(GlobalContext)

  return (
    <React.Fragment>
      <div className="container pt-4">
        <div className="row align-items-center">
          <div className="col">
            <h1>CRUD приложение</h1>
          </div>
          <div className="col-auto">
            <Button type="btn-primary" text="Новая запись" buttonHandler={toggleNewUser} />
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <UserList />
      </div>
    </React.Fragment>
  );
}

export default App;
