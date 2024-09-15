import { createBrowserRouter } from "react-router-dom";
import Root from "../../Components/Root/Root";
import Home from "../../Components/Pages/Home/Home";
import Errorpage from "../../Components/Pages/Errorpage/Errorpage";
import DetailsPage from "../../Components/Pages/DetailsPage/DetailsPage";
import Register from "../../Components/Pages/RegisterPage/Register";
import PrivateRoute from "../Private/PrivateRoute";
import Login from "../../Components/Pages/LoginPage/Login";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/glass/:id",
            element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
      ]
    },
  ]);

export default Router;