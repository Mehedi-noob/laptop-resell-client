import userEvent from '@testing-library/user-event';
import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ selectedProduct,setSelectedProduct, toast }) => {
    const { user } = useContext(AuthContext);

    const handleConfirmOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const number = form.number.value;
        const location = form.location.value;
        const booking = {
            productId: selectedProduct._id,
            buyersName: user?.displayName,
            buyersEmail: user.email,
            productName: selectedProduct?.productName,
            resalePrice: selectedProduct?.resalePrice,

            number,
            location,
            Image: selectedProduct.img
            
        }
        console.log(booking)
        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.acknowledged){
               
                    toast('booking successfull');
    
                }
                else {
                    toast('Item is already booked');

                }
            })
            .catch((err) => console.error(err));
           
            
            setSelectedProduct(null);

    };

    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="booking-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{selectedProduct?.productName}</h3>
                    <h2 className="font-bold text-lg">User Name: {user?.displayName}</h2>
                    <h2 className="font-bold text-lg">Email: {user?.email}</h2>
                    <h2 className="font-bold text-lg">Product Name: {selectedProduct?.productName}</h2>
                    <h2 className="font-bold text-lg">Product Price: {selectedProduct?.resalePrice}</h2>
                    <form onSubmit={handleConfirmOrder} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="number" type="text" placeholder="Phone Number" className="input w-full input-bordered" />

                        <input name="location" type="location" placeholder="location" className="input w-full input-bordered" />
                        <br />
                        <label htmlFor="booking-modal"><input className='btn btn-accent w-full' type="submit" value="Submit" /></label>
                        <label onClick={()=>setSelectedProduct(null)} htmlFor="booking-modal" className="btn">Cancel</label>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;