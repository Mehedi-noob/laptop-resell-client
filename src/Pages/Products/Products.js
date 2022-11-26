import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Products = ({product, setSelectedProduct}) => {
    const blueTick = "https://stormcom.co.uk/wp-content/uploads/2021/04/1.png"
    const [seller, setSeller] = useState([]);

    // const {data: seller = [], refetch} = useQuery({
    //     queryKey: ['seller'],
    //     queryFn: async() =>{
    //         const res = await fetch(`http://localhost:5000/users/${product.sellerEmail}`);
    //         const data = await res.json();

    //         console.log(data);
    //         return data;
    //     }
    // });
    // console.log(seller, product.sellerEmail,"seller")

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${product.sellerEmail}`)
        .then(res=>res.json())
        .then(data => setSeller(data))
      },[product.sellerEmail])

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.productName}</h2>
                    <p>location: {product.sellerLocation}</p>
                    <p>resale price: {product.resalePrice}</p>
                    <p>original price: {product.orgPrice}</p>
                    <p>years of use: {product.yearsOfUse}</p>
                    <p>Date: {product.postDate}</p>
                    <p>Date: {product.sellerEmail}</p>
                    <p className='flex'>Sellers name: {product.sellerName}   {seller[0]?.isVerified&& <img className='w-5' src={blueTick} alt="Shoes" />}</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => setSelectedProduct(product)} htmlFor="booking-modal" className="btn">Buy Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;