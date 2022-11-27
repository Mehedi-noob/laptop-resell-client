import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:5000/addproduct/${user?.email}`)
        .then((res) => {
          setMyProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [user?.email, myProducts]);

    const handleAdvertize = (id) => {
      fetch(`http://localhost:5000/myproduct/${id}`, {
            method: "PUT",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                // toast.success("Make Admin Successfully");
              }
            });
    };

    const handleDelete =(id)=>{
      fetch(`http://localhost:5000/myproduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.deletedCount > 0){
            toast.success('Deleted Successfully')
           
          }
        });
    }
  
    return (
      <div>
    <h2 className="text-4xl text-center font-bold mb-5">My Products</h2>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th className='text-3xl'>Image</th>
            <th className='text-3xl'>Name</th>
            <th className='text-3xl'>Price</th>
            <th className='text-3xl'>Status</th>
            <th className='text-3xl'></th>
          </tr>
        </thead>
        <tbody>
          {myProducts.map((myProduct, idx) => (
            <tr key={idx}>
              <td></td>
              <td><img className='rounded-xl' style={{width:'100px'}} src={myProduct.img} alt="" /></td>
              <td><span className='text-3xl'>{myProduct.productName}</span></td>
              <td><span className='text-3xl'>${myProduct.resalePrice}</span></td>
              <td><button className="btn btn-md  btn-primary">{myProduct.paid?'not available':'available'}</button></td>
              <td><button onClick={()=> handleAdvertize(myProduct._id)} className="btn btn-md  btn-info">{myProduct.isAdvertized? 'Advertized ✓' : 'Advertize it?'}</button></td>
              <td><button onClick={()=>handleDelete(myProduct._id)} className="btn btn-md  btn-error">delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Toaster/>
  </div>
  );
};

export default MyProduct;