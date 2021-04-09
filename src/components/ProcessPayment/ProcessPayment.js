import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IeFQtGSMYGK0QFEJpGYUXt1W6cqUDhQPg5PWgPO9qJDAbtWXMSUFMSBTVYom2prfKJzXMRnDr3MMV8U1xRHIqCY00xHNz0SoW');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>    
          <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>      
          {/* <SplitCardForm></SplitCardForm> */}
        </Elements>
    );
};

export default ProcessPayment;