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

    const handleDelete = (email) => {
      fetch(`http://localhost:5000/users/${email}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if(data.deletedCount > 0){
                // toast.success('Deleted Successfully')
                refetch();
              }
            });
    };

    const handleVerify = (email) => {
      fetch(`http://localhost:5000/users/${email}`, {
            method: "PUT",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                // toast.success("Make Admin Successfully");
                refetch();
              }
            });
    };

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
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, idx) => (
                <tr key={idx}>
                  <td></td>
                  
                  <td><span className='text-3xl'>{seller.name}</span></td>
                  <td><span className='text-3xl'>{seller.email}</span></td>
                  <td><button onClick={()=>handleVerify(seller.email)} className='btn btn-warning'>{seller.isVerified? 'Verified' : 'Unverified'}</button></td>
                  <td><button onClick={()=>handleDelete(seller.email)} className='btn btn-error rounded'>Delete</button></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllSellers;