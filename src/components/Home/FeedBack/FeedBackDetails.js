import React from 'react';
import { Card } from 'react-bootstrap';
import profile from '../../../images/customer-1.png'

const FeedBackDetails = (props) => {
    const {name, companyName, description, picture} = props.review;
    return (
        <div className="col-md-6 col-lg-4 mb-3 col-sm-6 col-12">
            
            <Card style={{ width: '18rem'}}>
                <Card.Body>
                <div className="d-flex mb-2">
                <Card.Img className="rounded-circle z-depth-2 mr-2" style={{ width: '30%'}}variant="top" src={picture} />
                <div><h4>{name}</h4>
                <h4>{companyName}</h4></div>
                </div>
                    <Card.Text> {description} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FeedBackDetails;