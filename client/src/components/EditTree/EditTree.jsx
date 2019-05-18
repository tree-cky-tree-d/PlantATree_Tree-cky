import React, { Component } from "react";
import './EditTree.css';
import axios from "axios";
import { withRouter } from 'react-router'

class EditTree extends Component {
  state = {
    id: '',
    name: "",
    price: "",
    description: "",
    category: "",
    conditionsOfPlace: "",
    maintanceRequirements: "",
    maxHeight: "",
    growthRate: "",
    imageURL: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount() {
    try {
      let search =  this.props.location.search,
        id = search.substring(1, search.length);

      const updateTree = await axios(`/api/trees/${id}`);

      const { 
        name, 
        price, 
        description, 
        category, 
        conditionsOfPlace, 
        maintanceRequirements, 
        maxHeight, 
        growthRate, 
        imageURL 
      } = updateTree.data.tree;

      this.setState({ 
        id, 
        name, 
        price, 
        description, 
        category, 
        conditionsOfPlace, 
        maintanceRequirements, 
        maxHeight, 
        growthRate, 
        imageURL 
      });
    } catch (err) {
        this.setState({ response: "Tree not found!" })
    }
  };

  updateTreeHandler = async (e) => {
    e.preventDefault();
    try {
      const tree = await axios.put(`/api/trees/${this.state.id}`, {
        name: this.refs.name.value,
        price: Number(this.refs.price.value),
        description: this.refs.description.value,
        category: this.refs.category.value,
        conditionsOfPlace: this.refs.conditionsOfPlace.value,
        maintanceRequirements: this.refs.maintanceRequirements.value,
        maxHeight: this.refs.maxHeight.value,
        growthRate: this.refs.growthRate.value,
        imageURL: this.refs.imageURL.value
      });
      this.setState({response: tree.data.message });
    } catch (err) {
      this.setState({ response: err.message });
    }
  };

  render() {
    if (this.state.response === "Tree not found!")
      return <h1>Tree not found!</h1>
    return (
      <div className="Edit-Tree-Wrapper">
        <h1>Edit page</h1>
        <form onSubmit={this.updateTreeHandler}>
          <label htmlFor="name">Tree Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            value={ this.state.name }
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="Edit-Tree-Input"
            id="name"
          />
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            placeholder="Enter price"
            value={ this.state.price }
            name="price"
            min="1"
            max="999"
            onChange={this.onChangeHandler}
            ref="price"
            className="Edit-Tree-Input"
            id="price"
          />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            placeholder="Enter description"
            value={ this.state.description }
            name="description"
            onChange={this.onChangeHandler}
            ref="description"
            className="Edit-Tree-Input"
            id="description"
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            placeholder="Enter category"
            value={ this.state.category }
            name="category"
            onChange={this.onChangeHandler}
            ref="category"
            className="Edit-Tree-Input"
            id="category"
          />
          <label htmlFor="conditionsOfPlace">Conditions Of Place:</label>
          <input
            type="text"
            placeholder="Enter conditions of place"
            value={ this.state.conditionsOfPlace }
            name="conditionsOfPlace"
            onChange={this.onChangeHandler}
            ref="conditionsOfPlace"
            className="Edit-Tree-Input"
            id="conditionsOfPlace"
          />
          <label htmlFor="maintanceRequirements">Maintance Requirements:</label>
          <input
            type="text"
            placeholder="Enter maintance requirements"
            value={ this.state.maintanceRequirements }
            name="maintanceRequirements"
            onChange={this.onChangeHandler}
            ref="maintanceRequirements"
            className="Edit-Tree-Input"
            id="maintanceRequirements"
          />
          <label htmlFor="maxHeight">Max Height:</label>
          <input
            type="text"
            placeholder="Enter max height"
            value={ this.state.maxHeight }
            name="maxHeight"
            onChange={this.onChangeHandler}
            ref="maxHeight"
            className="Edit-Tree-Input"
            id="maxHeight"
          />
          <label htmlFor="growthRate">Growth Rate:</label>
          <input
            type="text"
            placeholder="Enter growth rate"
            value={ this.state.growthRate }
            name="growthRate"
            onChange={this.onChangeHandler}
            ref="growthRate"
            className="Edit-Tree-Input"
            id="growthRate"
          />
          <label htmlFor="imageURL">Image URL:</label>
          <input
            type="text"
            placeholder="Enter image URL"
            value={ this.state.imageURL }
            name="imageURL"
            onChange={this.onChangeHandler}
            ref="imageURL"
            className="Edit-Tree-Input"
            id="imageURL"
          /><br />
          <button type="submit" className="Edit-Tree-Submit">Save Changes</button>
        </form>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default withRouter(EditTree);
