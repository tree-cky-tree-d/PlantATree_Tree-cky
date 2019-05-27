import React, { Component } from "react";
import './LandscapeMockup.css';
import { withRouter } from 'react-router'
import Draggable from 'react-draggable';
import { MDBContainer, MDBNavLink, MDBBtn, MDBRow } from 'mdbreact';

class LandscapeMockup extends Component {

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const backURL = "/view?" + this.props.location.plant.plantID;
    return (
        <div>
            <MDBRow>
                <h3 className="Title">Landscape Mockup:</h3>
                <MDBNavLink className="Button-Padding" to={ backURL }>
                    <MDBBtn>Back</MDBBtn>
                </MDBNavLink>
            </MDBRow>
            <MDBContainer className="LandscapeMockup-Wrapper">
                <Draggable {...dragHandlers}>
                    <div>
                        <div className="handle">
                            <img src={ this.props.location.plant.imageURL } alt="Tree"/>
                        </div>
                    </div>
                </Draggable>
            </MDBContainer>
            
        </div>
    );
  }
}

export default withRouter(LandscapeMockup);