import React from 'react';

const Footer = () => {
    return (
        <main style={{ height: '100%' }} className="container-fluid header-bg">
            <div className="row d-flex justify-content-center ">
                <div className="col-md-4 ml-5 my-5">
                    <h1>Let us handle your project, professionally</h1>
                    <p>With all written codes, we build amazing opps for all platforms, mobile web apps in general</p>
                </div>
                <div className="col-md-6 ml-5 my-5">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your email address" />
                        </div>
                        <div class="form-group">
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your name / company's name" />
                        </div>

                        <div class="form-group">
                            <textarea style={{ height: '150px'}} class="form-control" id="exampleFormControl"placeholder="Your message" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-dark">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Footer;