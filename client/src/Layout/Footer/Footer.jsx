import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div class="success-color pt-1 pb-1">
        <div class="container text-center text-md-left mt-6">
          <div class="row mt-3 white-text">
            <div class="col-md-3 col-lg-4 col-xl-4 mb-4">
              <h6 class="text-uppercase font-weight-bold">About</h6>
              <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto grey lighten-5" style={{ width: "60px" }} />
              <p>
                PlantATree is online store that sells trees, promoting global warming/climate change awareness and make a difference.</p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-5">
              <h6 class="text-uppercase font-weight-bold">Links</h6>
              <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto grey lighten-5" style={{ width: "60px" }} />
              <p><Link class="white-text" to="/">Trees</Link></p>
              <p><Link class="white-text" to="/about">About</Link></p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase font-weight-bold">Contact Us</h6>
              <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto grey lighten-5" style={{ width: "60px" }} />
              <p><i class="fas fa-home mr-3"></i>123 XYZ, Auckland</p>
              <p><i class="fas fa-envelope mr-3"></i>treesales@plantatree.nz</p>
              <p><i class="fas fa-phone mr-3"></i>123 456 789</p>
              <p><i class="fas fa-print mr-3"></i>0000 000 0000</p>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div class="footer-copyright text-center text-black-50 py-3 white-text success-color-dark">
        Copyright © 2019 PlantATree
      </div>
    </footer>
  );
};

export default Footer;