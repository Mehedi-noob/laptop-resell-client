import React from 'react';
import { Outlet } from 'react-router-dom';
import DashHeader from './DashHeader/DashHeader';

const Dashboard = () => {
    return (
        <div>
            <DashHeader></DashHeader>
            <Outlet></Outlet>
            <h1 className='text-xl'>Welcome to DashBoard</h1>
        </div>
    );
};

export default Dashboard;