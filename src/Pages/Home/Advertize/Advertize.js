import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertize = () => {

    const {data: products = [], refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async() =>{
            const res = await fetch("http://localhost:5000/users?role=seller");
            const data = await res.json();

            return data;
        }
    });
    console.log(products);

    return (
        <div>
            <h1>this is advertize section.{products.length}</h1>
        </div>
    );
};

export default Advertize;