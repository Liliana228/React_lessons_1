import React from "react";
import Header from "./components/Header"
import Users from "./components/Users";
import AddUser from "./components/AddUser";


class App extends React.Component {

  constructor(props) { //для записи состояний
    super(props) // обязательная строка
    this.state = {
             users: [ //в таком варианте сам массив является состоянием
                      { // это массив, в котором есть 2 объекта
                               id: 1, /*id, Name и пр. это ключи*/ 
                               Name: 'Tommas',
                               Surname: 'Bang',
                               Email: 'tombang@yandex.ru',
                               Age: 34,
                               Married: true
                      },
                      {
                               id: 2,
                               Name: 'Nickole',
                               Surname: 'Vee',
                               Email: 'nickkiev@yandex.ru',
                               Age: 19,
                               Married: false  
                       }
             ]
    }
    this.addUser = this.addUser.bins(this)
}

  render() {
    return (<div> 
      <Header title= "Список пользователей"/>
        <main>
          <Users users={this.state.users}/>
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    )
  }
  
addUser(user) {
  const id = this.state.users.length + 1
  this.setState({users: [...this.state.users, {id, ...user}]})
}

}

export default App