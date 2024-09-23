import React from "react";
import { VscClose } from "react-icons/vsc";
import { BiEditAlt } from "react-icons/bi";
import AddUser from "./AddUser";


class User extends React.Component {
     constructor(props) { //для записи состояний
          super(props) // обязательная строка
          this.state = {
                   editForm: false
          }
 }
     
     user = this.props.user //мы это написали, чтобы в h3 внизу писать this.user.Name, а не this.props.user.Name
    render() {
         return (
                  <div className="user"  /*у каждого элемента из массива должно быть уникальное значение, в данном случае id, мы передаем его в компоненте Users*/ > 
                  <VscClose onClick={() => this.props.onDelete(this.user.id)} className="close-icon"/>
                  <BiEditAlt className="edit-icon" onClick={() => {
                    this.setState({
                         editForm: !this.state.editForm
                    })
                  }}/>
                  <img src={this.user.avatar} />
                  <h3>{this.user.first_name} {this.user.last_name}</h3>
                  <p>{this.user.email}</p>
                  <b>{this.user.Married ? 'Женат/Замужем' : 'Не женат/Не замужем'}</b>

                  {this.state.editForm && <AddUser 
                  user={this.user}
                  onAdd={this.props.onEdit}
                  
                  />}
         </div>
         )

         }
         

}



export default User