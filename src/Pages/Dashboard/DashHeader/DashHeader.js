import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const DashHeader = () => {
    const { user, logOut } = useContext(AuthContext);

    const [userRole, setUserRole] = useState([]);

    // fetching role of the users 
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserRole(data))
    }, [user?.email])

    const role = userRole[0];
    console.log(role);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            {
                                role?.role === 'buyer' && <li><Link to={`/dashboard/myorders/${user?.email}`}>My Orders</Link></li>
                            }
                            {
                                role?.role === 'seller' && <div>
                                    <li><Link to="/dashboard/addproduct">Add Products</Link></li>
                                    <li><Link to="/dashboard/myproduct">My Products</Link></li>
                                    <li><Link to="/dashboard">My Buyers</Link></li>
                                </div>
                            }
                            {
                                role?.role === 'admin' && <div>
                                    <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                    <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                    <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                                </div>
                            }
                            <Link><button onClick={handleLogOut} className='btn'>Log Out</button></Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">DashBoard</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        {
                            role?.role === 'buyer' && <li><Link to={`/dashboard/myorders/${user?.email}`}>My Orders</Link></li>
                        }
                        {
                            role?.role === 'seller' && <div className='flex'>
                                <li><Link to="/dashboard/addproduct">Add Products</Link></li>
                                <li><Link to="/dashboard/myproduct">My Products</Link></li>
                                <li><Link to="/dashboard">My Buyers</Link></li>
                            </div>
                        }
                        {
                            role?.role === 'admin' && <div className='flex'>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                            </div>
                        }
                        <Link to='/'><button onClick={handleLogOut} className='btn'>Log Out</button></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default DashHeader;