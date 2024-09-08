import React from "react";
import User from "./User";


class Users extends React.Component {

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
         }
         
    render() {

         if(this.state.users.length > 0)

         return (
           <div>
                  {this.state.users.map((element) => ( //this так как это class. Мы тут обращаемся к классу users и задаем метод map (заранее известную), чтобы перебрать массив users. 
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