import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import BookingModal from './BookingModal/BookingModal';
import toast, { Toaster } from 'react-hot-toast';
import Products from '../Products/Products';


const CategoryProducts = () => {
    const products = useLoaderData();
    const [selectedProduct, setSelectedProduct] = useState(null);

    // useEffect(() => {
    //     fetch('http://localhost:5000/category${categoryId}')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));

    // }, []);
    // console.log(products);

    

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {products.map(product => <Products key={product._id} product={product}
            setSelectedProduct={setSelectedProduct}
            ></Products>
            )}

            {
                selectedProduct && <BookingModal
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    toast={toast}></BookingModal>
            }
            <Toaster />
        </div>
    );
};

export default CategoryProducts;