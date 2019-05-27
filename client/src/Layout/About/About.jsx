import React from 'react';
import './About.css';
import { MDBContainer } from "mdbreact";

const About = () => {
  return (
    <MDBContainer className="About-Wrapper">
    	<h3>About</h3>
    	PlantATree is online store that sells trees, promoting global warming/climate change awareness and make a difference.
    	<br /><br />
    	"It is not merely that the world is bettered by saving, replacing, and multiplying trees. <br />
    	It is that an aim of this kind becomes an impulse towards developing a mood and an outlook <br />
    	which will increasingly make it natural to think for the future, for other people, for generations yet unborn. <br />
    	Planting a tree is a symbol of a looking-forward kind of action; looking forward, yet not too distantly." 
    	<br /><br />
		—Richard St. Barbe Baker
    </MDBContainer>
  );
};

export default About;