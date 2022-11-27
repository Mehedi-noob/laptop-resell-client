import React from 'react';


const CheckOutForm = () => {
    // const stripe = useStripe();
    // const elements = useElements()
    const stripe = usestri
    

    const handleSubmit= async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
            
            return;
          }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;