import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../../App';
import FakeData from '../../../Home/Home/FakeData.json'
const OrderDetails = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {_id} = useParams();
    console.log(_id);
    const [addService, setAddService] =useState({});
    // console.log(addService);
    // useEffect(() =>{
    //     fetch('https://enigmatic-eyrie-77432.herokuapp.com/service/'+_id)
    //     .then(response => response.json())
    //     .then(data => setAddService(data))
    // }, [_id])
    // const addService = FakeData.find(pd => pd._id === _id);
    // delete addService._id

    const [orders, setOrders] = useState({});
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newOrders = { ...orders };
        newOrders[e.target.name] = e.target.value;
        setOrders(newOrders)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', orders.title)
        formData.append('name', orders.name)
        formData.append('description', orders.description)
        formData.append('price', orders.price)
        formData.append('email', orders.email)
        fetch('https://enigmatic-eyrie-77432.herokuapp.com/addOrders', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Order added successfully')
            })
            .catch(error => {
                console.error(error)
            })
            event.target.reset()
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const name =document.getElementById('name').value;
    //     const email =document.getElementById('email').value;
    //     const title =document.getElementById('title').value;
    //     const price =document.getElementById('price').value;
    //     const description =document.getElementById('description').value;
    //     const file =document.getElementById('file').value;
    //     // const orderList = {name: name, email: email, title: title, price: price, description: description, file: file}
    //     const orderList = {...loggedInUser, name: name, email: email, title: title, price: price, description: description, file: file}

    //     fetch('https://enigmatic-eyrie-77432.herokuapp.com/addOrders',{
    //         method: 'POST',
    //         headers:{'Content-Type': 'application/json'},
    //         body: JSON.stringify(orderList)
    //     })
    //     .then(response => response.json())
    //     .then(data =>{
    //         if (data) {
    //             alert('your order placed successfully')
    //         }
    //     })
    // // console.log(event);
    // console.log(orderList);
    // }
    return (
        <div className=" w-75 mt-5 ">
            <div className="row font-weight-bold d-flex justify-content-between">
                <div className="col-md-2">Order a course here</div>
                <div className="col-md-2">{loggedInUser.name}</div>
            </div>
       
            <div style={{ backgroundColor: '#F4F7FC' , height: '85vh' }} className=" mt-3 pt-5 container">
                <div>
                    <form onSubmit={handleSubmit}   className=" pl-3  mb-5 pb-5 w-75">
                        <div class="form-group">
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" defaultValue={loggedInUser.name}  placeholder="Your name/ Company's name" required/>
                        </div>
                        <div class="form-group">
                            <input onBlur={handleBlur} type="email" class="form-control" name="email" defaultValue={loggedInUser.email} placeholder="Your email address" required />
                        </div>
                        <div class="form-group">
                            <input onBlur={handleBlur} type="text" class="form-control" name="title" defaultValue={addService.title} placeholder="Graphics design" required />
                        </div>
                        <div class="form-group">
                            <textarea onBlur={handleBlur} class="form-control" name="description" defaultValue={addService.description} placeholder="Project Details" rows="3" required></textarea>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <input onBlur={handleBlur} type="text" class="form-control" name="price" placeholder="Price" required />
                            </div>
                            <div class="col">
                                <div class="input-group mb-">
                                    <input onChange={handleFileChange} style={{ color: 'green' }} className="font-weight-bold" type="file" class="" name="file" />
                                </div>
                            </div>
                        </div>
                        <button style={{ width: '100px' }} type="submit" class="btn btn-dark mt-3">Send</button>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default OrderDetails;