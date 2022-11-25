import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import BookingModal from './BookingModal/BookingModal';import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Booking Successfull.');

const CategoryProducts = () => {
    const products = useLoaderData();
    const [selectedProduct, setSelectedProduct] = useState(null);
    // const [products, setProducts] = useState([])
    // const { loading, setLoading } = useContext(AuthContext);

    // useEffect(() => {
    //     fetch('http://localhost:5000/category${categoryId}')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));

    // }, []);
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
                    <div className="card-actions justify-end">
                        <label onClick={() => setSelectedProduct(product)} htmlFor="booking-modal" className="btn">Buy Now</label>
                    </div>
                </div>
            </div>
            )}

            {
                selectedProduct && <BookingModal
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    notify={notify}></BookingModal>
            }
            <Toaster />
        </div>
    );
};

export default CategoryProducts;