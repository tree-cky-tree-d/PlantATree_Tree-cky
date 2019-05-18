import React, { Component } from "react";
import "./SearchTrees.css";

class SearchTrees extends Component {
  state = { value: "" };

  onChangeHandler = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.SearchTrees(this.state.value);
    });
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search by name..."
        name="name"
        onChange={ this.onChangeHandler }
        className="Search-Tree-Input"
      />
    );
  }
}

export default SearchTrees;
