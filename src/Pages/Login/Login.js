import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';
import LoaderComponent from '../../Shared/LoaderComponent/LoaderComponent';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, providerLogin, setLoading, loading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true });
    }
    

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        console.log(user);
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
            });
    };

    const handleGoogleSignIn = () => {
        setLoading(true);
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                // if (user.uid) {
                //     navigate(from, { replace: true });
                //     console.log("navigate is working")
                //     saveUser(user.displayName, user.email, 'buyer');
                //     // setLoginUserEmail(user.email);
                //     if (user.email) {
                //         fetch(`https://laptop-resell-server.vercel.app/jwt?email=${user.email}`)
                //             .then(res => res.json())
                //             .then(data => {
                //                 if (data.accessToken) {
                //                     localStorage.setItem('accessToken', data.accessToken);
                                    
                //                 }
                //             });
                //     }
                // }
                setTimeout(() => {
                     setLoginUserEmail(user.email);
                }, 1000);
            })
    }

    const handleSubmit = event => {
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(email);
                if (email) {
                    fetch(`https://laptop-resell-server.vercel.app/jwt?email=${email}`)
                        .then(res => res.json())
                        .then(data => {
                            if (data.accessToken) {
                                localStorage.setItem('accessToken', data.accessToken);
                                
                            }
                        });
                }
                // setTimeout(() => {
                //     setLoginUserEmail(email);
                // }, 2000);
                console.log(user);
                setError('');
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                // setLoginUserEmail(email);
                setLoading(false);
            })
    }

    
    if(loading){
        return <LoaderComponent></LoaderComponent>
    }

    return (
        <div>
            {/* {
                loading ?
                    <LoaderComponent></LoaderComponent>
                    : */}
                    <div className='flex justify-center'>
                        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                            <h1 className="text-2xl font-bold text-center">Login</h1>
                            <form onSubmit={handleSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-1 text-sm">
                                    <label className="block dark:text-gray-400">Email</label>
                                    <input type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label className="block dark:text-gray-400">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                    <div className="flex justify-end text-xs dark:text-gray-400">
                                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                            </p>
                        </div>
                        <button onClick={handleGoogleSignIn} className='btn btn-ghost'>login from google</button>
                    </div>
           {/*  } */}
        </div>
    );
};

export default Login;