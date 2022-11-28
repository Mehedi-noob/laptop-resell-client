import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LoaderComponent from '../../../Shared/LoaderComponent/LoaderComponent';

const Advertize = () => {
    const {loading} = useContext(AuthContext);

    const {
        data: products = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["allAddProduct"],
        queryFn: async () => {
          const res = await fetch(`https://laptop-resell-server.vercel.app/advertize`,{
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        });
          const data = res.json();
          return data;
        },
      });

      if(isLoading){
        <LoaderComponent></LoaderComponent>
      }
      console.log('product length',products.length)

    // const { data: products = [], refetch } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         const res = await fetch("https://laptop-resell-server.vercel.app/advertize",{
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         const data = await res.json();

    //         return data;
    //     }
    // });
    // console.log(products);
    // if(loading){
    //     return <LoaderComponent></LoaderComponent>
    // }
    // if(products.length === 0 || products === null){
    //     return;
    // }

    return (
        <div>
            {
                products.length > 0 &&
                <div>
                <h1 className='text-center text-5xl m-5'>Our latest Addition</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {products?.map(product => <div key={product._id} className="card card-compact w-96 bg-base-100 shadow-xl">
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
            </div>
            }
        </div>
    );
};

export default Advertize;