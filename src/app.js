import React from "react";
import Header from "./components/Header"

class App extends React.Component {
  render() {
    return (<div>
      <Header title= "one"/>
      <Header title="yep:p"/>
      <Header title= "0"/>
      <h1 onClick={this.TextClick}
      onMouseEnter={this.TextMouseOver}>
          {this.Text} 
      </h1>
      <input 
        placeholder={this.Text}
        onClick={this.inputClick}
        onMouseEnter={this.mouseOver}
      />
      <p>
          {this.Text === "Help yext" ? "Yes " : "No "}
          {1+1}
      </p>
      </div>
    )
  }
  inputClick() {console.log("Clicked")}
  mouseOver() {console.log("Mouse over")}

  TextClick() {console.log("Text Clicked")}
  TextMouseOver() {console.log("Mouse over text")}

  Text ="Help yext"

}

export default App