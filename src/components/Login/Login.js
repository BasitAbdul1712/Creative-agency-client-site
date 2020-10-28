import React from 'react';
import logo from '../../images/logos/logo.png'
import { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            const {displayName, email, photoURL} = result.user;
            console.log(displayName, email, photoURL);
            const signedInUser = {
                name: displayName,
                email: email,
                picture: photoURL,
                isSignedIn: true,
            }  
            setLoggedInUser(signedInUser);
            storeAuthToken();
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            // console.log(idToken)
            //session storage e store kore rakha //je jayga theke asbe sekhane save kora
            sessionStorage.setItem('token', idToken)
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }
    
    return (
        <div style={{marginTop: "100px"}} className="container-fluid">
            <div  className="mt-5 text-center">
            <img width="200px" src={logo} alt=""/>
            <div style={{ width: '450px', height: '350px'}} className="container align-items-center card mt-5 shadow ">
                <h1 style={{marginTop: '120px'}}>Login With</h1>
                <div onClick = {handleGoogleSignIn} style = {{border: '1px solid black',  cursor: 'pointer', borderRadius: '20px', width : '350px'}} className="d-flex justify-content pt-1 pl-1 mt-3">
               
                <img width="30px" height="30px" src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=754&fit=crop&dpr=1" alt=""/>
                <p className="ml-5">Continue with Google</p>
            
                </div>
                <p>Don't have an account? <a href="">Crate an account</a></p>
            </div>
            </div>
        </div>
    );
};

export default Login;