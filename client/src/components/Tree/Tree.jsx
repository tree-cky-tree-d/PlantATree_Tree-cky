import React from 'react';
import { Link } from 'react-router-dom';
import './Tree.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol } from 'mdbreact';

const Tree = ({ 
  _id,
  name,
  price,
  description,
  category,
  conditionsOfPlace,
  maintanceRequirements,
  maxHeight,
  growthRate,
  imageURL,
  removeTree
}) => {

  return(
    <MDBCol className="ml-3">
      <MDBCard className="align-items-center Product-Card">
        <MDBCardImage
          className="Product-Image"
          src={ imageURL }
          top
          alt="sample photo"
          overlay="white-slight"
        />
        <MDBCardBody className="text-center">
          <h6>
            <strong>
              <a href="#!" className="dark-grey-text">
                { name }
              </a>
            </strong>
          </h6>
          <h4 className="font-weight-bold blue-text">
            <strong>${ price }</strong>
          </h4>
          <button onClick={ () => removeTree(_id) } className="Action-Button fa fa-trash"></button>
          <Link to={{ pathname: '/edit', search: _id }}>
            <button className="Action-Button">Edit</button>
          </Link>
          <Link to={{ pathname: '/view', search: _id }}>
            <MDBBtn>See More</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Tree;
