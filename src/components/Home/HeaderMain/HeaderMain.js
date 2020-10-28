import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main style={{height:'auto'}} className="row d-flex pb-5">
            <div className="col-md-3 pt-5 offset-md-1">
                <h1>Let's Grow Your Brand to The <br/> Next Level</h1>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum repudiandae vero aliquam asperiores veniam animi suscipit qui totam ea error, vel eius adipisci quisquam!</p>
                <button style={{width: '100px'}}className="btn btn-dark">Hire Us</button>
            </div>
            <div className="col-md-5 offset-md-2 ">
                <img  src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;