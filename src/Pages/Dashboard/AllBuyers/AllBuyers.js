import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
// const role = 'buyer';
const {data: buyers = [], refetch} = useQuery({
    queryKey: ['buyers'],
    queryFn: async() =>{
        const res = await fetch("https://laptop-resell-server.vercel.app/users?role=buyer",{
          headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
      });
        const data = await res.json();

        return data;
    }
});
console.log(buyers);

const handleDelete = (email) => {
  fetch(`https://laptop-resell-server.vercel.app/users/${email}`, {
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
  fetch(`https://laptop-resell-server.vercel.app/users/${email}`, {
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
    <h2 className="text-4xl text-center font-bold mb-5">All Buyers</h2>
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
          {buyers.map((buyer, idx) => (
            <tr key={idx}>
              <td></td>
              
              <td><span className='text-3xl'>{buyer.name}</span></td>
              <td><span className='text-3xl'>{buyer.email}</span></td>
              <td><button onClick={()=>handleVerify(buyer.email)} className='btn btn-warning'>{buyer.isVerified? 'Verified' : 'Unverified'}</button></td>
              <td><button onClick={()=>handleDelete(buyer.email)} className='btn btn-error rounded'>Delete</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default AllBuyers;