import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const CatogorySection = () => {
    const [categories, setCategory] = useState([])
const {loading, setLoading} = useContext(AuthContext);

    useEffect(() => {
        fetch('https://laptop-resell-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategory(data));
            
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(category => <div key={category.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={category.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{category.name}</h2>
                        <div className="card-actions">
                            <Link to={`/category/${category.name}`}><button /* onClick={()=>setLoading(true)} */ className="btn btn-primary">Open Now</button></Link>
                        </div>
                    </div>
                </div>)
            }
            
        </div>
    );
};

export default CatogorySection;