import React from "react";


class AddUser extends React.Component {

      userAdd = {}

         constructor(props) { //для записи состояний
                  super(props) // обязательная строка
                  this.state = {
                        first_name: "", //состояния по умолчанию
                        last_name:"",
                        email: "",
                           Age: "",
                           Married: false
                          
                  }
         }
    render() {
         return (
                  <form className="form" ref={(element) => this.myForm = element}>
                        <input placeholder="Имя" /*placeholder это встроенная команда*/
                        onChange={(e) => this.setState({first_name: e.target.value})} /*это значит, в инпуте будет выводиться то, что напечатал пользователь*/ /> 
                        <input placeholder="Фамилия"
                        onChange={(e) => this.setState({last_name: e.target.value})} />  
                        <input placeholder="email" 
                        onChange={(e) => this.setState({email: e.target.value})}/>  
                        <input placeholder="Возраст" 
                        onChange={(e) => this.setState({Age: e.target.value})}/>
                        <label htmlFor="Married">Женат/Замужем</label>  
                        <input type="checkbox" id="Married" 
                        onChange={(e) => this.setState({Married: e.target.checked})}/>  
                        <button type="button" onClick={
                              () => {
                                    this.myForm.reset()
                                    this.userAdd = {
                                          first_name: this.state.first_name,
                                          last_name: this.state.last_name,
                                          email: this.state.email,
                                          Age: this.state.Age,
                                          Married: this.state.Married,
                              }
                              if(this.props.user)
                                    this.userAdd.id = this.props.user.id
                                    this.props.onAdd(this.userAdd)
                        }
                        }>Добавить</button> 
                  </form>
           )

         }

        }


export default AddUser