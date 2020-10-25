import React from 'react';
import logo from '../../../../images/logos/logo.png'
const DashboarHeader = () => {
    return (
        <div className="row d-flex font-weight-bold">
            <div className="col-md-2">
                <img height="35px" src={logo} alt="" />
            </div>
            <div className="col-md-10 d-flex justify-content-between">
                <div className="col-md-2">Order</div>
                <div className="col-md-2  ">User Name</div>
            </div>
        </div>
    );
};

export default DashboarHeader;