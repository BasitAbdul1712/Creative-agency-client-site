import React from 'react';
import DashBody from './DashboardBody/DashBody';
import DashboarHeader from './DashboardHeader/DashboarHeader';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="container ml-5 row">
                <Sidebar></Sidebar>
                <DashBody></DashBody>
            </div>
        </div>
    );
};

export default Dashboard;