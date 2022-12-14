import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';
import LoaderComponent from '../../Shared/LoaderComponent/LoaderComponent';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, loading, setLoading } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role, isVerified: false };
        fetch("https://laptop-resell-server.vercel.app/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCreatedUserEmail(email)
            });
    };

    const handleUpdateUserProfile = (name) => {
        const profile = {
          displayName: name
        };
        updateUserProfile(profile)
          .then(() => {})
          .catch((e) => console.log(e));
      };

    const handleSubmit = event => {
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        console.log('the role is ', role);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                saveUser(name, email, role);
                handleUpdateUserProfile(name);
                console.log(user);
                setError('');
                setTimeout(() => {
                    setCreatedUserEmail(user.email);
                }, 1000);
                // if (user.email) {
                //     fetch(`https://laptop-resell-server.vercel.app/jwt?email=${email}`)
                //         .then(res => res.json())
                //         .then(data => {
                //             if (data.accessToken) {
                //                 localStorage.setItem('accessToken', data.accessToken);
                                
                //             }
                //         });
                // }
                setLoading(false);
                form.reset();
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
                toast(`Register unsuccessfull ${e.message}`);
                setLoading(false);
                
            });
    }

    if(loading){
        return <LoaderComponent></LoaderComponent>
    }

    return (
        <div>
            <div className='flex justify-center'>

                <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <form onSubmit={handleSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-400">Full name</label>
                            <input type="text" name="name" id="name" placeholder="Enter your Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-400">Email</label>
                            <input type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-400">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>

                        {/* giving role */}
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-400">Select Your Account Type</label>
                            <select name="role" className="select w-full max-w-xs">
                                <option value="buyer" defaultValue>Buyer</option>
                                <option value="seller" >seller</option>
                                {/* <option value="admin" >admin</option> */}
                            </select>
                        </div>


                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    
                    <p className="text-xs text-center sm:px-6 dark:text-red-400">{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;