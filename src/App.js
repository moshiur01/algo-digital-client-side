import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Booking from "./Pages/Booking/Booking";
import AuthProvider from "./Pages/ContextApi/AuthProvider/AuthProvider";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AddServices from "./Pages/Dashboard/AddServices/AddServices";
import Dashboard from "./Pages/Dashboard/Dashbaord";
import AdminRoute from "./Pages/Dashboard/MakeAdmin/adminRoute";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MakePayment from "./Pages/Dashboard/MakePayment/MakePayment";
import ManageOrder from "./Pages/Dashboard/ManageOrders/ManageOrder";
import ManageReview from "./Pages/Dashboard/ManageReview/ManageReview";
import ManageServices from "./Pages/Dashboard/ManageServices/ManageServices";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import WellCome from "./Pages/Dashboard/WellCome/WellCome";
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
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/services" element={<Services></Services>}></Route>
            <Route
              path="/services/services/:id"
              element={
                <PrivateRoute>
                  <ServiceDetails></ServiceDetails>
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard></Dashboard>
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<WellCome></WellCome>}></Route>
              <Route
                path={`dashboard/myOrders`}
                element={<MyOrders></MyOrders>}
              ></Route>

              <Route
                path={`dashboard/makePayment`}
                element={<MakePayment></MakePayment>}
              ></Route>
              <Route
                path={`dashboard/addReview`}
                element={<AddReview></AddReview>}
              ></Route>

              <Route
                path={`dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                }
              ></Route>

              <Route
                path={`dashboard/manageOrders`}
                element={
                  <AdminRoute>
                    <ManageOrder></ManageOrder>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`dashboard/manageServices`}
                element={
                  <AdminRoute>
                    <ManageServices></ManageServices>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`dashboard/addServices`}
                element={
                  <AdminRoute>
                    <AddServices></AddServices>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`dashboard/manageReviews`}
                element={
                  <AdminRoute>
                    <ManageReview></ManageReview>
                  </AdminRoute>
                }
              ></Route>
            </Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signUp" element={<SignUp></SignUp>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
