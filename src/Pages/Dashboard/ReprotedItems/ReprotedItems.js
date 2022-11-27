import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ReprotedItems = () => {

    const {
        data: reportedItems = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["reportedItems"],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/report');
          const data = await res.json();
          return data;
        },
      });

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myproduct/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if(data.deletedCount > 0){
                  toast.success('Deleted Successfully')
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

              <th className='text-3xl'>Product Name</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            {reportedItems.map((reportedItem, idx) => (
              <tr key={idx}>
                <td></td>

                <td><span className='text-3xl'>{reportedItem.productName}</span></td>
                <td><button onClick={() => handleDelete(reportedItem._id)} className='btn btn-error rounded'>Delete</button></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster/>
    </div>
    );
};

export default ReprotedItems;