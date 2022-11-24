import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CategoryProducts = () => {
    const products = useLoaderData();
    // const [products, setProducts] = useState([])
    // const { loading, setLoading } = useContext(AuthContext);

    // useEffect(() => {
    //     fetch('http://localhost:5000/category${categoryId}')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));

    // }, []);
    return (
        <div>
            this is detailed prodects of the said category.
            {products.map(product => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.productName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>)}

        </div>
    );
};

export default CategoryProducts;