import React from "react";
import Header from "./components/Header"
import Image from "./components/img"
import foto from "./img/preview часть 5.png"

class App extends React.Component {

constructor(props) { //для добавления состояний
         super(props);
         this.state = {
                  Text: "Help yext", //Значение по умолчанию
                  userData: "" //Пустая строка
         }
        this.inputClick = this.inputClick.bind(this) // регистрация событий (только для собственных)
}

    componentDidUpdate(prevProps) {
      if (this.state.helpText !== "Help")
        console.log("Some")
    }

  render() {
    return (<div> 
      <Header title= "one"/>
      <Header title="yep:p"/>
      <Header />
      <h1 
         
         onClick={this.TextClick} // this.props - только если речь идет о классе (class). Есди это функция (const), то без this
         onMouseEnter={this.TextMouseOver}>
         {this.state.Text} 
      </h1>
      <h2>
         {this.state.userData}
         </h2>
      <input 
        onChange={event => this.setState({ userData: event.target.value })}
        placeholder={this.state.Text}
        onClick={this.inputClick}
        onMouseEnter={this.mouseOver}
      />
      <p>
          {this.state.Text === "Help yext" ? "Yes " : "No "}
          {1+1}
      </p>
      <Image image={foto} />
      <img className="foto2" src={foto} />
      </div>
    )
  }
  inputClick() {
         this.setState({Text: "Pick"})
         console.log("Clicked")
}
  mouseOver() {console.log("Mouse over")}

  TextClick() {console.log("Text Clicked")}
  TextMouseOver() {console.log("Mouse over text")}

 

}

export default App