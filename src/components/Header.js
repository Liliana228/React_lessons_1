import React from "react";
import Button from "./button";

class Header extends React.Component {
         render() {
         return (
           <header className="hhh">{this.props.title}
           <Button />
           <Button text = "boop"/>
           </header>
           )
         }
       }

       Header.defaultProps = {
        title: "mewык"
}
export default Header