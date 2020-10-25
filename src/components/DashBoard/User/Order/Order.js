import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faBook, faComments} from '@fortawesome/free-solid-svg-icons'
import logo from '../../../../images/logos/logo.png'
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import DashBody from '../../Dashboard/DashboardBody/DashBody';

const Order = () => {
    return (
        <div className="container-fluid">
            <div className="ml-5 row">
                <Sidebar></Sidebar>
                <DashBody></DashBody>
            </div>
        </div>
    );
};

export default Order;