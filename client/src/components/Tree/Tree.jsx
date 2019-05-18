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



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Tree.css';
// import {  
//   MDBRow, 
//   MDBCol, 
//   MDBCard, 
//   MDBCardImage, 
//   MDBCardBody, 
//   MDBContainer, 
//   MDBBtn, 
//   MDBModal, 
//   MDBModalBody, 
//   MDBModalHeader, 
//   MDBModalFooter 
// } from "mdbreact";

// const Tree = ({ 
//   _id,
//   name,
//   price,
//   description,
//   category,
//   conditionsOfPlace,
//   maintanceRequirements,
//   maxHeight,
//   growthRate,
//   imageURL,
//   removeTree
// }) => {

//   class ModalPage extends Component {
//   state = {
//     modal1: false
//   }

//   toggle = nr => () => {
//     let modalNumber = 'modal' + nr
//     this.setState({
//       [modalNumber]: !this.state[modalNumber]
//     });
//   }

//   return(
//     <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
//       <MDBCard className="align-items-center">
//         <MDBCardImage src={ imageURL } top alt="tree photo" overlay="white-slight" />
//         <MDBCardBody className="text-center">
//           <h5><strong> <a href="#!" className="dark-grey-text">{ name }</a></strong></h5>
//           <h4 className="font-weight-bold blue-text"><strong>${ price }</strong></h4>
//           <MDBBtn color="primary" onClick={this.toggle(1)}>See More</MDBBtn><br />
//           <button onClick={ () => removeTree(_id) } className="Action-Button fa fa-trash"></button>
//           <Link to={{ pathname: '/edit', search: _id }}>
//            <button className="Action-Button fa fa-pencil"></button>
//           </Link>
//         </MDBCardBody>
//       </MDBCard>

//       <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg">
//         <MDBModalHeader toggle={this.toggle(1)}>MDBModal title</MDBModalHeader>
//         <MDBModalBody>
//           <MDBCol>
//             <MDBCardImage src={ imageURL } alt="tree photo" overlay="white-slight" />
//           </MDBCol>
//           <MDBCol>
//             <strong>Description:</strong><br />
//             { description }<br />

//             <strong>Category:</strong><br />
//             { category }<br />

//             <strong>Conditions Of Place:</strong><br />
//             { conditionsOfPlace }<br />

//             <strong>Maintance Requirements:</strong><br />
//             { maintanceRequirements }<br />

//             <strong>Max Height:</strong><br />
//             { maxHeight }<br />

//             <strong>Growth Rate:</strong><br />
//             { growthRate }<br />
//           </MDBCol>
//         </MDBModalBody>
//         <MDBModalFooter>
//           <MDBBtn color="secondary" onClick={this.toggle(1)}>Close</MDBBtn>
//           <MDBBtn color="primary">Add to Cart</MDBBtn>
//         </MDBModalFooter>
//       </MDBModal>
//     </MDBCol>
//   );
// };

// export default Tree;


