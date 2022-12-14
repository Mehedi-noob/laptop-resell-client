import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IconName } from "react-icons/fa";

const Products = ({product, setSelectedProduct}) => {
    const blueTick = "https://ibb.co/C14G3P5"
    const [seller, setSeller] = useState([]);

    // const {data: seller = [], refetch} = useQuery({
    //     queryKey: ['seller'],
    //     queryFn: async() =>{
    //         const res = await fetch(`https://laptop-resell-server.vercel.app/users/${product.sellerEmail}`);
    //         const data = await res.json();

    //         console.log(data);
    //         return data;
    //     }
    // });
    // console.log(seller, product.sellerEmail,"seller")

    useEffect(()=>{
        fetch(`https://laptop-resell-server.vercel.app/users/${product.sellerEmail}`)
        .then(res=>res.json())
        .then(data => setSeller(data))
      },[product.sellerEmail])
      
      if(!product.isAvailable){
        return;
      }

      const handleReport = (id) => {
        fetch(`https://laptop-resell-server.vercel.app/report/${id}`, {
              method: "PUT",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.modifiedCount > 0) {
                  toast.success("Reported Successfully");
                }
              });
      };

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full' style={{height: "300px"}} src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.productName}</h2>
                    <p>location: {product.sellerLocation}</p>
                    <p>resale price: {product.resalePrice}</p>
                    <p>original price: {product.orgPrice}</p>
                    <p>years of use: {product.yearsOfUse}</p>
                    <p>Date: {product.postDate}</p>
                    <p>Date: {product.sellerEmail}</p>
                    <p className='flex'>Sellers name: {product.sellerName}  <span>  </span> {seller[0]?.isVerified&& <span className='text-info'>???</span> }</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => setSelectedProduct(product)} htmlFor="booking-modal" className="btn">Book Now</label>
                    </div>
                    <div className="card-actions justify-start">
                        <label onClick={() => handleReport(product._id)} className="btn">Report to Admin</label>
                        <Toaster/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;