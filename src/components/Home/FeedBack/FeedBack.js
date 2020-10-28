import React, { useEffect, useState } from 'react';
import FeedBackDetails from './FeedBackDetails';
const FeedBack = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews);
    useEffect(() =>{
        fetch('https://enigmatic-eyrie-77432.herokuapp.com/reviews', {
            method: 'GET',
            headers: {
                 'Content-Type': 'application/json',
                }
        })
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <main className="service-container my-5">
             <div className="text-center">
                <h1>Provide awesome <span style = {{color: '#4CAF50'}}>services</span> </h1>
            </div>
           <div className = "d-flex justify-content-center">
                <div className = "d-flex justify-content-center w-75 mt-5 row">
                   {
                       reviews.map(review =><FeedBackDetails review ={review} ></FeedBackDetails>)
                   }
                    
                </div>
           </div>
        </main>
    );
};

export default FeedBack;