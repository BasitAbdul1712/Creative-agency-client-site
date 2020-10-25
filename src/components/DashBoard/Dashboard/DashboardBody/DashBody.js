import React from 'react';

const DashBody = () => {
    return (
        <div className=" w-75 mt-5 ">
            <div className="row font-weight-bold d-flex justify-content-between">
                <div className="col-md-2">Order</div>
                <div className="col-md-2">User Name</div>
            </div>
       
            <div style={{ backgroundColor: '#F4F7FC' , height: '85vh' }} className=" mt-3 pt-5 container">
                <div>
                    <form className=" pl-3  mb-5 pb-5 w-75">
                        <div class="form-group">
                            <input type="name" class="form-control" id="name" placeholder="Your name/ Company's name" required />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" placeholder="Your email address" required />
                        </div>
                        <div class="form-group">
                            <input type="ProjectType" class="form-control" id="ProjectType" placeholder="Graphics design" required />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Project Details" rows="3" required></textarea>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Price" required />
                            </div>
                            <div class="col">
                                <div class="input-group mb-">
                                    <input style={{ color: 'green' }} className="font-weight-bold" type="file" class="" id="file" />
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

export default DashBody;