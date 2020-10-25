import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    return (
        <div className="container-fluid">
            <div className=" ml-5 row">
                <Sidebar></Sidebar>
                <div className=" w-75 mt-5 ">
                    <div className="row  font-weight-bold d-flex justify-content-between">
                        <div className="col-md-2 col-sm-6">Add Services</div>
                        <div className="col-md-2 col-sm-6">User Name</div>
                    </div>

                    <div style={{ backgroundColor: '#F4F7FC', height: '85vh' }} className="mt-3 pt-5 container">

                        <form >
                            <div className="card shadow">
                               <div class="form-row mx-3 my-3">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Service Title</label>
                                            <input type="email" class="form-control" id="inputEmail4" required />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Icon</label>
                                            <br />
                                            <input type="file" class="btn btn-outline-success" id="inputPassword4" required />
                                        </div>
                                        <div class="form-group w-50">
                                        <label for="exampleFormControlTextarea1">Description</label>
                                        <textarea class="form-control" placeholder="Enter Designation" id="exampleFormControlTextarea1" rows="5" required ></textarea>
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