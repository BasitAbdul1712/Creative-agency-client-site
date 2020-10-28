import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';



const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleSubmit = (event) => {
        
            event.preventDefault()
            const name =document.getElementById('name').value;
            const companyName =document.getElementById('companyName').value;
            const description =document.getElementById('description').value;
            // const reviewList = {name: name, companyName:companyName, description: description}
            const orderReview = {...loggedInUser, name: name, companyName:companyName, description: description}
        
        
            fetch('https://enigmatic-eyrie-77432.herokuapp.com/addReview',{
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(orderReview)
                })
                .then(response => response.json())
                .then(data =>{
                    if (data) {
                        alert('your order placed successfully')
                    }
                })
            event.target.reset()
            }
        
    return (
        <div className="container-fluid">
        <div className=" ml-5 row">
            <Sidebar></Sidebar>
            <div className=" w-75 mt-5 ">
                <div className="row font-weight-bold d-flex justify-content-between">
                    <div className="col-md-2 col-sm-6">Order</div>
                    <div className="col-md-2 col-sm-6">{loggedInUser.name}</div>
                </div>

                <div style={{ backgroundColor: '#F4F7FC', height: '85vh' }} className="mt-3 pt-5 ">
                <form className=" pl-3 mb-5 pb-5 w-50">
                        <div class="form-group">
                            <input type="name" class="form-control" id="name" placeholder="Your name" required />
                        </div>
                        <div class="form-group">
                            <input type="companyName" class="form-control" id="companyName" placeholder="Company's name Designation" required />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="description" placeholder="Description" rows="4" required></textarea>
                        </div>
                        <button onClick={handleSubmit} style={{ width: '100px' }} type="submit" class="btn btn-dark mt-3">Submit</button>
                    </form>
                </div>

            </div>

        </div>
    </div>
    );
};

export default Review;