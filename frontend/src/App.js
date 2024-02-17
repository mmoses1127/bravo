import {Switch, Route, Redirect} from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import React from 'react';
import SignupFormPage from './components/signup';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import RideForm from './components/RideForm';
import RideShow from './components/RideShow';
import RideEdit from './components/RideEdit';
import UserShow from './components/UpdateUser';
import Footer from './components/Footer';
import CreateRideMap from './components/RideForm/CreateRideMap';
import ContactAdd from './components_unetwrk/ContactShow';
import Dashboard2 from './components_unetwrk/Dashboard2';
import Signup from './components_unetwrk/Signup';
import Login from './components_unetwrk/Login';
import EmailConfirmation from './components_unetwrk/EmailConfirmation';
import ChoosePlan from './components_unetwrk/ChoosePlan';


function App() {

  return (
    <>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>        
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/create-ride-manual">
          <RideForm />
        </Route>
        <Route path="/create-ride-map">
          <CreateRideMap />
        </Route>
        <Route path="/rides/:rideId/edit">
          <RideEdit/>
        </Route>        
        <Route path="/rides/:rideId">
          <RideShow/>
        </Route>
        <Route path="/users/:userId">
          <Dashboard/>
        </Route>
        <Route path="/profile">
          <UserShow/>
        </Route>


        <Route path="/kanban">
          <Dashboard2/>
        </Route>
        <Route path="/add-contact">
          <ContactAdd/>
        </Route>
        <Route path="/signup2">
          <Signup/>
        </Route>
        <Route path="/login2">
          <Login/>
        </Route>
        <Route path="/email-confirmation">
          <EmailConfirmation/>
        </Route>
        <Route path="/choose-plan">
          <ChoosePlan/>
        </Route>

        <Route path="">
          <Redirect to="/"/>
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
