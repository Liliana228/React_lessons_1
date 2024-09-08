import React from "react";


class AddUser extends React.Component {
         constructor(props) { //для записи состояний
                  super(props) // обязательная строка
                  this.state = {
                           Name: "", //состояния по умолчанию
                           Surname:"",
                           Email: "",
                           Age: "",
                           Married: false
                  }
         }
    render() {
         return (
                  <form className="form">
                        <input placeholder="Имя" /*placeholder это встроенная команда*/
                        onChange={(e) => this.setState({Name: e.target.value})} /*это значит, в инпуте будет выводиться то, что напечатал пользователь*/ /> 
                        <input placeholder="Фамилия"
                        onChange={(e) => this.setState({Surname: e.target.value})} />  
                        <input placeholder="Email" 
                        onChange={(e) => this.setState({Email: e.target.value})}/>  
                        <input placeholder="Возраст" 
                        onChange={(e) => this.setState({Age: e.target.value})}/>
                        <label htmlFor="Married">Женат/Замужем</label>  
                        <input type="checkbox" id="Married" 
                        onChange={(e) => this.setState({Married: e.target.checked})}/>  
                        <button type="button">Добавить</button> 
                  </form>
           )

         }

        }


export default AddUser