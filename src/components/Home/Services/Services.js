import React, { useEffect, useState } from 'react';
import webAndMob from '../../../images/icons/service1.png';
import graphics from '../../../images/icons/service2.png';
import webDev from '../../../images/icons/service3.png'
import ServiceDetails from './ServiceDetails';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Services = () => {
    const classes = useStyles();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-eyrie-77432.herokuapp.com/service')
            .then(response => response.json())
            .then(data => setServices(data))

    }, [])

    return (
        <main className="service-container mt-5">
            <div className="text-center">
                <h1>Provide awesome <span style={{ color: '#4CAF50' }}>services</span> </h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className=" w-75 mt-5 row">
                    {
                        services.length === 0 && <div className={classes.root}>
                            <CircularProgress />
                            <CircularProgress color="secondary" />
                        </div>
                    }
                    {
                        services.map(service => <ServiceDetails key={service._id} service={service} ></ServiceDetails>)
                    }
                </div>
            </div>
        </main>
    );
};

export default Services;