import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import ServiceList from '../../Admin/ServiceList/ServiceList';
import Order from '../../User/Order/Order';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://enigmatic-eyrie-77432.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div>
            { isAdmin ? <ServiceList></ServiceList> : <Order></Order>  }
        </div>
    );
};

export default Dashboard;