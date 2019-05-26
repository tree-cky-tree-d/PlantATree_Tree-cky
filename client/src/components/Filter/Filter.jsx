import React from "react";
import {  MDBFormInline, MDBInput } from "mdbreact";
import "./Filter.css";

class Filter extends React.Component {
  state = {
    radio: ""
  }
  
  onClick = nr => () => {
    this.setState({
      radio: nr
    
    });
  }
  
  render() {
    return (
      
        <MDBFormInline>
          <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false} label="Name" type="radio" id="radio1"  />
          
          <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio===2 ? true : false} label="Category" type="radio" id="radio2" />
          <MDBInput gap onClick={this.onClick(3)} checked={this.state.radio===3 ? true : false} label="Description" type="radio" id="radio3" />
          <MDBInput gap onClick={this.onClick(4)} checked={this.state.radio===4 ? true : false} label="Condition" type="radio" id="radio4" />
        </MDBFormInline>
      );
    }
}

export default Filter;