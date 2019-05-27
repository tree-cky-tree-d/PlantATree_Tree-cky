import React, { Component } from "react";

class FilterTreesByCategory extends Component {
  state = { value: "" };

  onChangeHandler = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.FilterTreesByCategory(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <select className="browser-default custom-select" onChange={ this.onChangeHandler }>
          <option value="">All Trees</option>
          <option value="Decoration">Decoration Trees</option>
          <option value="Fruit Tree">Fruit Trees</option>
        </select>
      </div>
    );
  }
}

export default FilterTreesByCategory;
