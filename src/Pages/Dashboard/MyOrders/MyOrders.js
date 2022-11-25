import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyOrders = () => {
    const myOrders = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                myOrders.map(order => <div key={order._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={order.Image} alt="product-name" /></figure>
                    <div className="card-body">
                        <h1 className="card-title">{order.productName}</h1>
                        <h2 className="card-title">Price: {order.resalePrice}</h2>
                        
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrders;