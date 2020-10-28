import React from 'react';
import { Card } from 'react-bootstrap';
import profile from '../../../images/customer-1.png'

const FeedBackDetails = (props) => {
    const {name, companyName, description, picture} = props.review;
    return (
        <div className="col-md-6 w-50 col-lg-4 col-sm-12 col-12">
            
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
            
            {/* <div className="d-flex ">
                <img className="rounded-circle z-depth-2" width="20%" src={picture} alt="" />
                <div className="ml-3">
                    <h3>{name}</h3>
                    <h4>{companyName}</h4>
                </div>
            </div>
    <p className="text-secondary mt-3">{description}</p> */}
        </div>
    );
};

export default FeedBackDetails;