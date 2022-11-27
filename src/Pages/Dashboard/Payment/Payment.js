import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const product = useLoaderData();
    console.log('product' , product);
    return (
        <div>
            This is the payment gatway.
            {
                product.productName
            }
        </div>
    );
};

export default Payment;