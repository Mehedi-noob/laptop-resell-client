import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    // const role = 'seller';
    const {data: sellers = [], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async() =>{
            const res = await fetch("http://localhost:5000/users?role=seller");
            const data = await res.json();

            return data;
        }
    });
    console.log(sellers);

    return (
        <div>
        <h2 className="text-4xl text-center font-bold mb-5">My Products</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                
                <th className='text-3xl'>Name</th>
                <th className='text-3xl'>Email</th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, idx) => (
                <tr key={idx}>
                  <td></td>
                  
                  <td><span className='text-3xl'>{seller.name}</span></td>
                  <td><span className='text-3xl'>{seller.email}</span></td>
                  <td><button className='btn btn-error rounded'>Delete</button></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllSellers;