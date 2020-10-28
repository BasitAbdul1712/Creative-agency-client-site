import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import FakeData from '../../Home/Home/FakeData.json'
const ServiceDetails = (props) => {
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
    // console.log(props);
    const history = useHistory()
    const handleClick = (_id) => {
        const url = `/service/${_id}`;
        history.push(url);
    }
    
    const {title, image, description, _id} = props.service;
    return (
        <div className="col-md-4 col-sm-6 text-center col-xs-12 ">
            {/* <img width="40%" src= alt="" />
            <h5>{service.title}</h5>
            <p className="text-secondary">{service.description}</p> */}
            <Card onClick={()=> {handleClick(_id)} } style={{ width: '17rem', cursor: 'pointer'}}>
                <Card.Body>
                <Card.Img style={{ width: '40%'}}variant="top" src={`data:image/png;base64,${image.img}`} />
                    <Card.Title className="mt-1"> {title} </Card.Title>
                    <Card.Text> {description} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;