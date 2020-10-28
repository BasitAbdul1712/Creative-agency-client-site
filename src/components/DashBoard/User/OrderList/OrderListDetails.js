import React from 'react';
import logo from '../../../../images/logos/logo.png'


const OrderListDetails = (props) => {
    const { title, description, image } = props.order;
    return (
        <div style={{height: '250px',}} className="col-md-6 col-lg-4 pt-0 col-sm-6 w-auto rounded-lg h-0 card shadow col-xs-12 ">
        
                <div  className="">
                    <div className="mt-2 mr-0 mb-3 d-flex justify-content-between row">
                        <div className="col-2">
                            <img style={{ width: '100px' }} src={`data:image/png;base64,${image.img}`} alt="" />
                        </div>
                        <div className="col--2">
                            <button className="btn btn-warning">Loading</button>
                        </div>
                    </div>
                    <div >
                        <h5>{title}</h5>
                        <p className ="mb-5"> {description} </p>
                    </div>
                </div>
        </div>
    );
};

export default OrderListDetails;