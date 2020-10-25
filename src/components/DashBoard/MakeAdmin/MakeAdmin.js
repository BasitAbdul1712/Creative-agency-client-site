import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div className="container-fluid">
            <div className=" ml-5 row">
                <Sidebar></Sidebar>
                <div className=" w-75 mt-5 ">
                    <div className="row font-weight-bold d-flex justify-content-between">
                        <div className="col-md-2 col-sm-6">Add Services</div>
                        <div className="col-md-2 col-sm-6">User Name</div>
                    </div>

                    <div style={{ backgroundColor: '#F4F7FC', height: '85vh' }} className="mt-3 pt-5 container">

                        <form>
                            <div class="form-row font-weight-bold">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="add@gmail.com" required />
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