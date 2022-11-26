import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertize = () => {

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/advertize");
            const data = await res.json();

            return data;
        }
    });
    console.log(products);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {products.map(product => <div key={product._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.productName}</h2>
                    <p>location: {product.sellerLocation}</p>
                    <p>resale price: {product.resalePrice}</p>
                    <p>original price: {product.orgPrice}</p>
                    <p>years of use: {product.yearsOfUse}</p>
                    <p>Date: {product.postDate}</p>
                    <p>Sellers name: {product.sellerName}</p>
                </div>
            </div>
            )}
        </div>
    );
};

export default Advertize;