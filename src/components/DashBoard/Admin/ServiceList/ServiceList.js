import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ServiceListDetails from './ServiceListDetails';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
const ServiceList = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-eyrie-77432.herokuapp.com/orderList', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => setService(data))

    }, [])
    return (
        <div className="container-fluid">
            <div className=" ml-5 row">
                <Sidebar></Sidebar>
                <div className="w-75 mt-5 ">
                    <div className="row font-weight-bold d-flex justify-content-between">
                        <div className="col-md-2 col-sm-6">Service List</div>
                        <div className="col-md-2 col-sm-6">{loggedInUser.name}</div>
                    </div>

                    <div style={{ backgroundColor: '#F4F7FC', height: '85vh' }} className="mt-3 pt-5 container">

                        <div class="table-responsive card shadow">
                            {services.length === 0 && <div className={classes.root}>
                                <LinearProgress />
                                <LinearProgress color="secondary" />
                            </div>}
                            <table class="table table-striped">
                                <thead>
                                    <tr >
                                        <th scope="col">Name</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Project Details</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        services.map(service => <ServiceListDetails key={service._id} service={service}></ServiceListDetails>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ServiceList;