import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderListDetails from './OrderListDetails';
import { UserContext } from '../../../../App';
import CircularProgress from '@material-ui/core/CircularProgress';
const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://enigmatic-eyrie-77432.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                 'Content-Type': 'application/json',
                 authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
        })
            .then(response => response.json())
            .then(data => setOrders(data))
            console.log(orders);
    }, [])
    return (
        <div className="container-fluid">
            <div className=" ml-5 row">
                <Sidebar></Sidebar>
                <div className=" w-75 mt-5 ">

                    <div className="row font-weight-bold d-flex justify-content-between">
                        <div className="col-md-2 col-sm-6">Order</div>
                        <div className="col-md-2 col-sm-6">{loggedInUser.name}</div>
                    </div>
                    {
                        orders.length === 0 &&  <div>
                            <CircularProgress disableShrink />
                            <h5>You have no orders</h5>
                        </div>
                    }
                    <div style={{ backgroundColor: '#F4F7FC', height: '85vh'}} className="mt-3  pt-3 row">
                         {
                                orders.map(order => <OrderListDetails key = {order._id} order = { order }></OrderListDetails> )
                            }
                    </div>

                </div>

            </div>
        </div>

    );
};

export default OrderList;