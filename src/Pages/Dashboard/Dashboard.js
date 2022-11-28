import React from 'react';
import { Outlet } from 'react-router-dom';
import DashFooter from './DashFooter/DashFooter';
import DashHeader from './DashHeader/DashHeader';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-xl'>Welcome to DashBoard</h1>
            <DashHeader></DashHeader>
            <Outlet></Outlet>
            <DashFooter></DashFooter>
        </div>
    );
};

export default Dashboard;