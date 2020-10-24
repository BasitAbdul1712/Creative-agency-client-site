import React from 'react';
import profile from '../../../images/customer-1.png'
const FeedBack = () => {
    return (
        <main className="service-container my-5">
             <div className="text-center">
                <h1>Provide awesome <span style = {{color: '#4CAF50'}}>services</span> </h1>
            </div>
           <div className = "d-flex justify-content-center">
                <div className = "d-flex justify-content-center w-75 mt-5 row">
                   <div className="col-md-4">
                       <div className="d-flex ">
                           <img width="20%" src={profile} alt=""/>
                           <div className="ml-3">
                           <h3>Jamal Uddin</h3>
                           <h4>CEO, Manpol</h4>
                           </div>
                       </div>
                       <p className = "text-secondary mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero asperiores fugit ratione debitis obcaecati hic consequatur necessitatibus quam modi sequi delectus repellendus, corrupti doloribus dolores.</p>
                    </div> 
                    <div className="col-md-4">
                       <div className="d-flex">
                           <img width="20%" src={profile} alt=""/>
                           <div className="ml-3">
                           <h3>Jamal Uddin</h3>
                           <h4>CEO, Manpol</h4>
                           </div>
                       </div>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero asperiores fugit ratione debitis obcaecati hic consequatur necessitatibus quam modi sequi delectus repellendus, corrupti doloribus dolores.</p>
                    </div>
                    <div className="col-md-4">
                       <div className="d-flex">
                           <img width="20%" src={profile} alt=""/>
                           <div className="ml-3">
                           <h3>Jamal Uddin</h3>
                           <h4>CEO, Manpol</h4>
                           </div>
                       </div>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero asperiores fugit ratione debitis obcaecati hic consequatur necessitatibus quam modi sequi delectus repellendus, corrupti doloribus dolores.</p>
                    </div>
                </div>
           </div>
        </main>
    );
};

export default FeedBack;