import React from "react";
import Header from "./components/Header"
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";

const baseurl = "https://reqres.in/api/users?page=1"

class App extends React.Component {

  constructor(props) { //для записи состояний
    super(props) // обязательная строка

    axios.get(baseurl).then((res) => { //обращаемся по url адресу, получаем оттуда данные, затем выполняется метод then
      this.setState({users: res.data.data})//res = response - мы получаем и выводим данные
    })

    this.state = {
             users: [ ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}

  render() {
    return (<div> 
      <Header title= "Список пользователей"/>
        <main>
          <Users 
          onEdit={this.editUser}
          users={this.state.users} 
          onDelete={this.deleteUser}
          />
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    )
  }

deleteUser(id) {
  this.setState({
    users: this.state.users.filter((element) => element.id !== id)
  })
}

editUser(user) {
  let allUsers = this.state.users //Получили всех пользователей
  allUsers[user.id - 1] = user //Нашли нужного пользователя, заменили его (=user)
  
  this.setState({users: []}, () => { //очистили список
    this.setState({users: [...allUsers]}) //обновили список пздц
  })
}

addUser(user) {
  const id = this.state.users.length + 1
  this.setState({users: [...this.state.users, {id, ...user}]})
}

}

export default App