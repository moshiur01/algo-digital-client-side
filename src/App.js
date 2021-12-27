import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import Booking from "./Pages/Booking/Booking";
import AuthProvider from "./Pages/ContextApi/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashbaord";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NoFound/NotFound";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";

import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            {/* <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute> */}
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
