import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
 
const StripeCheckoutButton = ({price}) => {
    const priceForStrip = price * 100;
    const publishableKey = 'pk_test_51GuvCWGOl5twj6Tz1FGs1muxWQnLsLDMSVHmsVwnVot9REDRZAVI0U1Zf1p9FPxBL6XKWASwMyozWaXeejvhqrkO00mR7vXWns'
    
    const onToken = (token) => {
        console.log(token);
        alert('Payment successful');
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="Shop C"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;