import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButtom = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableAKey = 'pk_test_51KPOfeKQgVrdpQdEt92BJGVG6SmgxVsJ3L5pfT605LcArudsw2fHuEAo6UcpY73fonNVziflj8lkIDAGBJmSNXgK00m6IACyYO';

  const onToken = token => {
    console.log(token);
    alert("Payment processed successfully");
  }

  return(
    <StripeCheckout
      name='Crown Clothing'
      description='Buy whatever clother you dream about'
      image='https://stripe.com/img/documentation/checkout/marketplace.png'
      label='Pay now'
      panelLabel='Pay now'
      amount={priceForStripe}
      email='felixpereira538@gmail.com'
      shippingAddress
      billingAddress={true}
      allowRememberMe
      token={onToken}
      stripeKey={publishableAKey}
    >
      <button className='btn btn-primary'>Pay now</button>
    </StripeCheckout>

  )
};

export default StripeCheckoutButtom;