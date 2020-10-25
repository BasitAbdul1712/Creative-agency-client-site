import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBook, faPlus,faUserPlus, faComments } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    return (
        <div className="col-md-2 mt-5 text-body">
            <div>
                <div>
                <img height="35px" src={logo} alt="" />
                </div>
                <div className="mt-5">
                    <Link  className="nav-link font-weight-bold text-dark" to="/Order">
                        <span  className="mr-2"><FontAwesomeIcon icon={faShoppingCart} /></span>Order</Link>
                </div>
                <div>
                    <Link className="nav-link font-weight-bold text-dark" to="/orderList">
                        <span className="mr-2"><FontAwesomeIcon icon={faBook}></FontAwesomeIcon></span>Order List</Link>
                </div>
                <div>
                    <Link className="nav-link font-weight-bold text-dark" to="/review">
                        <span className="mr-2"><FontAwesomeIcon icon={faComments}></FontAwesomeIcon></span>Review</Link>
                </div>
            </div>
            <div>
                <div>
                    <Link  className="nav-link font-weight-bold text-dark" to="/serviceList">
                        <span  className="mr-2"><FontAwesomeIcon icon={faBook} /></span>Service List</Link>
                </div>
                <div>
                    <Link className="nav-link font-weight-bold text-dark" to="/addService">
                        <span className="mr-2"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span>Add Service</Link>
                </div>
                <div>
                    <Link className="nav-link font-weight-bold text-dark" to="/makeAdmin">
                        <span className="mr-2"><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon></span>Make Admin</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;