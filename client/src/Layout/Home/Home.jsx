import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { GridLoader } from 'react-spinners';
import { MDBContainer } from "mdbreact";


// Components
import Tree from "../../components/Tree/Tree";
import SearchTrees from "../../components/SearchTrees/SearchTrees";
import Filter from "../../components/Filter/Filter";
import Carousel from "../Carousel/Carousel";

class Home extends Component {
  state = {
    data: null,
    allTrees: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const trees = await axios("/api/trees/");
      this.setState({ data: trees.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeUser = async id => {
    try {
      // const treeRemoved = await axios.delete(`/api/trees/${id}`);
      const trees = await axios("/api/trees/");
      this.setState({ data: trees.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchTrees = async treename => {
    let allTrees = [...this.state.data.trees];
    if (this.state.allTrees === null) this.setState({ allTrees });
    let trees = this.state.data.trees.filter(({ name }) =>
      name.toLowerCase().includes(treename.toLowerCase())
    );
    if (trees.length > 0) this.setState({ data: { trees } });

    if (treename.trim() === "")
      this.setState({ data: { trees: this.state.allTrees } });
  };

  filter = async treename => {
    let allTrees = [...this.state.data.trees];
    if (this.state.allTrees === null) this.setState({ allTrees });
    alert(`You chose the ${this.Filter.radio} pizza.`);
    let trees = this.state.data.trees.filter(({ name }) =>
      name.toLowerCase().includes(treename.toLowerCase())
    );
    if (trees.length > 0) this.setState({ data: { trees } });

    if (treename.trim() === "")
      this.setState({ data: { trees: this.state.allTrees } });
  };



  render() {
    let trees;

    if (this.state.data)
      trees =
        this.state.data.trees &&
        this.state.data.trees.map(tree => (
          <Tree key={tree._id} {...tree} removeTree={this.removeTree} />
        ));
    else return <div className="Spinner-Wrapper"> <GridLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.trees.length)
        return <h1 className="No-Trees">No trees!</h1>;

    return (
      <div>
        <Carousel />
        <div className="Home-Wrapper">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Our Bestsellers
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <SearchTrees className="Search-Bar" SearchTrees={this.searchTrees} />
        
          <Filter className="Filter-Bar" Filter={this.Filter} />
          <MDBContainer>
              {trees}
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default Home;
