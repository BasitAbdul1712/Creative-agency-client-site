import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const ServiceList = () => {
    return (
        <div className="container-fluid">
            <div className=" ml-5 row">
                <Sidebar></Sidebar>
                <div className="w-75 mt-5 ">
                    <div className="row font-weight-bold d-flex justify-content-between">
                        <div className="col-md-2 col-sm-6">Service List</div>
                        <div className="col-md-2 col-sm-6">User Name</div>
                    </div>

                    <div style={{ backgroundColor: '#F4F7FC', height: '85vh' }} className="mt-3 pt-5 container">

                        <div class="table-responsive card shadow">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Project Details</th>
                                        <th scope="col">Service</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ServiceList;