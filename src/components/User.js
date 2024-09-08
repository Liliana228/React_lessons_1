import React from "react";
import { VscClose } from "react-icons/vsc";
import { BiEditAlt } from "react-icons/bi";

class User extends React.Component {
         user = this.props.user //мы это написали, чтобы в h3 внизу писать this.user.Name, а не this.props.user.Name
    render() {
         return (
                  <div className="user"  /*у каждого элемента из массива должно быть уникальное значение, в данном случае id, мы передаем его в компоненте Users*/ > 
                  <VscClose className="close-icon"/>
                  <BiEditAlt className="edit-icon"/>
                  <h3>{this.user.Name} {this.user.Surname}</h3>
                  <p>{this.user.Email}</p>
                  <b>{this.user.Married ? 'Женат/Замужем' : 'Не женат/Не замужем'}</b>
         </div>
         )

         }
         

}



export default User