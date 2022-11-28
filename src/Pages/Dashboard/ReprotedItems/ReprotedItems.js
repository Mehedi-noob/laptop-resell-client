import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ReprotedItems = () => {

  // fetch reported items 
    const {
        data: reportedItems = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["reportedItems"],
        queryFn: async () => {
          const res = await fetch('https://laptop-resell-server.vercel.app/report');
          const data = await res.json();
          return data;
        },
      });

    const handleDelete = (id) => {
        fetch(`https://laptop-resell-server.vercel.app/myproduct/${id}`, {
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
      <h2 className="text-4xl text-center font-bold mb-5">Reported Items</h2>
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