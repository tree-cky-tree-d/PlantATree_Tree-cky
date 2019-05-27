import React, { Component } from "react";
import "./FilterTreesByPrice.css";

class FilterTreesByPrice extends Component {
  state = { value: "" };

  onChangeHandler = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.FilterTreesByPrice(this.state.value);
    });
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search by your budget..."
        name="name"
        onChange={ this.onChangeHandler }
        className="Search-Tree-Input"
      />
    );
  }
}

export default FilterTreesByPrice;
