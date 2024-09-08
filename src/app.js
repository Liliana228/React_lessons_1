import React from "react";
import Header from "./components/Header"
import Users from "./components/Users";
import AddUser from "./components/AddUser";


class App extends React.Component {

  render() {
    return (<div> 
      <Header title= "Список пользователей"/>
        <main>
          <Users />
        </main>
        <aside>
          <AddUser />
        </aside>
      </div>
    )
  }
  

}

export default App