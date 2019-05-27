import React, { Component } from "react";
import './Cart.css';
import axios from "axios";
import { withRouter } from 'react-router'
import { MDBBtn, MDBCardImage, MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import StripeBtn from "../../components/StripeBtn/StripeBtn";

class Cart extends Component {
    state = {
        currentId: "",
        trees: [],
        totalPrice: ""
    };

    onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

    componentDidMount() {
        const that = this;

        fetch("/api/cart")
            .then(response => response.json())
            .then(data => {
                that.setState({ 
                    trees: data.trees,
                    totalPrice: data.totalPrice
                 });
            });
    }

    componentDidUpdate() {
        const that = this;

        fetch("/api/cart")
            .then(response => response.json())
            .then(data => {
                that.setState({ 
                    trees: data.trees,
                    totalPrice: data.totalPrice
                 });
            });
    }

    handleRemoveTree = async (e) => {
        e.preventDefault();

        axios.post(`/api/cart/removeItem`, {
            id: this.state.currentId
          });
      }
    
    render() {
        console.log(this.state.trees)
        return(
            <div class="treeViewCart">
                <h3 className="CartTile">Cart:</h3>
                {this.state.trees.map( tree =>            
                        <MDBContainer className="Cart-Tree-Wrapper">
                            <MDBRow>
                                <MDBCol>
                                    <MDBCardImage className="CartImage"  key={tree.id} src={ tree.imageURL } alt="tree photo" overlay="white-slight" />
                                </MDBCol>
                                <MDBCol className="Tree-Details">
                                    <h2 key={tree.id}>Name: { tree.name }</h2>
                                    <h2 key={tree.id}>Price: ${ tree.price }</h2>
                                    <h2 key={tree.id}>Quantity: { tree.quantity}</h2>
                                    <h2 key={tree.id}>Item total: ${ tree.itemTotal }</h2>
                                    <MDBRow>
                                        <form onSubmit={this.handleRemoveTree}>
                                            <MDBBtn className="" type="submit" onClick={()=>{
                                                    this.setState({currentId: tree.id});
                                                }}> Remove from Cart
                                            </MDBBtn>
                                        </form>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                       </MDBContainer>
                    )}<div class="CartTotal">
                    <MDBContainer className="Total-Tree-Wrapper">
                        <MDBCol>
                            <MDBRow>
                                <h2>Total Price: ${ this.state.totalPrice }</h2>
                            </MDBRow>
                            <MDBRow>
                                <StripeBtn amount={ this.state.totalPrice } />
                            </MDBRow>
                        </MDBCol>
                    </MDBContainer>
                </div>
            </div>
        );
    }
}

export default withRouter(Cart);
