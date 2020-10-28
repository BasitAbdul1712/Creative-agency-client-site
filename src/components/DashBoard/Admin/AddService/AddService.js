import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState({});
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newServices = { ...services };
        newServices[e.target.name] = e.target.value;
        setServices(newServices)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', services.title)
        formData.append('description', services.description)
        fetch('https://enigmatic-eyrie-77432.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="container-fluid">
            <div className=" ml-5 row">
                <Sidebar></Sidebar>
                <div className=" w-75 mt-5 ">
                    <div className="row  font-weight-bold d-flex justify-content-between">
                        <div className="col-md-2 col-sm-6">Add Services</div>
                        <div className="col-md-2 col-sm-6">{loggedInUser.name}</div>
                    </div>

                    <div style={{ backgroundColor: '#F4F7FC', height: '85vh' }} className="mt-3 pt-5 container">

                        <form onSubmit={handleSubmit} >
                            <div className="card shadow">
                                <div class="form-row mx-3 my-3">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Service Title</label>
                                        <input onBlur={handleBlur} type="text" name="title" class="form-control" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Icon</label>
                                        <br />
                                        <input onChange={handleFileChange} type="file"  id="file" required />
                                    </div>
                                    <div class="form-group w-50">
                                        <label for="exampleFormControlTextarea1">Description</label>
                                        <textarea onBlur={handleBlur} class="form-control" placeholder="Enter Designation" name="description" rows="5" required ></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary mt-3">Submit</button>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddService;