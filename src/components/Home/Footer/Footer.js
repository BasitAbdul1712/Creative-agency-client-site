import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Footer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const name =document.getElementById('name').value;
        const email =document.getElementById('email').value;
        const message =document.getElementById('message').value;
        // const reviewList = {name: name, companyName:companyName, description: description}
        const fullMessage = {...loggedInUser, name: name, email: email, message: message}
        fetch('https://enigmatic-eyrie-77432.herokuapp.com/addMessage',{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(fullMessage)
            })
            .then(response => response.json())
            .then(data =>{
                if (data) {
                    alert('your message has been sent successfully')
                }
            })
            event.target.reset()
        }
    

    return (
        <main style={{ height: '100%' }} className="container-fluid header-bg">
            <div className="row d-flex justify-content-center ">
                <div className="col-md-4 ml-5 my-5">
                    <h1>Let us handle your project, professionally</h1>
                    <p>With all written codes, we build amazing opps for all platforms, mobile web apps in general</p>
                </div>
                <div className="col-md-6 ml-5 my-5">
                    <form onSubmit={handleSubmit} >
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" placeholder="Your email address"  required/>
                        </div>
                        <div class="form-group">
                        <input type="name" class="form-control" id="name" placeholder="Your name / company's name" required />
                        </div>

                        <div class="form-group">
                            <textarea style={{ height: '150px'}} class="form-control" id="message"placeholder="Your message" rows="3" required></textarea>
                        </div>
                        <div>
                            <button className="btn btn-dark">Send</button>
                        </div>
                    </form>
                </div>

                <span className = "">copyright Orange labs 2020</span>
            </div>
            

        </main>
    );
};

export default Footer;