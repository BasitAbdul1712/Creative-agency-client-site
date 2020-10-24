import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceDetails = ({ service }) => {
    return (
        <div className="col-md-4 col-sm-6 text-center col-xs-12 ">
            {/* <img width="40%" src= alt="" />
            <h5>{service.title}</h5>
            <p className="text-secondary">{service.description}</p> */}
            <Card style={{ width: '17rem' }}>
                <Card.Body>
                <Card.Img style={{ width: '40%'}}variant="top" src={service.icon} />
                    <Card.Title className="mt-1"> {service.title} </Card.Title>
                    <Card.Text> {service.description} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;