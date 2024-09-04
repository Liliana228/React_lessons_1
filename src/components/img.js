import React from "react";

class Image extends React.Component {
         render() {
         return (
           <img className="foto1" src={this.props.image} />
           )
         }
       }

export default Image