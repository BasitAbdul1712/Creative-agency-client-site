import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSubmit = (event) => {
        
        event.preventDefault()
        const email =document.getElementById('email').value;
        const addAdmin = {email: email}
    
    
        fetch('https://enigmatic-eyrie-77432.herokuapp.com/addAdmin',{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(addAdmin)
            })
            .then(response => response.json())
            .then(data =>{
                if (data) {
                    alert('Wow! You are a admin now!')
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
                        <div className="col-md-2 col-sm-6">Add Services</div>
                        <div className="col-md-2 col-sm-6">{loggedInUser.name}</div>
                    </div>

                    <div style={{ backgroundColor: '#F4F7FC', height: '85vh' }} className="mt-3 pt-5 container">

                        <form onSubmit={handleSubmit}>
                            <div class="form-row font-weight-bold">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="add@gmail.com" required />
                                </div>
                                <div className="form-group col-md-6">
                                <label for="inputEmail"></label> <br/>
                                <button id="inputEmail" className="btn mt-2 btn-success">Submit</button>

                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MakeAdmin;