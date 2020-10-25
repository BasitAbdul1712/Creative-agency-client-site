import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import logo from '../../../../images/logos/logo.png'
const OrderList = () => {
    return (
        <div className="container-fluid">
            <div className=" ml-5 row">
                <Sidebar></Sidebar>
                <div className=" w-75 mt-5 ">
                    <div className="row font-weight-bold d-flex justify-content-between">
                        <div className="col-md-2 col-sm-6">Order</div>
                        <div className="col-md-2 col-sm-6">User Name</div>
                    </div>

                    <div style={{ backgroundColor: '#F4F7FC', height: '85vh' }} className="mt-3 pt-5 container">
                        <div className="col-md-4 col-sm-6 rounded-lg card shadow w-75 col-xs-12 ">
                            <div className="">
                                <div className="mt-2 mr-5 mb-3 d-flex justify-content-between row">
                                    <div className="col-md-2">
                                    <img style={{ width: '100px' }} src={logo} alt="" />
                                    </div>
                                    <div className="col-md-2">
                                    <button className="btn btn-warning">Loading</button>
                                    </div>
                                </div>
                                <div>
                                    <h5>Web and Mobile Development </h5>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima blanditiis eaque perspiciatis, pariatur sequi, in at earum nulla porro odio quia ut soluta ducimus maxime? </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    
    );
};

export default OrderList;