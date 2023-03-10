import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import ForgotPassWord from "./pages/ForgotPassWord";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Listing from "./pages/Listing";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<PrivateRoute></PrivateRoute>}>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/forgot-password" element={<ForgotPassWord />}></Route>
          <Route path="/offer" element={<Offer />}></Route>
          <Route path="/category/:categoryName" element={<Category />}></Route>
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          ></Route>
          <Route path="/create-listing" element={<PrivateRoute></PrivateRoute>}>
            <Route path="/create-listing" element={<CreateListing />}></Route>
          </Route>
          <Route path="/edit-listing" element={<PrivateRoute></PrivateRoute>}>
            <Route
              path="/edit-listing/:listingId"
              element={<EditListing />}
            ></Route>
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
