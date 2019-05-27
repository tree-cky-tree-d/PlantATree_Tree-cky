import React from "react";
import "./StripeBtn.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeBtn = (props) => {
  const publishableKey = "pk_test_ognuMWhqkHfFvnCm0ZITKtCq00cEmlixdc";
   
  const onToken = token => {
    const body = {
      amount: props.amount * 100,
      token: token
  };

  axios
      .post("http://localhost:5000/api/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
    <StripeCheckout
      className="Stripe-Btn"
      label="Checkout" //Component button text
      name="PlantATree" //Modal Header
      description="Please enter your payment details:"
      panelLabel="Pay" //Submit button in modal
      amount={ props.amount * 100 } //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};

export default StripeBtn;