import{  createBrowserRouter } from"react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllJobs from "../Pages/AllJobs";
import axios from "axios";
import JobDetails from "../Pages/JobDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/all-jobs",
          element: <AllJobs></AllJobs>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/job/:id",
          element: <JobDetails></JobDetails>,
          loader: ({params}) => axios.get(`http://localhost:5000/api/v1/job/${params.id}`)
          
        },
    ]
  },
]);

export default router;
