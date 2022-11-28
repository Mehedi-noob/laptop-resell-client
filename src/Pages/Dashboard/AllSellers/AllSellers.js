import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllSellers = () => {
  // const role = 'seller';
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await fetch("https://laptop-resell-server.vercel.app/users?role=seller",{
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    });
      const data = await res.json();

      return data;
    }
  });
  console.log(sellers);

  // delete seller 
  const handleDelete = (email) => {
    fetch(`https://laptop-resell-server.vercel.app/users/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success('Deleted Successfully')
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
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-5">All Sellers</h2>
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
                <td><button onClick={() => handleVerify(seller.email)} className='btn btn-ghost'>{seller.isVerified ? <span className='text-info'>Verified ✓</span> : 'Unverified'}</button></td>
                <td><button onClick={() => handleDelete(seller.email)} className='btn btn-error rounded'>Delete</button></td>
                <Toaster/>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;