import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useNavigation } from 'react-router-dom';
// whats needed
/* 1. for the form
product name
price
condition type(excellent, good, fair)
mobile number
location
product category
description
price
year of purchase

*/
const notify = () => toast('Product successfully added');

const AddProduct = () => {
    const navigation = useNavigate();

    const date = new Date().toUTCString();

    const { user } = useContext(AuthContext);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const isVerified = false;
        const orgPrice = form.orgPrice.value;
        const resalePrice = form.resalePrice.value;
        const yearsOfUse = form.yearsOfUse.value;
        const postDate = form.postDate.value;
        const img = form.img.value;
        const productName = form.productName.value;
        const sellerName = form.sellerName.value;
        const categoryName = form.categoryName.value;
        const sellerLocation = form.sellerLocation.value;
        const sellerEmail = form.sellerEmail.value;
        const sellerPhone = form.sellerPhone.value;
        const description = form.description.value;
        const addedProduct = {
            isAvailable: true,
            isVerified,
            orgPrice,
            resalePrice,
            yearsOfUse,
            postDate,
            img,
            productName,
            sellerName,
            categoryName,
            sellerLocation,
            sellerEmail,
            sellerPhone,
            description
        }
        console.log(addedProduct)
        fetch("http://localhost:5000/addproduct", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addedProduct),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
        notify();
        navigation('/dashboard/myproduct');
    };

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100'>
                <form onSubmit={handleAddProduct} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">

                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400">Condition?</label>
                        <select name="role" className="select w-full max-w-xs">
                            <option value="Excellent" defaultValue>Excellent</option>
                            <option value="Good" >Good</option>
                            <option value="Fair" >Fair</option>
                        </select>
                    </div>

                    input field
                    <label className="block dark:text-gray-400">This is a label</label>

                    <input type="text" name="orgPrice" id="orgPrice" placeholder="orgPrice" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>

                    <input type="text" name="resalePrice" id="resalePrice" placeholder="resalePrice" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>

                    <input type="text" name="yearsOfUse" id="yearsOfUse" placeholder="yearsOfUse" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>

                    <input type="text" name="postDate" id="postDate" placeholder="postDate" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" defaultValue={date} />

                    <input type="text" name="img" id="img" placeholder="img" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>

                    <input type="text" name="productName" id="productName" placeholder="productName" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>

                    <input type="text" name="sellerName" id="sellerName" placeholder="sellerName" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" defaultValue={user?.displayName} />


                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400">Select Product Category</label>
                        <select name="categoryName" className="select w-full max-w-xs">
                            <option value="Dell" defaultValue>Dell</option>
                            <option value="Hp" >Hp</option>
                            <option value="Asus" >Asus</option>
                        </select>
                    </div>

                    <input type="text" name="sellerLocation" id="sellerLocation" placeholder="sellerLocation" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>

                    <input type="email" name="sellerEmail" id="sellerEmail" placeholder="sellerEmail" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" defaultValue={user?.email} />

                    <input type="text" name="sellerPhone" id="sellerPhone" placeholder="sellerPhone" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>

                    <textarea type="text" name="description" className="description" placeholder="about your product"></textarea>

                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                    <Toaster />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;