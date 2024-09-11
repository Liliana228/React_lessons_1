import React from "react";
import User from "./User";


class Users extends React.Component {

         
         
    render() {

         if(this.props.users.length > 0)

         return (
           <div>
                  {this.props.users.map((element) => ( //this так как это class. Мы тут обращаемся к классу users и задаем метод map (заранее известную), чтобы перебрать массив users. 
                   <User key={element.id} user={element}/>        
                  ))}
                   </div>)
           else
           return (
                  <div className="usersEmpty">
                        <h3>Пользователей не найдено</h3>
                  </div>
                  )
         }
        }



export default Users