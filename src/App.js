import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
// import Dashboard from './components/DashBoard/Dashboard/Dashboard';
import Order from './components/DashBoard/User/Order/Order';
import OrderList from './components/DashBoard/User/OrderList/OrderList';
import Review from './components/DashBoard/User/Review/Review';
import ServiceList from './components/DashBoard/Admin/ServiceList/ServiceList';
import AddService from './components/DashBoard/Admin/AddService/AddService';
import MakeAdmin from './components/DashBoard/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/Login/PrivateRoute';
import Dashboard from './components/DashBoard/Dashboard/DashboardBody/Dashboard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>   
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <PrivateRoute path="/service/:_id">
        <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/Order">
        <Order></Order>
        </Route>
        <PrivateRoute path="/orderList">
          <OrderList></OrderList>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <Review></Review>
        </PrivateRoute>
        <Route path="/serviceList">
          <ServiceList></ServiceList>
        </Route>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
